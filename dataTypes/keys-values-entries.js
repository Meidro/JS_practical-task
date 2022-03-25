// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
   John: 100,
   Pete: 300,
   Mary: 250,
};

// alert( sumSalaries(salaries) ); // 650

const sumSalaries = (obj) => {
   return Object.values(obj).reduce((x, y) => x + y, 0);
};

console.log(sumSalaries(salaries));
console.log('=======================================================');

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
   name: 'John',
   age: 30,
};

const count = (obj) => {
   return Object.keys(obj).length;
};

console.log(count(user)); // 2

console.log('=======================================================');
