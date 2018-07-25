import { flow, keys, map, filter, minBy } from 'lodash/fp'

const intToNumMap = {
    10: 'X',
    5: 'V',
    1: 'I'
}

const getNearstNumeralInteger = (int) => (flow([
    keys,
    map((key) => parseInt(key)),
    filter((num) => int >= num),
    minBy((num) => int-num)
])(intToNumMap) || 0)

const getNumeral = (int) => intToNumMap[''+int]

export default {
    getNearstNumeralInteger,
    getNumeral
}