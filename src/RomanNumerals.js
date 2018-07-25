import numeralToIntegerMap from './numeralToInteger';
import _ from 'lodash';

const combineNumeralValues = (acc, val, i, coll) => coll[i] < coll[i+1] && i+1 < coll.length ? acc - val : acc + val;

const numeralToInteger = (numeralStr) => (_.chain(numeralStr.split("")
    .map(numeral => numeralToIntegerMap[numeral]))
    .reduceRight(combineNumeralValues, 0)
    .value())

const integerToNumeral = () => 'V'

export {
    numeralToInteger,
    integerToNumeral
}

