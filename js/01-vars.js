/*
 * Змінні та типи даних
 *
 * - Оголошення змінних з let та const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Виведення даних
 * - Отримання даних
 * - Примітивні типи даних: number, string, boolean, null, undefined
 * - Оператор typeof
 */

//! ERROR! не можна звертатись до змінних і констант вище місця їх оголошення
// console.log(age);

// ініціалізація змінної - це створення змінної та надання їй значення
let age = 30;

console.log(age);

// перезапис або перевизначення
age = 35;

console.log(age);

const firstName = "Oleg";

console.log(firstName);

// firstName = "Alice"; //! ERROR! не можна перевизначати константні змінні

// alert("Hello world!")

// const username = prompt("Enter your username:");

// alert("Hello, " + username);

//* Примітивні типи даних
// - Number: числа (0, -10, 1457, 2.5, NaN)
// - String: строки або рядки (все, що записано всередині літералів рядків, тобто, в будь-яких видах лапків(', ", `)) - "Hello world", "100"
// - Boolean(bool): логічний тип, який вміє зберігати всього два значення: правда і неправда, тобто true або false
// undefined — відсутність визначення (змінна є, але значення їй не призначено)
// null — явно призначена відсутність (змінна існує, і ми спеціально сказали, що значення "немає")

// let a; // undefined

// console.log(a);

const userAge = 25; // Number
const userName = "Oleg"; // String
const isUserPlayGames = true; // Bool
const userAddress = null; // null

// typeof - повертає тип даних певного значення або змінної (результатом використання цього оператору завжди є рядок)

console.log(typeof isUserPlayGames); // "boolean"
console.log(typeof "100"); // "string"
console.log(typeof null); // "object"

