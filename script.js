// const name = ["Dmytro", "Nata", "Alex", "Serg"];

// const nameToDelete = "Alex";

// const indexToDelete = name.indexOf(nameToDelete);
// console.log(indexToDelete);

// if (indexToDelete === -1) {
//   console.log("Такого елементу в масиві немає");
// }

// name.splice(indexToDelete, 1);

// console.log(name);

//! ======
//? Знайти спільні елементи в масивах:
// Напиши функцію, яка приймає два масиви і повертає масив, що містить спільні елементи обох масивів.

/*
1. створюємо пустий масив у який будемо збирати спільне
2. запускаємо цикл на перебір будь-якого масиву
3. перевіряємо наявність одного елементу масиву в іншому за допомогою методу includes
4. якщо співпадає то пушимо до масиву
5. повертаємо масив
*/

/*
метод includes імперативно

1. запускаємо цикл для перебору масиву
2. на кожній ітерації порівнюємо поточний елемент масиву з тим, що перевіряється
3. якщо вони рівні - повертаємо тру
4. якщо цикл завершився і функція не зробила поверненя - повертаємо фолс
*/

function findCommonElements(arr1, arr2) {
  const resultArr = [];

  for (const item of arr1) {
    // if (arr2.includes(item)) {
    if (includes(arr2, item)) {
      resultArr.push(item);
    }
  }

  return resultArr;
}

function includes(arr, searchItem) {
  for (const item of arr) {
    if (item === searchItem) {
      return true;
    }
  }

  return false;
}

// console.log(findCommonElements([1, 2, 3], [2, 5, 3, 4])); // [2, 3]
// console.log(findCommonElements([1, 2, 6, 3], [2, 5, 3, 1, 6, 4])); // [2, 3, 1, 6]

//! ===

//? Перетворити об'єкт у масив ключів та значень:
// Напиши функцію, яка приймає об'єкт і повертає масив, де кожен елемент — масив із двох елементів: ключ та його значення.

//* v1
// function objectToArray(obj) {
//   return Object.entries(obj);
// }

/*
1. створити пустий масив
2. запускаємо цикл на перебір обʼєкту через for in
3. створюємо масив [key, value]
4. пушимо масив в результуючий
5. повертаємо результуючий масив

*/

//* v2
// function objectToArray(obj) {
//   const entries = [];

//   for (const key in obj) {
//     const pair = [key, obj[key]];
//     entries.push(pair);
//   }

//   return entries;
// }

// console.log(objectToArray({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

//! ===

//? Групування об'єктів за ключем:
// Напиши функцію, яка приймає масив об'єктів і ключ, за яким треба групувати ці об'єкти. Функція повинна повернути об'єкт, де ключі — це унікальні значення за вказаним ключем, а значення — це масиви об'єктів, що мають це значення.

/*
  1. створюємо результуючий обʼєкт (та додаємо властивість rest зі значенням пустого масиву)
  2. перебираємо масив обʼєктів
    2.1. отримуємо значення нашого ключа key(елемент по якому відбувається групування) з обʼєкту
    2.2. якщо значення не існує то цей обʼєкт буде додано до масиву rest
    2.3. перевіряємо чи є такий ключ в результуючому обʼєкті
    2.4. якщо ключ є, то поточний обʼєкт просто пушиться в масив цієї властивості
    2.5. якщо ключа немає, то ми його створюємо і в якості початкового значення задаємо пустий масив 
  3. повертаємо результат
*/

function groupBy(arr, key) {
  //* step 1
  const result = {
    rest: [],
  };

  //* step 2
  for (const obj of arr) {
    //* step 2.1
    const groupKey = obj[key];

    //* step 2.2
    if (!groupKey) {
      result.rest.push(obj);
      continue;
    }

    //* step 2.3
    if (!result[groupKey]) {
      //* step 2.5
      result[groupKey] = [];
    }

    //* step 2.4
    result[groupKey].push(obj);
  }

  return result;
}

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

