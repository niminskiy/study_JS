'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let money;

let start = function() {
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

    let budgetDay = appData.getAccumulatedMonth() / 30;

    if (budgetDay >= 1200) {
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
appData.asking();

let mission = prompt('Сколько вы хотите накопить денег?');
console.log('Цель накопить ' +mission+ ' рублей');

appData.expensesAmount = appData.getExpensesMonth();
console.log ('Расходы на месяц: ' + appData.expensesAmount);

appData.period = mission / appData.getAccumulatedMonth();
console.log('Цель будет достигнута за: ' +Math.ceil(appData.period)+ ' месяцев');

appData.getStatusIncome();

