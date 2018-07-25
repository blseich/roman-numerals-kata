import { expect } from 'chai'
import { integerToNumeral } from '../src/RomanNumerals'

describe("Integer to Numeral", () => {

    it('should convert 1 to I', () => {
        expect(integerToNumeral(1)).to.be.equal('I')
    })

    it('should convert 5 to V', () => {
        expect(integerToNumeral(5)).to.be.equal('V')
    })

    it('should convert 6 to VI', () => {
        expect(integerToNumeral(6)).to.be.equal('VI')
    })

})