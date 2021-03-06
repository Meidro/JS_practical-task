// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const sumInput = () => {
   const temp = [];

   let num = prompt('Введите число:');

   while (num !== null && num !== '' && !isNaN(+num)) {
      temp.push(parseInt(num));
      num = prompt('Введите число:');
   }

   return temp.reduce((x, y) => x + y, 0);
};

console.log(sumInput());
