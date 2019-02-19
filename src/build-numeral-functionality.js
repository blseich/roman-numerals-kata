import { flow, keys, map, filter, minBy } from 'lodash/fp'
import integerToNumeralMap from './integerToNumeralMap'

const getNearstNumeralInteger = (int) => (flow([
    keys,
    map((key) => parseInt(key)),
    filter((num) => int >= num),
    minBy((num) => int-num)
])(integerToNumeralMap) || 0)

const getSingleNumeral = (int) => integerToNumeralMap[''+int]

export default {
    getNearstNumeralInteger,
    getSingleNumeral
}