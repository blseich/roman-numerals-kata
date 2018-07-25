import { expect } from 'chai'
import buildNumFunc from '../src/build-numeral-functionality.js'

describe('Build Numeral Functionality', () => {

    it('should return sorted array of integers less than the provided integer', () => {
        expect(buildNumFunc.buildIntegerRepresentativeArray(7)).to.include.ordered.members([5, 1]);
    })

    it('should return empty array when passed 0', () => {
        expect(buildNumFunc.buildIntegerRepresentativeArray(0)).to.be.empty;
    })

    it('should return X when provided 10', () => {
        expect(buildNumFunc.getNumeral(10)).to.be.equal('X')
    })

    it('should return V for 5', () => {
        expect(buildNumFunc.getNumeral(5)).to.be.equal('V')
    })

    it('should return I for 1', () => {
        expect(buildNumFunc.getNumeral(1)).to.be.equal('I')
    })
})