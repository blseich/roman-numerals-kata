import numeralToIntegerMap from './numeralToInteger'
import buildNumFunc from './build-numeral-functionality'
import _ from 'lodash';
import { compose, keys, map, sort } from 'lodash/fp'

const combineNumeralValues = (acc, val, i, coll) => coll[i] < coll[i+1] && i+1 < coll.length ? acc - val : acc + val;

const numeralToInteger = (numeralStr) => (_.chain(numeralStr.split("")
    .map(numeral => numeralToIntegerMap[numeral]))
    .reduceRight(combineNumeralValues, 0)
    .value())

const buildNumeral = (int, val) => buildNumFunc.getNumeral(val) + integerToNumeral(int-val)


const integerToNumeral = (int) => {
    const integerArray = buildNumFunc.buildIntegerRepresentativeArray(int)
    if(int === 0) return ''
    if(int === 4) return 'IV'

    return buildNumFunc.getNumeral(integerArray[0]) + integerToNumeral(int - integerArray[0])
}

export {
    numeralToInteger,
    integerToNumeral
}

