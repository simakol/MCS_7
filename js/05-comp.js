/*
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 */

// console.log(5 > 4); // true

// console.log(10 >= '7'); // true

// console.log('2' > '12'); // true

// '2' > '1'
// 50 > 49 -> true

// console.log("2".charCodeAt(0)); // 50
// console.log("1".charCodeAt(0)); // 49


// console.log('2' < '12'); // false


// console.log(5 < "hey"); // 5 < Number("hey") -> 5 < NaN

/*
- = - оператор присвоєння
- == - рівність зі зведенням типів
- === - рівність без зведення типів (сувора)
*/

console.log('4' == 4); 
// "4" == String(4) -> "4" == "4" - true

console.log('6' === 6);
// string === number - false

console.log(1 == true); // true

console.log(1 === true); // false

console.log("0" == false); // true
// Number("0") == Number(false) -> 0 == 0 -> true

console.log('0' === false); // false

console.log('papaya' <= 'papaya'); // true

console.log("Papaya" === "papaya"); // false

console.log("P".charCodeAt(0));
console.log("p".charCodeAt(0));

const item = "LaPtOp"
const userSearchValue = "laptop"

console.log(item === userSearchValue);

console.log(item.toLowerCase());

console.log(item.toLowerCase() === userSearchValue.toLowerCase());
