const createOnesArray = () => {
    return [[],[1], [1,1], [1,1,1], [1,5], [5], [5,1], [5,1,1], [5,1,1,1], [1,10]];
};

const getOnesPlace = (integer) => {
    const ones = {
        1: 'I',
        5: 'V',
        10: 'X'
    };
    
    return createOnesArray()[integer].map( curr => ones[curr]).join('');
}

const integerToNumeral = (integer) => {
    return getOnesPlace(integer);
}

export {
    integerToNumeral
};

// IVXLCDM
// ones: IVX
// tens: XLC
// hundreds: CDM
// thousands: M
