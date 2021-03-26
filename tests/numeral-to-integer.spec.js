import { numeralToInteger } from '../src/RomanNumerals'

describe('Converting Roman Numerals to Integers', () => {
    
    it('should convert I to 1', () => {
        expect(numeralToInteger('I')).toEqual(1)
    })
    
})