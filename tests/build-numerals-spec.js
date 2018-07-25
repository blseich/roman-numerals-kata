import { expect } from 'chai'
import buildNumFunc from '../src/build-numeral-functionality.js'

describe('Build Numeral Functionality', () => {

    it('should return sorted array of integers that correspond to numerals', () => {
        expect(buildNumFunc.buildIntegerRepresentativeArray()).to.include.ordered.members([10, 5, 1]);
    })

    it('should return X when provided 10', () => {
        expect(buildNumFunc.getNumeral(10)).to.be.equal('X')
    })
    
})