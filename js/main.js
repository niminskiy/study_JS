'use strict';


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

let period = mission / budgetMonth;
console.log('Цель будет достигнута за: ' +Math.ceil(period)+ ' месяцев');

let budgetDay = budgetMonth / 30;
console.log('Ваш бюджет на день: ' +Math.floor(budgetDay)+ 'р');

if (budgetDay >= 1200){
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >=600){
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600){
  console.log('К сожалению у вас уровень дохода ниже среднего”');
} else if (budgetDay <= 0){
  console.log('Что то пошло не так');
}
