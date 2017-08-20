const {expect} = require('chai');

const BarrelHandler = require('./barrelHandler');

describe('barrel handler', () => {
    it('lower than first barrel should be out of barrel', () => {
        const sut = new BarrelHandler();

        const result = sut.isInBarrel(295);

        expect(result).to.be.false;
    });
});