//Людина вводить вік, ви виводите класифікаційну назву віку

const userInputAge = prompt('Enter your age');
const userInputAgeCheck = Number(userInputAge);
const errorMessage ='error';
const babyClassification ='baby';
const kinderClassification ='kinder';
const childClassification ='child';
const teenagerClassification ='teenager';
const adultClassification ='adult';
const oldClassification ='old';

if (userInputAge === '' || 
userInputAge === null || 
Number.isNaN(userInputAgeCheck) || 
userInputAgeCheck < 0 || 
userInputAgeCheck > 150) 
{
    console.log(errorMessage);
} else if (userInputAgeCheck < 2) {
    console.log(babyClassification);
} else if (userInputAgeCheck < 6) {
    console.log(kinderClassification);
} else if (userInputAgeCheck < 12) {
    console.log(childClassification);
} else if (userInputAgeCheck < 18) {
    console.log(teenagerClassification);
} else if (userInputAgeCheck < 65) {
    console.log(adultClassification);
} else if (userInputAgeCheck < 100) {
    console.log(oldClassification);
} else {
    console.log('respect');
} 


// Написати функцію Калькулятор, яка приймає аргументами два числа
// и знак(рядок - +-*/) і повертає результат виконання дії або NaN, 
// якщо неможливо виконати дію або не має такого знаку.
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {string} operator 
 * @returns {number | NaN}
 */
function calculator(number1, number2, operator) {
    if (number1 === '' || number1 === null ||  Number.isNaN(Number(number1))  ||
    number2 === '' || number2 === null || Number.isNaN(Number(number2))) {
        return NaN;
    } 
    switch (operator) {
        case '+':
            return number1 + number2; 
        case '-':
            return number1 - number2; 
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return NaN;
        }
}
console.log(calculator(4, 3, '+'));  // 7
console.log(calculator(5, 2, '-'));  // 3
console.log(calculator(5, 2, '*'));  // 10
console.log(calculator(2, 2, '/'));  // 1
console.log(calculator('abc', 2, '*'));  // NaN
console.log(calculator(2, 0, '/'));  // Infinity
console.log(calculator(2, 2, '%'));  // NaN - такого знаку у програмі не передбачено


/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {string} operator 
 * @returns {NaN|number}
 */
function calc(num1, num2, operator) {
    if (num1 === '' || num1 === null || Number.isNaN(Number(num1)) || 
    num2 === '' || num2 === null || Number.isNaN(Number(num2)) ||
    operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        return NaN;
    }
    if (operator === '+') {
        return num1 + num2;
    } 
    if (operator === '-') {
        return num1 - num2;
    }
    if (operator === '*') {
        return num1 * num2;
    } 
    if (operator === '/') {
        return num1 / num2;
  }
}
console.log(calc(4, 3, '+'));  // 7
console.log(calc(5, 2, '-'));  // 3
console.log(calc(5, 2, '*'));  // 10
console.log(calc(2, 2, '/'));  // 1
console.log(calc('abc', 2, '*'));  // NaN
console.log(calc(2, 0, '/'));  // Infinity
console.log(calc(2, 2, '%'));  // NaN - такого знаку у програмі не передбачено
