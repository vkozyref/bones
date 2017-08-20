const GroupedShotInput = require('./entities/groupedShotInput');
const { ShotResult, RepeatState } = require('./entities/shotResult');

class ResultCalculator {
    run(shotResult) {
        if (!shotResult || !shotResult.length) {
            return;
        }

        let groupedResultSet = {};
        shotResult.forEach(x => {
            groupedResultSet[x] = groupedResultSet[x] || new GroupedShotInput(x, 0);
            groupedResultSet[x].quantity += 1;
        });

        groupedResultSet = Object.keys(groupedResultSet).sort((a, b) => b - a).map(key => groupedResultSet[key]);

        return this._calculateResultShot(groupedResultSet);
    }

    _calculateResultShot(groupedResultSet) {
        if (groupedResultSet.length === 5 && (groupedResultSet[0] === 2 || groupedResultSet[groupedResultSet.length - 1] === 5)) {
            return new ShotResult(150, RepeatState.allowed, 0);
        }

        let score = 0;
        let unmappedInput = [];

        const fivesome = groupedResultSet.find(r => r.quantity === 5);
        
        if (fivesome) {
            if (fivesome.value === 1) {
                score = 1000;
            } else {
                scope = fivesome.value * 50
            }
        } else {
            const foursome = groupedResultSet.find(r => r.quantity === 4);
            
            if (foursome) {                
                unmappedInput = groupedResultSet.filter(r => r.quantity !== 4);

                if (foursome.value === 1) {
                    score = 400;
                } else {
                    score = foursome.value * 40;
                }
            }
            else {
                const threesome = groupedResultSet.find(r => r.quantity === 3);

                if (threesome) {
                    unmappedInput = groupedResultSet.filter(r => r.quantity !== 3);

                    if (threesome.value === 1) {
                        score = 100;
                    } else {
                        score = threesome.value * 10;
                    }
                } else {
                    unmappedInput = groupedResultSet;
                }
            }

            const regularResult = this._calculateRegularResult(unmappedInput);
            score += regularResult.score;

            return new ShotResult(score,
                score === 0
                    ? RepeatState.disabled
                    : regularResult.repeatState,
                regularResult.leftover);
        }
    }

    _calculateRegularResult(groupedResultSet) {
        let score = 0;
        let leftover = groupedResultSet.map(rs => rs.quantity).reduce((x, y) => x + y, 0);
        
        groupedResultSet.forEach(r => {
            if (r.value === 5) {
                score += 5;
                leftover -= 1;
            } else if (r.value === 1) {
                score += 10;
                leftover -= 1;
            }
        });

        const nonCountableValues = groupedResultSet.filter(r => r.value !== 1 && r.value !== 5);
        const repeatState = nonCountableValues.length === 1 && nonCountableValues[0].quantity === 2
            ? RepeatState.required
            : RepeatState.allowed;

        return new ShotResult(score, repeatState, leftover, fivesome && score === 1000);
    }
}

module.exports = ResultCalculator;