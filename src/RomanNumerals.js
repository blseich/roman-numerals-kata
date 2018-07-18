import numeralToIntegerMap from './numeralToInteger';

const createIntegerArray = (numeralString) => {
    return (numeralString.split("")).map( curr => {
        return numeralToIntegerMap[curr];
    });
};

const numeralToInteger = (numeral) => {
    if(numeral.length === 1){
        return numeralToIntegerMap[numeral];
    }

    let integerArr = numeral.split("").map((curr) => {
        numeralToIntegerMap[curr];
    });

    



    for(let i = 1; i < numeral.length; i++){
        let char = numeralToIntegerMap[numeral.charAt(i)];
        let prevChar = numeralToIntegerMap[numeral.charAt(i-1)];
        if(char > prevChar){
            integer = char - integer;
        } else {
            integer += char;
        }
    }

    return integer;
};

export {
    createIntegerArray,
    numeralToInteger
}
