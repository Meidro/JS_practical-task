// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии

const sumTo = (num) => {
   let res = 0;
   for (let i = 0; i <= num; i++) {
      res += i;
   }
   return res;
};

console.log('Цикл for', sumTo(100));

const sumTo2 = (num) => {
   if (num <= 1) return num;
   return num + sumTo2(num - 1);
};

console.log('Рекурсия', sumTo2(100));

const sumTo3 = (num) => {
   return (num * (num + 1)) / 2;
};

console.log('прогрессия', sumTo3(100));

console.log('===============================================================');

//Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null,
         },
      },
   },
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

const printList = (list) => {
   let temp = list;
   while (temp) {
      console.log(temp.value);
      temp = temp.next;
   }
};

printList(list);
console.log('===============================================================');

const printList2 = (list) => {
   console.log(list.value);
   if (list.next) printList2(list.next);
};

printList2(list);
