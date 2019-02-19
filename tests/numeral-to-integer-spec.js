import { expect } from 'chai'
import { numeralToInteger } from '../src/RomanNumerals'

describe('Converting Roman Numerals to Integers', () => {
    
    it('should convert I to 1', () => {
        expect(numeralToInteger('I')).to.be.equal(1)
    })
    
})