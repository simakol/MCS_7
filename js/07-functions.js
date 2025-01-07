/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 * - Області видимості
 */

/*
function declaration
* створення функції
function назваФункції (список параметрів) {
  тіло функції
}

* виклик фукнції
назваФункції(список аргументів);
*/

function greetUser(firstName, lastName) {
  // firstName, lastName - параметри фукнції. Це звичайні змінні які доступні тільки всередині фукції. Значення цих змінних отримується під час виклику фукнції у вигляді аргументів.

  console.log(`Welcome ${firstName} ${lastName}!`);
}

greetUser("Alex", "Simak"); // "Alex", "Simak" - аргументи це просто значення для параметрів функції
greetUser("John", "Dou");

function sum(numA, numB) {
  const result = Number(numA) + Number(numB);

  return result;
  //1. зупиняє виконання фукнції, тобто, весь код, який буде написано після цього оператора не буде виконано
  //2. повертає значення у зовнішній код як результат роботи фунції

  // return Number(numA) + Number(numB);
}

// якщо фукнція явно нічого не повертає, то за замовчуванням вона поверне undefined

// console.log(sum(5, 15)); // 20
// console.log(sum(100, 500)); // 600
// console.log(sum("5", 9)); // 14

/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/

function getRectArea(sideA, sideB) {
  return sideA * sideB;
}

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

//! ===========================

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на
 ? квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  /*
  1. перевести всі параметри в числа за допомогою фукнції Number
  2. по формулі рахуємо індекс маси тіла
  3. округлюємо значення до одного знака після коми за допомогою .toFixed(1)
  */
  weight = Number(weight);
  height = Number(height);

  const result = weight / height ** 2;

  return Number(result.toFixed(1));
}

const bmi = calcBMI("88.3", "1.75");

console.log(bmi); // 28.8
