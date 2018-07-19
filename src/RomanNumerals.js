import numeralToIntegerMap from './numeralToInteger';

const createIntegerArray = (numeral) => {
    return (numeral.split("")).map( curr => {
        return numeralToIntegerMap[curr];
    });
};

const reduceIntegerArray = (integerArr) => {
    return integerArr.reduceRight((sum, curr, i, arr) => {
        if(arr[i+1] > curr) {
            return sum - curr;
        } else {
            return sum + curr;
        }
    });
};

const numeralToInteger = (numeral) => {
    let integerArr = createIntegerArray(numeral);

    return reduceIntegerArray(integerArr);
};

export {
    createIntegerArray,
    numeralToInteger
}
