// ------------Lesson 3-------------
'use strict'

// 1). Присваиваем значения переменным:

/*let money = 10000;  //доход за месяц
console.log(money);
let income = 'фриланс';  //дополнительныый доход
console.log(income);
let addExpenses = 'Коммуналка, Автомобиль, Кредит, Медицина, Обучение'; //дополнительные расходы
console.log(addExpenses);
let deposit = true; //булевое
console.log(deposit);
let mission = 600000; //какую сумму хотим накопить
console.log(mission);
let period = 12; //период накопления (в месяцах)
console.log(period);

// 2). Выводим в консль тип переменных:

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// --- -работаем с addExpenses

console.log(addExpenses.length);

// --- привел переменную addExpenses к нижнему регистру

addExpenses = addExpenses. toLowerCase();
console.log(addExpenses);

// --- вывел массив в консоль

console.log(addExpenses.split(', '));
console.log(addExpenses);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

// --- -работаем с переменной budgetDay

let budgetDay = money;
money /= 30;
console.log('budgetDay: ', money);*/



// -----------Начало 3-го задания-------------

let mission = +prompt('Сколько вы хотите накопить денег?');
console.log('Цель накопить ' +mission+ ' рублей');

let money = +prompt('Какой у вас месячный доход?');
console.log('Месячный доход: ' +money+ ' рублей');

let addExpenses = prompt('Пересислите возможные расходы за месяц через запятую');
console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов', 'текст');
let amount1 = prompt('Во сколько вам обойдется первая статья?', 'сумма');

let expenses2 = prompt('Введите обязательную статью расходов', 'текст');
let amount2 = prompt('Во сколько вам обойдется врорая статья?', 'сумма');


let budgetMonth = money - amount1 - amount2;
console.log('Ваш бюджет на месяц: ' +budgetMonth+ 'р');

let period = mission / budgetMonth;
console.log('Цель будет достигнута за: ' +Math.ceil(period)+ ' месяцев'); //округлить в большую сторону Math.ceil(число)

let budgetDay = budgetMonth / 30;
console.log('Ваш бюджет на день: ' +Math.floor(budgetDay)+ 'р'); //округлить в меньшую сторону Math.floor(число)

if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay >=600){
    console.log('У вас средний уровень дохода');
  } else if (budgetDay >= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего”');
  } else {
    console.log('Что то пошло не так');
  };
