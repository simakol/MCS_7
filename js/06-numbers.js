/*
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// неявне перетворення за допомогою унарного плюса (не робіть так пліз)
// const firstNumber = +prompt("Enter first number");
// const secondNumber = +prompt("Enter first number");
// const sum = firstNumber + secondNumber;

// явне перетворення за допомогою Number
// const firstNumber = Number(prompt("Enter first number"));
// const secondNumber = Number(prompt("Enter first number"));
// const sum = firstNumber + secondNumber;

// console.log(`${firstNumber} + ${secondNumber} = ${sum}`);

//? Дізнайтесь числове значення ширини елемента.
const elementWidth = "50px";
const numericalWidth = Number.parseInt(elementWidth);

console.log("elementWidth:", elementWidth);
console.log("numericalWidth:", numericalWidth);

//? Дізнайтесь числове значення висоти елемента.
const elementHeight = "200.74px";
const numericalHeight = Number.parseFloat(elementHeight);

console.log("elementHeight: ", elementHeight);
console.log("numericalHeight: ", numericalHeight);

/*
 ? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз значення
 ? змінної value. Використовуй методи Math.floor(), Math.ceil()
 ? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
*/



const value = 27.5;

console.log(Math.ceil(value)); // округлення вгору
console.log(Math.floor(value)); // округлення вниз

console.log(Math.round(value)); // якщо дробова частина більша за 0.5 включно то округлення вгору, якщо менша - округлення вниз
