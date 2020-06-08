// ------------Lesson 3-------------
'use strict'

// 1). Присваиваем значения переменным:

// let money = 10000;  //доход за месяц
// console.log(money);
// let income = 'фриланс';  //дополнительныый доход
// console.log(income);
// let addExpenses = 'Коммуналка, Автомобиль, Кредит, Медицина, Обучение'; //дополнительные расходы
// console.log(addExpenses);
// let deposit = true; //булевое
// console.log(deposit);
// let mission = 600000; //какую сумму хотим накопить
// console.log(mission);
// let period = 12; //период накопления (в месяцах)
// console.log(period);


// 2). Выводим в консль тип переменных:

// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);

    // --- -работаем с addExpenses

// console.log(addExpenses.length);

    // --- привел переменную addExpenses к нижнему регистру

// let lower = addExpenses. toLowerCase();
// addExpenses = lower;
// console.log(addExpenses);

// addExpenses = addExpenses. toLowerCase();
// console.log(addExpenses);

    // --- вывел массив в консоль

// console.log(addExpenses.split(', '));
// console.log(addExpenses);

// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей');

    // --- -работаем с переменной budgetDay

// let budgetDay = money;
// money /= 30;
// console.log('budgetDay: ', money);

// -----------Начало 3-го задания-------------



let money = prompt('Ваш месячный доход?');
// console.log(money);
// console.log(typeof money);

// let addExpenses = prompt('Пересислите возможные расходы за месяц через запятую');
// console.log(addExpenses);

// let deposit = prompt('Есть ли у вас депозит в банке?');
// console.log(deposit);

// let expenses1 = prompt('Введите обязательную статью расходов 1');
// console.log(expenses1);

// let expenses2 = prompt('Введите обязательную статью расходов 2');
// console.log(expenses2);

let amount1 = prompt('Во сколько вам обойдется первая статья?');
// console.log(amount1);

let amount2 = prompt('Во сколько вам обойдется врорая статья?');
// console.log(amount2);


let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц ' +budgetMonth+ 'р');

let budgetDay = budgetMonth / 12;
console.log('Бюджет на день ' +budgetDay+);



// console.log('Цель будет достигнута за ' + period + ' месяцев');

// console.log('У вас высокий уровень дохода');