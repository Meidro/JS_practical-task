// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

const date = new Date(2012, 1, 20, 3, 12);
console.log(date);

console.log('=========================================================');

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

let date1 = new Date(2012, 0, 3); // 3 января 2012 года
const getWeekDay = (date) => {
   const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
   return days[date.getDay()];
};

console.log(getWeekDay(date1)); // нужно вывести "ВТ"

console.log('==========================================================');

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date2 = new Date(2015, 0, 2);

// alert( getDateAgo(date2, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date2, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date2, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

const getDateAgo = (date, days) => {
   return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days).getDate();
};

let date2 = new Date(2015, 0, 2);

console.log(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date2, 365)); // 2, (2 Jan 2014)
console.log(date2);

console.log('======================================================');
