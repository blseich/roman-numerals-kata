import { flow, keys, map, filter, sortBy } from 'lodash/fp'

const intToNumMap = {
    10: 'X',
    5: 'V',
    1: 'I'
}

const buildIntegerRepresentativeArray = (int) => flow([
    keys,
    map((key) => parseInt(key)),
    filter((num) => int >= num),
    sortBy((num) => 0-num)
])(intToNumMap)

const getNumeral = (int) => intToNumMap[''+int]

export default {
    buildIntegerRepresentativeArray,
    getNumeral
}