// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str) => {
   const strSplit = str.split('-');
   strSplit.forEach((item, i) => {
      if (i !== 0) {
         strSplit[i] = item[0].toUpperCase() + item.slice(1);
      }
   });
   return strSplit.join('');
};

console.log(camelize('-webkit-transition'));
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));

console.log('========================================================');

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

const filterRange = (arr, a, b) => {
   return arr.filter((item) => item >= a && item <= b);
};

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
console.log(arr);

console.log('========================================================');

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

const filterRangeInPlace = (arr, a, b) => {
   arr.forEach((item, i) => {
      if (item < a || item > b) {
         arr.splice(i, 1);
      }
   });
};

let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4);
console.log(arr1);

console.log('========================================================');

// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

console.log(arr2);

console.log('========================================================');

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

let arr3 = ['HTML', 'JavaScript', 'CSS'];

const copySorted = (arr) => {
   return [...arr].sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
   });
};

console.log(copySorted(arr3)); // CSS, HTML, JavaScript
console.log(arr3); // HTML, JavaScript, CSS (без изменений)

console.log('========================================================');

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

let vasya = {name: 'Вася', age: 25};
let petya = {name: 'Петя', age: 30};
let masha = {name: 'Маша', age: 28};

let users = [vasya, petya, masha];

// let names = /* ... ваш код */

let names = users.map((item) => item.name);

console.log(names); // Вася, Петя, Маша

console.log('========================================================');

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

let vasya1 = {name: 'Вася', surname: 'Пупкин', id: 1};
let petya1 = {name: 'Петя', surname: 'Иванов', id: 2};
let masha1 = {name: 'Маша', surname: 'Петрова', id: 3};

let users1 = [vasya1, petya1, masha1];

//let usersMapped = /* ... ваш код ... */

let usersMapped = users1.map((item) => ({fullName: item.name + ' ' + item.surname, id: item.id}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

console.log('========================================================');

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

let vasya2 = {name: 'Вася', age: 25};
let petya2 = {name: 'Петя', age: 30};
let masha2 = {name: 'Маша', age: 28};

const sortByAge = (arr) => {
   arr.sort((a, b) => a.age - b.age);
};

let arr4 = [vasya2, petya2, masha2];

sortByAge(arr4);

// теперь: [vasya2, masha2, petya2]
console.log(arr4[0].name); // Вася
console.log(arr4[1].name); // Маша
console.log(arr4[2].name); // Петя
