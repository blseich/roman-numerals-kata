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

    it('should convert 10 to X', () => {
        expect(integerToNumeral(10)).to.be.equal('X');
    });

    it('should convert 38 to XXXVIII', () => {
        expect(integerToNumeral(38)).to.be.equal('XXXVIII');
    });

    it('should convert 49 to XLIX', () => {
        expect(integerToNumeral(49)).to.be.equal('XLIX');
    });

    it('should convert 50 to L', () => {
        expect(integerToNumeral(50)).to.be.equal('L');
    });

    it('should convert 88 to LXXXVIII', () => {
        expect(integerToNumeral(88)).to.be.equal('LXXXVIII');
    });

    it('should convert 99 to XCIX', () => {
        expect(integerToNumeral(99)).to.be.equal('XCIX');
    });

    it('should convert 100 to C', () => {
        expect(integerToNumeral(100)).to.be.equal('C');
    });

    it('should convert 253 to CCLIII', () => {
        expect(integerToNumeral(253)).to.be.equal('CCLIII');
    });

    it('should convert 499 to CDXCIX', () => {
        expect(integerToNumeral(499)).to.be.equal('CDXCIX');
    });

    it('should convert 500 to D', () => {
        expect(integerToNumeral(500)).to.be.equal('D');
    });

    it('should convert 749 to DCCXLIX', () => {
        expect(integerToNumeral(749)).to.be.equal('DCCXLIX');
    });

    it('should convert 999 to CMXCIX', () => {
        expect(integerToNumeral(999)).to.be.equal('CMXCIX');
    });

    it('should convert 1000 to M', () => {
        expect(integerToNumeral(1000)).to.be.equal('M');
    });

    it('should convert 2166 to MMCLXVI', () => {
        expect(integerToNumeral(2166)).to.be.equal('MMCLXVI');
    });

    it('should convert 4999 to MMMMCMXCIX', () => {
        expect(integerToNumeral(4999)).to.be.equal('MMMMCMXCIX');
    });
});
