// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

const printNumbers = (from, to) => {
   let remove = setInterval(() => {
      if (from <= to) {
         console.log(from);
         from++;
      } else {
         clearInterval(remove);
      }
   }, 1000);
};

//printNumbers(1, 5);

const printNumbers2 = (from, to) => {
   setTimeout(() => {
      console.log(from);
      from++;
      if (from <= to) {
         printNumbers2(from, to);
      }
   }, 1000);
};

//printNumbers2(1, 6);
