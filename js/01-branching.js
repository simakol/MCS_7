/*
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

/* 
* - умова - це якийсь вираз, який завжди буде конвертовано у булевий тип (true, false)
* - тіло блоку if - це код, який виконується в тому випадку, якщо умова була істина (true)
* - тіло блоку else - це код, який виконується в тому випадку, якщо умова була хибна (false)

if(умова) {
  тіло блоку if
} else {
  тіло блоку else
}
*/

// console.log("1 Before");

// if(5 < 30){
//   console.log("2 x > y");
// } else {
//   console.log("3 x < y");
// }

// console.log("4 After");

/**
 * -----------------------------
 */

/*
ланцюжок повʼязаних перевірок, спочатку перевіряється умова 1, якщо вона істина, виконується тіло блоку іф 1, якщо умова хибна, джс переходить до виконання наступної умови, тобто, до наступного елсе іф і перевіряється умова 2. Ну і по аналогії, якщо вона істина - то виконується тіло блоку іф 2, якщо вона хибна, рухаємо нижче до наступних перевірок. Якщо всі умови були хибними - то виконується блок else.

if(умова 1) {
  тіло блоку if 1
} 
else if(умова 2){
    тіло блоку if 2
}
else if(умова 3){
    тіло блоку if 3
}
else {
  тіло блоку else
}

*/

const a = 10;

// if (a > 0) {
//   console.log('Positive!');
// } else if (a < 0) {
//   console.log('Negative!');
// } else {
//   console.log('Equals zero');
// }

//! vs separate conditions

// if (a > 0) {
//   console.log('Positive!');
// }

// if (a < 0) {
//   console.log('Negative!');
// } else {
//   console.log('Equals zero');
// }

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const userNumber = Number(prompt("Enter your number:"))

// if(userNumber === 10){
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/

// const balance = 0;

// if (balance > 0) {
//   console.log('Positive');
// } else if (balance < 0) {
//   console.log('Negative');
// } else {
//   console.log('Empty wallet');
// }

/*
? Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
?
? Якщо до дедлайну 0 днів - виведи рядок "Today"
? Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
? Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
? Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
? В інших випадках - виведи рядок "Incorrect value of days"
 */

// const daysUntilDeadline = 7;
// let message = '';

// if (daysUntilDeadline === 0) {
//   message = 'Today';
// } else if (daysUntilDeadline === 1) {
//   message = 'Tomorrow';
// } else if (daysUntilDeadline === 2) {
//   message = 'Overmorrow';
// } else if (daysUntilDeadline >= 3) {
//   message = 'Date in the future';
// } else {
//   message = 'Incorrect value of days';
// }

// console.log(message);

// * Тернарний оператор
// умова ? вираз 1 (якщо умова true) : вираз 2 (якщо умова false)

/*
? Перепишіть конструкцію if з використанням тернарного оператора.
*/

// const numA = 4;
// const numB = 2;

// let result = numA + numB < 4 ? 'Мало' : 'Багато';
// let result = '';

// if (numA + numB < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох тернарних операторів.
*/

// const login = '';

// let message = '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// приклад того як тернатрик розготується у вкладеність

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else {
//   if (login === 'Директор') {
//     message = 'Вітаю';
//   } else {
//     if (login === '') {
//       message = 'Немає логіну';
//     } else {
//       message = '';
//     }
//   }
// }

// message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login === 'Директор'
//     ? 'Вітаю'
//     : login === ''
//     ? 'Немає логіну'
//     : '';

// console.log(message);
