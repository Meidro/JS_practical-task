// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x, y) {
   console.log(x, y);
}

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

const delay = (func, ms) => {
   return function () {
      setTimeout(() => {
         func.apply(func, arguments);
      }, ms);
   };
};

f = delay(f, 2000);

f('Fired', 56);
