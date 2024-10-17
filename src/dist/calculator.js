"use strict";
const addArrowFunc = (a, b) => a + b;
const subtractArrowFunc = (a, b) => a - b;
const multiplyArrowFunc = (a, b) => a * b;
const divideArrowFunc = (a, b) => a / b;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
const a = 15;
const b = 5;
console.log(addArrowFunc(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
