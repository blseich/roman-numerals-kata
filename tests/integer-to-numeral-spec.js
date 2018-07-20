import { expect } from 'chai';
import { integerToNumeral } from '../src/Integers';

describe('Converting Integers to Roman Numerals', () => {
    it('should convert 1 to I', () => {
        expect(integerToNumeral(1)).to.be.equal('I');
    });

    it('should convert 2 to II', () => {
        expect(integerToNumeral(2)).to.be.equal('II');
    });

    it('should convert 4 to IV', () => {
        expect(integerToNumeral(4)).to.be.equal('IV');
    });

    it('should convert 5 to V', () => {
        expect(integerToNumeral(5)).to.be.equal('V');
    });

    it('should convert 8 to VIII', () => {
        expect(integerToNumeral(8)).to.be.equal('VIII');
    });

    it('should convert 9 to IX', () => {
        expect(integerToNumeral(9)).to.be.equal('IX');
    });

});
