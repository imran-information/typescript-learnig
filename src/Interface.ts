type TUser = {
    name: string,
    age: number,
    addres: string
}

type TRole = {
    role: 'admin' | 'user'
}


const user1: TUser = {
    name: 'imran',
    age: 21,
    addres: "Bagdob"
}

const user2: TUser & TRole = {
    name: 'Jobare',
    age: 20,
    addres: 'Bagdob',
    role: 'admin'
}


// interface 

interface IRole {
    role: "admin" | 'user'
}

interface IUser extends IRole {
    name: string,
    age: number,
    addres: string,
}


const user3: IUser = {
    name: 'Jobare',
    age: 20,
    addres: 'Bagdob',
    role: 'user'
}

//  function 

interface IdubbleNumber {
    (num1: number, num2: number): number
}

const dubbleNumber: IdubbleNumber = (num1, num2) => num1 + num2;

console.log(dubbleNumber(20, 20))


// array 

interface IMyFrnds {
    [index: number]: number
}

const myFrnds: IMyFrnds = [20, 40, 60, 80, 100];


