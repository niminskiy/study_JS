

// ------------Lesson 2-------------

// 1). Присваиваем значения переменным:

let money = 10000;
let income = 'фриланс';
let addExpenses = 'коммуналка, автомобиль, кредит';
let deposit = true;
let mission = 600000;
let period = 12;

// 2). Выводим в консль значения:

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

    // --- -работаем с addExpenses

console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

    // --- -работаем с переменной budgetDay

let budgetDay = money;
money /= 30;
console.log('budgetDay: ', money);

// 3). Проверено! Ошибок в консоли нет.

// 4). Добавляем ветку lesson2 на GitHub.