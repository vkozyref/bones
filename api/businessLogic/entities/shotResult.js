class ShotResult {
    constructor(score, repeatState, leftover, isEarlyVictory = false) {
        this.score = score;
        this.repeatState = repeatState;
        this.leftover = leftover;
        this.isEarlyVictory = isEarlyVictory;
    }
}

const RepeatState = {
    disabled: 1,
    allowed: 2,
    required: 3
};

module.exports = {ShotResult, RepeatState};