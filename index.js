//Людина вводить вік, ви виводите класифікаційну назву віку

const userInputAge = prompt('Enter your age');
if (userInputAge === '' || userInputAge === null || Number.isNaN(Number(userInputAge)) || userInputAge < 0 || userInputAge > 150) {
    console.log('error');
} else if (userInputAge >= 0 && userInputAge < 2) {
    console.log('baby');
} else if (userInputAge >= 2 && userInputAge < 6) {
    console.log('kinder');
} else if (userInputAge >= 6 && userInputAge < 12) {
    console.log('child');
} else if (userInputAge >= 12 && userInputAge < 18) {
    console.log('teenager');
} else if (userInputAge >= 18 && userInputAge < 65) {
    console.log('adult');
} else if (userInputAge >= 65 && userInputAge < 100) {
    console.log('old');
} else if (userInputAge >= 100 && userInputAge <= 150) {
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
        return num2 === 0 ? NaN : num1 / num2;
  }
}
console.log(calc(4, 3, '+'));  // 7
console.log(calc(5, 2, '-'));  // 3
console.log(calc(5, 2, '*'));  // 10
console.log(calc(2, 2, '/'));  // 1
console.log(calc('abc', 2, '*'));  // NaN
console.log(calc(2, 0, '/'));  // NaN
console.log(calc(2, 2, '%'));  // NaN - такого знаку у програмі не передбачено
