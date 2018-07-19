import { expect } from 'chai'
import numeralToInteger from '../src/RomanNumerals'

describe('Converting Roman Numerals to Integers', () => {
    
    it('should convert I to 1', () => {
        expect(numeralToInteger('I')).to.be.equal(1)
    })

    it('should convert II to 2', () => {
        expect(numeralToInteger('II')).to.be.equal(2)
    })

    it('should convert IV to 4', () => {
        expect(numeralToInteger('IV')).to.be.equal(4)
    })

    it('should convert V to 5', () => {
        expect(numeralToInteger('V')).to.be.equal(5)
    })

    it('should convert VIII to 8', () => {
        expect(numeralToInteger('VIII')).to.be.equal(8)
    })

    it('should convert IX to 9', () => {
        expect(numeralToInteger('IX')).to.be.equal(9)
    })

    it('should convert X to 10', () => {
        expect(numeralToInteger('X')).to.be.equal(10)
    })

    it('should convert XIII to 13', () => {
        expect(numeralToInteger('XIII')).to.be.equal(13)
    })

    it('should convert XIV to 14', () => {
        expect(numeralToInteger('XIV')).to.be.equal(14)
    })

    it('should convert XIX to 19', () => {
        expect(numeralToInteger('XIX')).to.be.equal(19)
    })

    it('should convert L to 50', () => {
        expect(numeralToInteger('L')).to.be.equal(50)
    })

    it('should convert LXXXIV to 84', () => {
        expect(numeralToInteger('LXXXIV')).to.be.equal(84)
    })
    
})