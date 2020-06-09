// ------------Lesson 3-------------
'use strict'

<<<<<<< Updated upstream


// let income = 'фриланс';  //дополнительныый доход

// let addExpenses = 'Коммуналка, Автомобиль, Кредит, Медицина, Обучение'; //дополнительные расходы

// let deposit = true; //булевое



// -----------Начало 3-го задания-------------


let mission = +prompt('Сколько вы хотите накопить денег?');
console.log('Цель накопить ' +mission+ ' рублей');

let money = +prompt('Какой у вас месячный доход?');
console.log('Месячный доход: ' +money+ ' рублей');

let addExpenses = prompt('Пересислите возможные расходы за месяц через запятую');
console.log(addExpenses.split(', '));

let deposit = prompt('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов', 'текст');
let amount1 = prompt('Во сколько вам обойдется первая статья?', 'сумма');

let expenses2 = prompt('Введите обязательную статью расходов', 'текст');
let amount2 = prompt('Во сколько вам обойдется врорая статья?', 'сумма');


let budgetMonth = money - amount1 - amount2;
console.log('Ваш бюджет на месяц: ' +budgetMonth+ 'р');

let budgetDay = budgetMonth / 30;
console.log('Ваш бюджет на день: ' +budgetDay+ 'р');


let period = mission / budgetMonth;
console.log('Цель будет достигнута за: ' + period + ' месяцев');

// console.log('У вас высокий уровень дохода');
=======
// let income = 10; 
// let addExpenses = 20; 
// let deposit = 30; 
// let mission = 40; 
// let period = 4;


//alert ('Hello!');

//console.log('income =', income);

// confirm('Сколько лет?');
//let question = confirm('Сколько лет?');
let question2 = prompt('Сколько тебе лет?', '20');
console.log(question2);
>>>>>>> Stashed changes
