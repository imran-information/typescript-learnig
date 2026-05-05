const numberArray = <T>(num1: T, num2: T): T => {
    return [num1, num2]
};

const numberArrayTotal = numberArray(200, 300)

console.log(numberArrayTotal)


const frndArray = <T>(frnd1: T, frnd2: T, frnd3: T): T[] => {
    return [frnd1, frnd2, frnd3];
};

const frndArrayResult = frndArray('imran', 'ok', 'ok');
console.log(frndArrayResult);


const createNumberWithArray = <T>(value: T) => {
    return [value]
}

const createStringWithArray = <T>(value: T) => {
    return [value]
}

const createObjWithArray = <T>(value: T) => {
    return [value]
}

const objArray = createObjWithArray({ name: 'imran', age: 40 })
console.log(objArray)


const byProductWithGeneric = <T>(customerInfo: T) => {
    return customerInfo
}


const customer1 = {
    id: 125,
    name: 'unknon',
    address: "bagdob",
    isMarred: true,
}

const customerInfo = byProductWithGeneric(customer1)
console.log(customerInfo)