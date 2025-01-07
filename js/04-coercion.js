/*
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// Явне перетворення типів
// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// Неявне перетворення типів
console.log(5 + "3"); // "53"
// Number + String -> String(5) + "3" -> "5" + "3" -> "53"
console.log("10" + false); // "10false"
console.log(null + "105"); // "null105"
/*
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// Явне перетворення типів
console.log(Number('5')); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN - Not a Number - перетворення було неуспішним, не числове значення
console.log(Number('Jacob')); // NaN
console.log(Number('25px')); // NaN

// Неявне перетворення типів

console.log("5" * 2); // 10
// String * Number -> Number("5") * 2 -> 5 * 2 -> 10
console.log("10" - 5); // 5
console.log(10 / "5");
console.log(5 + true); // 6
// 5 + Number(true) -> 5 + 1 = 6
console.log(5 + undefined); // 5 + NaN = NaN
console.log(true + true); // 2



