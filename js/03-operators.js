/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//* True: всі числа, крім 0 | будь-який рядок, у якому є хоча б один символ, true

//! False: 0, NaN, пустий рядок, null, undefined, false

/*
результатом використання логічного або і логічного і завжди буде один з перелічених операндів (третього не дано).

* - Логічне АБО (||): повертає перше значення яке при конвертації в булевий тип поверне вам true (якщо таких значень не буде, тобто, всі будуть false, то просто повертається останнє зі списку)

* - Логічне І (&&): повертає перше значення яке при конвертації в булевий тип поверне вам false (якщо таких значень не буде, тобто, всі будуть true, то просто повертається останнє зі списку)

* - Логічне НІ (!): перевертає логічний тип на зворотній, тобто якщо було true - робить false, якщо було false - зробить true. Результатом цієї логічної операції завжди буде буль.

*/

// console.log(true || false);
// console.log(0 || "" || -3 || "hello");
// console.log(0 || "" || null || false || undefined);

// console.log(true && false);
// console.log(3.5 && " " && 0 && null && "");
// console.log(3.5 && " " && "hello" && 7);

// console.log(!true);
// console.log(!false);

// console.log(!0);
// console.log(!" ");

/*
 ? --------------------------------
 */

// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean(''));
// console.log(Boolean(' '));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));

/*
 ? --------------------------------
 */

// console.log(5 && 4);
// console.log(5 && 'mango');
// console.log(0 && 'mango');

/*
 ? --------------------------------
 */

// console.log(null || 5);
// console.log(0 || null);
// console.log(5 || null);

/*
 ? --------------------------------
 */

// console.log(!5);
// console.log(!false);

/*
 ? --------------------------------
 */

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log(null || 2 && 3 || 4);
