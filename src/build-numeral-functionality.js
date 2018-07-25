const buildIntegerRepresentativeArray = () => [10, 5, 1]

const getNumeral = (int) => ({
    10: 'X',
    5: 'V',
    1: 'I'
}[''+int])

export default {
    buildIntegerRepresentativeArray,
    getNumeral
}