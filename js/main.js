'use strict';


let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let mission = prompt('Сколько вы хотите накопить денег?');
console.log('Цель накопить ' +mission+ ' рублей');

let money;

let addExpenses = prompt('Пересислите возможные расходы через запятую');
console.log(addExpenses.toLowerCase().split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1, expenses2;

let income;

let period;


let start = function() {
  money = prompt('Ваш месячный доход?');

  while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  }
};
start();
console.log('Месячный доход: ' +money+ ' рублей');


let showTypeof = function(item){
  console.log (typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);


let getExpensesMonth = function(){
  let sum = 0;

  for (let i = 0; i < 2; i++) {

      if (i === 0) {
        expenses1 = prompt('Введите обязательную статью расходов');
      } else if (i === 1) {
        expenses2 = prompt('Введите обязательную статью расходов');
      }

    sum += +prompt('Во сколько это обойдется');
  }
  return sum;
};

let expensesAmount = getExpensesMonth();
console.log ('Расходы на месяц: ' + expensesAmount);


let getAccumulatedMonth = function(){
  return money - expensesAmount;
};


let accumulatedMonth = getAccumulatedMonth();


period = mission / accumulatedMonth;
console.log('Цель будет достигнута за: ' +Math.ceil(period)+ ' месяцев');


let getTargetMonth = function(){
  return mission / accumulatedMonth;
};


let budgetDay = accumulatedMonth / 30;


let getStatusIncome = function(){
  if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay >=600){
    console.log('У вас средний уровень дохода');
  } else if (budgetDay < 600){
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay <= 0){
    console.log('Что то пошло не так');
  }
};
getStatusIncome();
