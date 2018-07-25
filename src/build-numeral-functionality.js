import { flow, keys, map, filter, minBy } from 'lodash/fp'

const intToNumMap = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
}

const getNearstNumeralInteger = (int) => (flow([
    keys,
    map((key) => parseInt(key)),
    filter((num) => int >= num),
    minBy((num) => int-num)
])(intToNumMap) || 0)

const getSingleNumeral = (int) => intToNumMap[''+int]

export default {
    getNearstNumeralInteger,
    getSingleNumeral
}