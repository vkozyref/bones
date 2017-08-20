class ShotGenerator {
    generate(bonesNumber) {
        const shots = [];
        for(let i = 0; i < bonesNumber; i++) {
            shots.push(Math.random() * 6 + 1);
        }
        return shots;
    }
}

module.exports = ShotGenerator;