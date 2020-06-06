

// ------------Lesson 2-------------

// 1). Присваиваем значения переменным:

let money = 10000;
console.log(money);
let income = 'фриланс';
console.log(income);
let addExpenses = 'Коммуналка, Автомобиль, Кредит, Медицина, Обучение';
console.log(addExpenses);
let deposit = true;
console.log(deposit);
let mission = 600000;
console.log(mission);
let period = 12;
console.log(period);

// 2). Выводим в консль тип переменных:

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

    // --- -работаем с addExpenses

console.log(addExpenses.length);

    // --- привел переменную addExpenses к нижнему регистру

let lower = addExpenses. toLowerCase();
addExpenses = lower;
console.log(addExpenses);

    // --- вывел массив в консоль

console.log(lower.split(', '));
console.log(addExpenses);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

    // --- -работаем с переменной budgetDay

let budgetDay = money;
money /= 30;
console.log('budgetDay: ', money);
