// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

let user = {name: 'John', years: 30};

// // ваш код должен быть с левой стороны:
// // ... = user

const {name, years: age, isAdmin = false} = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

console.log('==================================================');

// У нас есть объект salaries с зарплатами:

let salaries = {
   John: 100,
   Pete: 300,
   Mary: 250,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

const topSalary = (obj) => {
   if (!Object.keys(obj).length) return null;
   let name = '';
   let res = 0;
   for (let key in obj) {
      if (obj[key] > res) {
         res = obj[key];
         name = key;
      }
   }
   return name;
};

console.log(topSalary(salaries));