/* { 
    A: [{ name: 'Alex', group: 'A' }, { name: 'John', group: 'A' }, { name: "Natalia", group: "A" }], 
    B: [{ name: 'Maria', group: 'B' }], 
    C: [ { name: "Rick", group: "C" }, { name: "Evgen", group: "C" }],
    rest: [ { name: "Mark", mark: "F" }]
}
*/

//! ===

//? Знайти найчастіше значення в масиві:
// Напиши функцію, яка приймає масив і повертає елемент, що зустрічається найчастіше.

/*
  1. створюємо обʼєкт лічильник де ключем буде сам елемент масиву а значенням кількість разів скільки він зустрічається в масиві
  2. запускаємо цикл на перебір масиву
    2.1. перевіряємо чи існує ключ по значенню в обʼєкті
    2.2. якщо не існує то ініціалізуємо зі значенням 0
    2.3. інкрементуємо збережене значення
  3. робимо задачу пошуку найбільшого числа зі значень обʼєкту
    3.1. запускаємо цикл на перебір обʼєкту for in та за його межами задаємо значення найбільшого та ключ якому це значення відповідає
    3.2. порівнюємо кожен елемент обʼєкту зі значенням найбільшого, якщо поточний елемент більше за найбільший то він стає найбільшим і ми перезаписуємо ключ найбільшого
  4. повертаємо число яке зустрічається найбільше

*/

// function findMostFrequent(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   //* step 1
//   const frequency = {};

//   //* step 2
//   for (const item of arr) {
//     //* step 2.1
//     if (!frequency[item]) {
//       //* step 2.2
//       frequency[item] = 0;
//     }
//     //* step 2.3
//     frequency[item] += 1;
//   }

//   //* step 3.1
//   let maxCount = 0;
//   let mostFrequent = null;

//   for (const key in frequency) {
//     //* step 3.2
//     if (frequency[key] > maxCount) {
//       maxCount = frequency[key];
//       mostFrequent = key;
//     }
//   }

//   return Number(mostFrequent);
// }

//! =======

// function findMostFrequent(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   //* step 1
//   const frequency = {};

//   //* step 2
//   for (const item of arr) {
//     //* step 2.1
//     if (!frequency[item]) {
//       //* step 2.2
//       frequency[item] = 0;
//     }
//     //* step 2.3
//     frequency[item] += 1;
//   }

//   const keys = Object.keys(frequency);
//   const values = Object.values(frequency);

//   const maxCount = Math.max(...values);
//   const indexOfMaxFrequency = values.indexOf(maxCount);
//   const mostFrequent = keys[indexOfMaxFrequency];

//   return Number(mostFrequent);
// }

//! =======

function findMostFrequent(arr) {
  if (arr.length === 0) {
    return null;
  }

  //* step 1
  const frequency = {};
  let maxCount = 0;
  let mostFrequent = null;

  //* step 2
  for (const item of arr) {
    //* step 2.1
    if (!frequency[item]) {
      //* step 2.2
      frequency[item] = 0;
    }
    //* step 2.3
    frequency[item] += 1;

    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequent = item;
    }
  }

  return Number(mostFrequent);
}

console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4])); // 3
console.log(
  findMostFrequent([1, 2, 1, 4, 5, 1, 6, 1, 2, 1, 1, 6, 6, 4, 3, 2, 2])
); // 1

const id = Symbol("id");
const user = {
  name: "John",
  [id]: 12345, // Використовуємо Symbol як ключ
};

console.log(user[id]); // 12345
console.log(user); // { name: 'John', [Symbol(id)]: 12345 }

// Символи не відображаються у стандартних ітераціях, наприклад for...in або Object.keys(), тому їх можна використовувати для прихованих властивостей.

const secret = Symbol("secret");
const obj = {
  publicData: "This is public",
  [secret]: "This is hidden",
};

console.log(obj.publicData); // This is public
console.log(obj[secret]); // This is hidden

// Символ не буде видно у стандартних ітераціях
for (const key in obj) {
  console.log(key); // publicData
}

console.log(Object.keys(obj)); // ['publicData']
