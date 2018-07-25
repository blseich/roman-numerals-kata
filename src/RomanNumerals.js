import numeralToIntegerMap from './numeralToInteger';
import _ from 'lodash';

const combineNumeralValues = (acc, val, i, coll) => coll[i] < coll[i+1] && i+1 < coll.length ? acc - val : acc + val;

const numeralToInteger = (numeralStr) => (_.chain(numeralStr.split("")
    .map(numeral => numeralToIntegerMap[numeral]))
    .reduceRight(combineNumeralValues, 0)
    .value())

const integerToNumeral = (int) => {
    if(int <= 0) return ''
    if(int === 4) return 'IV'
    return int >= 10 ? 'X' + integerToNumeral(int-10) : int >= 5 ? 'V' + integerToNumeral(int-5) : 'I' + integerToNumeral(int-1)
}

export {
    numeralToInteger,
    integerToNumeral
}

