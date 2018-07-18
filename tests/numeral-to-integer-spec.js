import { expect } from 'chai'
import { numeralToInteger } from '../src/RomanNumerals'

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

    it('should convert XVIII to 18', () => {
        expect(numeralToInteger('XVIII')).to.be.equal(18)
    })

    it('should convert XIX to 19', () => {
        expect(numeralToInteger('XIX')).to.be.equal(19)
    })

    it('should convert XX to 20', () => {
        expect(numeralToInteger('XX')).to.be.equal(20)
    })

    it('should convert XIX to 29', () => {
        expect(numeralToInteger('XXIX')).to.be.equal(29)
    })

    it('should convert L to 50', () => {
        expect(numeralToInteger('L')).to.be.equal(50)
    })

    it('should convert XL to 40', () => {
        expect(numeralToInteger('XL')).to.be.equal(40)
    })

    it('should convert XLIV to 44', () => {
        expect(numeralToInteger('XLIV')).to.be.equal(44)
    })

    it('should convert XLIV to 49', () => {
        expect(numeralToInteger('XLIX')).to.be.equal(49)
    })

    it('should convert LXXXIX to 89', () => {
        expect(numeralToInteger('LXXXIX')).to.be.equal(89)
    })

    it('should convert C to 100', () => {
        expect(numeralToInteger('C')).to.be.equal(100)
    })

    it('should convert XC to 90', () => {
        expect(numeralToInteger('XC')).to.be.equal(90)
    })

    it('should convert XC to 93', () => {
        expect(numeralToInteger('XCIII')).to.be.equal(93)
    })

    it('should convert XC to 94', () => {
        expect(numeralToInteger('XCIV')).to.be.equal(94)
    })

    it('should convert XC to 98', () => {
        expect(numeralToInteger('XCVIII')).to.be.equal(98)
    })


    it('should convert XC to 99', () => {
        expect(numeralToInteger('XCIX')).to.be.equal(99)
    })
})
