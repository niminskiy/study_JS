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


let appData = {
  income: {},
  addIncome: [],
  expensesMonth: 0,
  expenses: {}, // основные расходы
  addExpenses: [], // дополнительные расходы
  deposit: false,
  period: 3,
  budget: money,
  budgetMonth: 0,
  budgetDay: 0,
  mission: function() {
    prompt('Сколько вы хотите накопить денег?'); 
    console.log('Цель накопить ' +appData.mission+ ' рублей');
  },
  asking: function() {
    let addExpenses = prompt('Пересислите возможные расходы через запятую');
      appData.addExpenses = addExpenses.toLowerCase().split(', ');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      
      let tempText = prompt('Введите обязательную статью расходов');

      let tempMoney;

      while (!isNumber(tempMoney)) {
        tempMoney = +prompt('Во сколько это обойдется');
      }

      appData.expenses[tempText] = tempMoney;
    }

  },
  getExpensesMonth: function() {

    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
    console.log ('Расходы на месяц: ' + appData.expensesMonth + ' рублей');

  },
  getAccumulatedMonth: function() {

  },
  getTargetMonth: function() {

    appData.period = appData.period;
    console.log('Цель будет достигнута за: ' +Math.ceil(appData.period)+ ' месяцев');

  },

  getBudget: function() {
    
    appData.budgetMonth = money - appData.expensesMonth;
  
    appData.budgetDay = +Math.floor(appData.budgetMonth / 30);
      
  },

  getStatusIncome: function() {
    

    if (appData.budgetDay >= 1200) {
      console.log('У вас высокий уровень дохода');
    } else if (appData.budgetDay >=600) {
      console.log('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay <= 0) {
      console.log('Что то пошло не так');
    }
  },
  
};
appData.asking();

appData.getExpensesMonth();

appData.getBudget();

appData.getTargetMonth();

appData.getStatusIncome();

for (let key in appData) {
console.log('Наша программа включает в себя данные:  ' + key + ': ' + appData[key]);
}