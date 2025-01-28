/*
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// Чиста функція (pure function) — це функція, яка має такі властивості:

//1. Детермінованість: Результат виконання функції залежить лише від її вхідних аргументів і завжди однаковий для одних і тих самих аргументів.
//2. Відсутність побічних ефектів: Функція не змінює зовнішній стан (наприклад, глобальні змінні, DOM, файли тощо) і не взаємодіє з ним.

// Чисті функції легше тестувати, зрозуміти й передбачити, оскільки вони працюють лише зі своїми аргументами.

//* Чиста фукція суми

// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 2));
// console.log(add(5, 2));
// console.log(add(5, 2));

//! не чиста фукція суми

// let count = 0;

// function increment() {
//   count += 1;
//   return count;
// }

// console.log(increment()); // 1
// console.log(increment()); // 2 (результат залежить від зовнішньої змінної)

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// before
// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// after

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// before
// function printContactsInfo(names, phones) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   console.log(nameList);
//   console.log(phoneList);

//   for (let i = 0; i < nameList.length; i++) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// after


/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// before
// function calculateAverage(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total / args.length;
// }

//after


// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
