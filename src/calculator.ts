interface Operation{
    (a: number, b: number) : number
}


const addArrowFunc: Operation = (a, b) => a + b
const subtractArrowFunc: Operation = (a, b) => a - b 
const multiplyArrowFunc: Operation = (a, b) => a * b 
const divideArrowFunc: Operation = (a, b) => a / b 


function add(a: number, b: number): number {
    return a + b
}

function subtract(a: number, b: number): number {
    return a - b
}

function multiply(a: number, b: number): number {
    return a * b
}

function divide(a: number, b: number): number {
    return a / b
}

const a: number = 15
const b: number = 5


console.log(addArrowFunc(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))
