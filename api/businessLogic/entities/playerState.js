const { RepeatState } = require('./shotResult');
const BarrelHandler = require('../barrelHandler');

const BarrelAttemptTreshold = 3;
const DoublesInRowTreshold = 3;
const OpenStateTreshold = 50;
const DefaultBonesToThrow = 5;
const BurnDownValue = 525;
const VictoryTreshold = 1000;

class BarrelState {
    constructor(isActive, attemptCount) {
        this.isActive = isActive;
        this.attemptCount = attemptCount;
    }

    updateActivity(isActive) {
        this.isActive = isActive;
        this.attemptCount = 0;
    }
}

class ThrowBonesResponse {
    constructor(toContinue, isVictory = false) {
        this.toContinue = !!toContinue;
        this.isVictory = isVictory;
    }
}

class PlayerState {
    constructor() {
        this.barrelState = new BarrelState(false, 0);
        this.isOpen = false;
        this.score = 0;
        this.bonesToThrow = DefaultBonesToThrow;
        this.shotScore = 0;
        this.doublesInRow = 0;
        this._barrelHandler = new BarrelHandler();
    }

    onThrowBones(shotResult) {
        if (!shotResult || shotResult.repeatState === RepeatState.disabled) {
            this._resetShot();
            return new ThrowBonesResponse(false);
        }

        if (shotResult.repeatState === RepeatState.required) {
            this.doublesInRow += 1;

            if (this.doublesInRow === DoublesInRowTreshold) {
                this.doublesInRow = 0;
                this.setPenalty();
                return new ThrowBonesResponse(false);
            }
        } else {
            this.doublesInRow = 0;
            if(this.score + this.shotScore + shotResult.score === VictoryTreshold || shotResult.isEarlyVictory) {
                return new ThrowBonesResponse(false, true);
            }
        }

        this.shotScore += shotResult.score;
        this.bonesToThrow = shotResult.leftover;

        return new ThrowBonesResponse(!this._checkBurnDown(this.score + this.shotScore));
    }

    finishAttempt() {
        if (!this.isOpen) {
            if (this.shotScore < OpenStateTreshold) {
                this._resetShot();
                return;
            } else {
                this.isOpen = true;
            }
        }

        this._checkBarrel(this.score + this.shotScore);

        this.score += this.shotScore;
        this._resetShot();
    }

    setPenalty(value) {
        if (this.barrelState.isActive) {
            this._resetShot();
            return;
        }

        this.score -= value;
        this._checkBurnDown(this.score);

        if (this._barrelHandler.isInBarrel(this.score)) {
            this.barrelState.updateActivity(true);
        }
        this._resetShot();
    }

    _resetShot() {
        this.shotScore = 0;
        this.bonesToThrow = DefaultBonesToThrow;
    }

    _checkBarrel(value) {
        if (this._barrelHandler.isInBarrel(value)) {

            if (this.barrelState.isActive) {
                this.barrelState.attemptCount += 1;

                if (this.barrelState.attemptCount === BarrelAttemptTreshold) {
                    this.barrelState.updateActivity(false);
                    this.setPenalty(100);
                    this.shotScore = 0;
                }
            } else {
                this.barrelState.updateActivity(true);
            }
        } else {

            if (this.barrelState.isActive) {
                this.barrelState.updateActivity(false);
            }
        }
    }

    _checkBurnDown(value) {
        if (value !== BurnDownValue) {
            return
        }

        this.score = 0;
        this._resetShot();
        return true;
    }
}

module.exports = { PlayerState };