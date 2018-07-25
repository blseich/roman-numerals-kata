import numeralToIntegerMap from './numeralToInteger';
import _ from 'lodash';
import { compose, keys, map, sort } from 'lodash/fp'

const combineNumeralValues = (acc, val, i, coll) => coll[i] < coll[i+1] && i+1 < coll.length ? acc - val : acc + val;

const numeralToInteger = (numeralStr) => (_.chain(numeralStr.split("")
    .map(numeral => numeralToIntegerMap[numeral]))
    .reduceRight(combineNumeralValues, 0)
    .value())

const integerToNumeralMap = {
    10: 'X',
    5: 'V',
    1: 'I'
}

const buildNumeral = (int, val) => integerToNumeralMap[''+val] + integerToNumeral(int-val)


const integerToNumeral = (int) => {
    if(int <= 0) return ''
    if(int === 4) return 'IV'

    return int >= 10 ? buildNumeral(int, 10) : int >= 5 ? buildNumeral(int, 5) : buildNumeral(int, 1)
}

export {
    numeralToInteger,
    integerToNumeral
}

