/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// function logItems() {
//   for (let i = 0; i < arguments.length; i += 1) {
//     console.log(`${i + 1} - ${arguments[i]}`);
//   }
// }

// logItems("Mango", "Poly", "Ajax");
// logItems("🍎", "🍇", "🍑", "🍌", "🍋");

/*
? Напиши функцію formatTime(minutes) яка переведе значення
? minutes (кількість хвилин) у рядок у форматі годин
? та хвилин HH:MM.
*/

//? Форматування рядка за допомогою конструкція if(){}

/*
    1. Створимо константу годин і витягнемо кількість повних годин в хвилинах (Math.floor(totalMinutes / 60))
    2. Створимо константу хвилин і витягнемо кількість остачі хвилин по формулі totalMi
    3. якщо значення менше за 10 то додаємо 0 на початок рядку
    4. повертаємо шаблонний рядок з форматуванням

*/

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  //* v1
  //   if (hours < 10) {
  //     hours = `0${hours}`;
  //   }

  //   if (minutes < 10) {
  //     minutes = `0${minutes}`;
  //   }

  //* v2
  //   const addZero = function (value) {
  //     return value < 10 ? `0${value}` : value;
  //   };

  //* v3 (padStart)
  const addZero = function (value) {
    return String(value).padStart(2, "0");
  };

  return `${addZero(hours)}:${addZero(minutes)}`;
}

// console.log(formatTime(79)); // "01:19"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(4638)); // "77:18"
// console.log(formatTime(463738)); // "7728:58"

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(courseName) - додає курс в кінець колекції
? removeCourse(courseName) - видаляє курс з колекції
? updateCourse(oldCourseName, newCourseName) - змінює назву курса
*/

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(courseName) {
  if (courses.includes(courseName)) {
    console.log(`У вас вже є курс ${courseName}`);
    return;
  }
  courses.push(courseName);
}

function removeCourse(courseName) {
  const indexToDelete = courses.indexOf(courseName);

  if (indexToDelete === -1) {
    console.log(`Курс ${courseName} не знайдено`);
    return;
  }

  courses.splice(indexToDelete, 1);
}

function updateCourse(oldCourseName, newCourseName) {
  const indexToUpdate = courses.indexOf(oldCourseName);

  if (indexToUpdate === -1) {
    console.log(`Курс ${oldCourseName} не знайдено`);
    return;
  }

  courses[indexToUpdate] = newCourseName;
  // courses.splice(indexToUpdate, 1, newCourseName);
}

// console.log(courses);

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас вже є такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("React"); // 'Курс з такою назвою не знайдено'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse("Express", "NestJS");

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// function checkCaseOfLetter(letter) {
//   return letter === letter.toLowerCase() ? "lower case" : "upper case";
// }

// console.log(checkCaseOfLetter("a")); // 'lower case'
// console.log(checkCaseOfLetter("A")); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

function changeCaseOfLetters(str) {
  let resutlStr = "";

  //* v1
  //   for (const char of str) {
  //     resutlStr +=
  //       checkCaseOfLetter(char) === "lower case"
  //         ? char.toUpperCase()
  //         : char.toLowerCase();
  //   }

  //* v2
  const isCharInUpperCase = function (value) {
    return value === value.toUpperCase();
  };

  for (const char of str) {
    resutlStr += isCharInUpperCase(char)
      ? char.toLowerCase()
      : char.toUpperCase();
  }

  return resutlStr;
}

console.log(changeCaseOfLetters("AbCdE")); // aBcDe
console.log(changeCaseOfLetters("abc")); // ABC
console.log(changeCaseOfLetters("CBA")); // cba
