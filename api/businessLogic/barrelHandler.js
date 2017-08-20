const firstBarrelLowLimit = 300;
const firstBarrelHighLimit = 400;
const secondBarrelLowLimit = 700;
const secondBarrelHighLimit = 800

class BarrelHandler {   
    isInBarrel(score) {
        return (score >= firstBarrelLowLimit && score <= firstBarrelHighLimit) 
            || (score >= secondBarrelLowLimit && score <= secondBarrelHighLimit)
    }
}

module.exports = BarrelHandler;