import { expect } from 'chai';
import { createIntegerArray } from '../src/RomanNumerals';

describe('Creating Integer Arrays from Roman Numeral Strings', () => {
    it('should convert III into array [1,1,1]', () => {
        expect(createIntegerArray('III')).to.be.eql(new Array(1,1,1));
    });

    it('should create an array that matches the ordering of the numeral (eg. XIV to [10, 1, 5])', () => {
        expect(createIntegerArray('XIV')).to.be.eql(new Array(10,1,5));
    });
});