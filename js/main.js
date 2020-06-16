'use strict';

let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let isString = function(str) {
  return str.trim() !== '' && !isNumber(str);
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
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  expensesMonth: 0,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  period: 3,
  mission: function() {
    prompt('Сколько вы хотите накопить денег?'); 
    console.log('Цель накопить ' +appData.mission+ ' рублей');
  },
  asking: function() {

    if(confirm('Есть ли у вас дополнительный затаботок?')) {
      
      let itemIncome;

      do { 
        itemIncome = prompt('Какой у вас дополнительный заработок?');
        }

      while (!isString(itemIncome)); 
        
      
      
      let cashIncome;

      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
      }
      while (!isNumber(cashIncome));
      
      appData.income[itemIncome] = +cashIncome;
    }

    let addExpenses = prompt('Пересислите возможные расходы через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    console.log(appData.addExpenses); //join

    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      
      let itemExpenses;
      while (!isString(itemExpenses)) {
        itemExpenses = prompt('Введите обязательную статью расходов');
      }

      let cashExpenses;
      while (!isNumber(cashExpenses)) {
        cashExpenses = prompt('Во сколько это обойдется?');
      }
    }
    

  },
  getExpensesMonth: function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expensesMonth;
    }
    console.log ('Расходы на месяц: ' + appData.expensesMonth + ' рублей');

  },
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  
  },
  getTargetMonth: function() {
    return appData.mission / appData.budgetMonth;


    //console.log('Цель будет достигнута за: ' + Math.ceil(appData.period) + ' месяцев');

  },
  getAccumulatedMonth: function() {

  },
  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      console.log('У вас высокий уровень дохода');
    } else if (appData.budgetDay >=600) {
      console.log('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay <= 0) {
      console.log('Что-то пошло не так');
    }
  },
  getInfoDeposit: function() {
    if(appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?', 10);
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = +prompt('Какой годовой процент?', 10);
      }

      appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      while (!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
      }
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();


console.log(appData.expensesMonth);


// for (let key in appData) {
// console.log('Наша программа включает в себя данные:  ' + key + ' - ' + appData[key]);
// }

// 2) Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы слова разделены запятой и пробелом

// Пример (Интернет, Такси, Коммунальные расходы)