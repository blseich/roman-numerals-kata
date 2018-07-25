import { expect } from 'chai'
import { integerToNumeral } from '../src/RomanNumerals'

describe("Integer to Numeral", () => {

    it('should convert 1 to I', () => {
        expect(integerToNumeral(1)).to.be.equal('V')
    })

})