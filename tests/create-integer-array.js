import { expect } from 'chai';
import { createIntegerArray } from '../src/RomanNumerals';

describe('Creating Integer Arrays from Roman Numeral Strings', () => {
    it('should convert III into array [1,1,1]', () => {
        expect(createIntegerArray('III')).to.be.eql(new Array(1,1,1));
    });
});