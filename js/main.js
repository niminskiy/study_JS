'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

<<<<<<< Updated upstream

let money,
    start = function() {
      money = prompt('Ваш месячный доход?');

      while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
      }
    };
    start();
    console.log('Ваш месячный доход ' +money+ ' рублей');

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function() {
    let addExpenses = prompt('Пересислите возможные расходы через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
  budget: money,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function() {
    let expenses1,
        expenses2;

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
  },
  getAccumulatedMonth: function() {
    return money - appData.expensesAmount;
  },
  getTargetMonth: function() {
    return appData.mission / appData.getAccumulatedMonth();
  }, 
  getStatusIncome: function() {

    let budgetDay = appData.getAccumulatedMonth / 30;
    console.log(typeof budgetDay);

    if (budgetDay >= 1200) {
      console.log(budgetDay);
      console.log('У вас высокий уровень дохода');
    } else if (budgetDay >=600) {
      console.log('У вас средний уровень дохода');
    } else if (budgetDay < 600) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay <= 0) {
      console.log('Что то пошло не так');
    }
  }
  
};
appData.getStatusIncome();
appData.asking();

let mission = prompt('Сколько вы хотите накопить денег?');
console.log('Цель накопить ' +mission+ ' рублей');

appData.expensesAmount = appData.getExpensesMonth();
console.log ('Расходы на месяц: ' + appData.expensesAmount);

appData.period = mission / appData.getAccumulatedMonth();
console.log('Цель будет достигнута за: ' +Math.ceil(appData.period)+ ' месяцев');

=======
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let mission = prompt('Сколько вы хотите накопить денег?');
console.log('Цель накопить ' +mission+ ' рублей');

<<<<<<< HEAD
<<<<<<< Updated upstream
let money = +prompt('Какой у вас месячный доход?');
=======
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
>>>>>>> e15861f9dbe1004577faa00a7d6a4fe5d1f999fa
console.log('Месячный доход: ' +money+ ' рублей');
=======

>>>>>>> Stashed changes


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
>>>>>>> Stashed changes
