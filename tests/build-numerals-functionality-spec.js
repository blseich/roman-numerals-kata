import { expect } from 'chai'
import buildNumFunc from '../src/build-numeral-functionality.js'

describe('Build Numeral Functionality', () => {

    it('should return 5 when passed 6-9', () => {
        expect(buildNumFunc.getNearstNumeralInteger(6)).to.be.equal(5)
        expect(buildNumFunc.getNearstNumeralInteger(7)).to.be.equal(5)
        expect(buildNumFunc.getNearstNumeralInteger(8)).to.be.equal(5)
    })

    it('should return IV for 4', () => {
        expect(buildNumFunc.getNearstNumeralInteger(4)).to.be.equal(4)
    })

    it('should return 0 when passed 0', () => {
        expect(buildNumFunc.getNearstNumeralInteger(0)).to.be.equal(0)
    })

    it('should return X when provided 10', () => {
        expect(buildNumFunc.getSingleNumeral(10)).to.be.equal('X')
    })

    it('should return V for 5', () => {
        expect(buildNumFunc.getSingleNumeral(5)).to.be.equal('V')
    })

    it('should return I for 1', () => {
        expect(buildNumFunc.getSingleNumeral(1)).to.be.equal('I')
    })
})