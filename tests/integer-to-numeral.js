import { expect } from 'chai'
import { integerToNumeral } from '../src/RomanNumerals'

describe("Integer to Numeral", () => {

    it('should convert 1 to I', () => {
        expect(integerToNumeral(1)).to.be.equal('I')
    })

    it('should 2 convert II', () => {
        expect(integerToNumeral(2)).to.be.equal('II')
    })

    it('should 3 convert III', () => {
        expect(integerToNumeral(3)).to.be.equal('III')
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

    it('should 7 convert VII', () => {
        expect(integerToNumeral(7)).to.be.equal('VII')
    })

    it('should 8 convert VIII', () => {
        expect(integerToNumeral(8)).to.be.equal('VIII')
    })

})