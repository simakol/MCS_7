//? Знайти спільні елементи в масивах:
// Напиши функцію, яка приймає два масиви і повертає масив, що містить спільні елементи обох масивів.

// function findCommonElements(arr1, arr2) {
// }

// console.log(findCommonElements([1, 2, 3], [2, 5, 3, 4])); // [2, 3]
// console.log(findCommonElements([1, 2, 6, 3], [2, 5, 3, 1, 6, 4])); // [2, 3, 1, 6]

//! ===

//? Перетворити об'єкт у масив ключів та значень:
// Напиши функцію, яка приймає об'єкт і повертає масив, де кожен елемент — масив із двох елементів: ключ та його значення.

//* v1
// function objectToArray(obj) {
// }

//* v2
// function objectToArray(obj) {
// }

// console.log(objectToArray({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

//! ===

//? Групування об'єктів за ключем:
// Напиши функцію, яка приймає масив об'єктів і ключ, за яким треба групувати ці об'єкти. Функція повинна повернути об'єкт, де ключі — це унікальні значення за вказаним ключем, а значення — це масиви об'єктів, що мають це значення.


// function groupBy(arr, key) {
// }

// console.log(
//   groupBy(
//     [
//       { name: "Alex", group: "A" },
//       { name: "Maria", group: "B" },
//       { name: "Rick", group: "C" },
//       { name: "John", group: "A" },
//       { name: "Mark", mark: "F" },
//       { name: "Natalia", group: "A" },
//       { name: "Evgen", group: "C" },
//     ],
//     "group"
//   )
// );
// { A: [{ name: 'Alex', group: 'A' }, { name: 'John', group: 'A' }], B: [{ name: 'Maria', group: 'B' }] }

//! ===

//? Знайти найчастіше значення в масиві:
// Напиши функцію, яка приймає масив і повертає елемент, що зустрічається найчастіше.


function findMostFrequent(arr) {
}

console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4])); // 3
console.log(
  findMostFrequent([1, 2, 1, 4, 5, 1, 6, 1, 2, 1, 1, 6, 6, 4, 3, 2, 2])
); // 1
