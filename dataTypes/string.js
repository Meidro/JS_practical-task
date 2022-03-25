// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

const ucFirst = (str) => {
   return str[0].toUpperCase() + str.slice(1);
};

console.log(ucFirst('вася'));
console.log(ucFirst('some_string'));
console.log(ucFirst('евгений'));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

const checkSpam = (str) => {
   if (str.toLowerCase().includes('viagra')) {
      return true;
   }
   if (str.toUpperCase().includes('XXX')) {
      return true;
   }
   return false;
};

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
console.log(checkSpam('XxX via bla bla'));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

const truncate = (str, maxlength) => {
   if (str.length <= maxlength) {
      return str;
   } else {
      return str.slice(0, maxlength - 1) + '...';
   }
};

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)); // "Вот, что мне хотело…"

console.log(truncate('Всем привет!', 20)); // "Всем привет!"
