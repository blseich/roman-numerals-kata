import { flow, keys, map, sortBy } from 'lodash/fp'

const intToNumMap = {
    10: 'X',
    5: 'V',
    1: 'I'
}

const buildIntegerRepresentativeArray = () => flow([keys,
    map((key) => parseInt(key)),
    sortBy((int) => 0-int)
])(intToNumMap)

const getNumeral = (int) => intToNumMap[''+int]

export default {
    buildIntegerRepresentativeArray,
    getNumeral
}