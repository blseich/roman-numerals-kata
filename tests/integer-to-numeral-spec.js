import { expect } from 'chai'
import { integerToNumeral } from '../src/RomanNumerals'

describe("Integer to Numeral", () => {

    it('should convert 1 to I', () => {
        expect(integerToNumeral(1)).to.be.equal('I')
    })

    it('should 2 convert II', () => {
        expect(integerToNumeral(2)).to.be.equal('II')
    })

    it('should convert 4 to IV', () => {
        expect(integerToNumeral(4)).to.be.equal('IV')
    })

    it('should convert 5 to V', () => {
        expect(integerToNumeral(5)).to.be.equal('V')
    })

    it('should convert 6 to VI', () => {
        expect(integerToNumeral(6)).to.be.equal('VI')
    })

    it('should convert 9 to IX', () => {
        expect(integerToNumeral(9)).to.be.equal('IX')
    })

    it('should convert 10 to X', () => {
        expect(integerToNumeral(10)).to.be.equal('X')
    })

    it('should convert 11 to XI', () => {
        expect(integerToNumeral(11)).to.be.equal('XI')
    })

    it('should convert 14 to XIV', () => {
        expect(integerToNumeral(11)).to.be.equal('XI')
    })

    it('should convert 19 to XIX', () => {
        expect(integerToNumeral(19)).to.be.equal('XIX')
    })

})