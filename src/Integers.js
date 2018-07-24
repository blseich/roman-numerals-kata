import { curry } from 'lodash';

const ones = {
    '0': '',
    '1': 'I',
    '5': 'V',
    '10': 'X'
};

const tens = {
    '0': '',
    '1': 'X',
    '5': 'L',
    '10': 'C'
};

const hundreds = {
    '0': '',
    '1': 'C',
    '5': 'D',
    '10': 'M'
};

const thousands = {
    '1': 'M'
};

const patternArray = [['0'],['1'], ['1','1'], ['1','1','1'], ['1','5'], ['5'], ['5','1'], ['5','1','1'], ['5','1','1','1'], ['1','10']];

const basePatternArrayReplacerFunction = (placeObject, intLessThanTen) => {
    return patternArray[intLessThanTen].map( curr => placeObject[curr]).join('');
};

const createPatternArrayReplacerFunction = curry(basePatternArrayReplacerFunction);

const replaceOnesPlace = createPatternArrayReplacerFunction(ones);
const replaceTensPlace = createPatternArrayReplacerFunction(tens);
const replaceHundredsPlace = createPatternArrayReplacerFunction(hundreds);
const replaceThousandsPlace = (intLessThanTen) => {
    if(intLessThanTen === '4'){
        return 'MMMM';
    } else {
        return patternArray[intLessThanTen].map( curr => thousands[curr]).join('');
    }
};
const replacerFunctions = [replaceThousandsPlace, replaceHundredsPlace, replaceTensPlace, replaceOnesPlace];

const convertIntToArray = (integer) => {
    return integer.toString().split('');
};

const integerToNumeral = (integer) => {
    let intArr = convertIntToArray(integer);
    let replacerFunctionsCopy = replacerFunctions.slice(); 

    return intArr.reduceRight((numeral, intLessThanTen) => {
        let replacer = replacerFunctionsCopy.pop();
        return replacer(intLessThanTen) + numeral;
    }, '');
};

export {
    integerToNumeral
};
