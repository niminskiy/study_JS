'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let isString = function(s) {
  
  return;
}

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
      do{
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Шабашка');
      }
      while (!isNumber(itemIncome));


      let cashIncome;
      while (!isNumber(cashIncome)) {
        cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      }
      appData.income[itemIncome] = cashIncome; //проверено на число!
    }

    let addExpenses = prompt('Пересислите возможные расходы через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      
      let itemExpenses = prompt('Введите обязательную статью расходов');

      let cashExpenses;

      do{
        cashExpenses = prompt('Во сколько это обойдется?');
      }
      while (!isNumber(cashExpenses));

    }



  },
  getExpensesMonth: function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
    console.log ('Расходы на месяц: ' + appData.expensesMonth + ' рублей');

  },
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  
  },
  getTargetMonth: function() {
    appData.period = appData.period;
    console.log('Цель будет достигнута за: ' +Math.ceil(appData.period)+ ' месяцев');

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

for (let key in appData) {
console.log('Наша программа включает в себя данные:  ' + key + ' - ' + appData[key]);
}


// 1) Сделать проверку при получении данных:
//    - наименование дополнительного источника заработка
//    - сумма дополнительного заработка - cashExpenses - проверено!!!
//    - ввод статьи обязательных расходов
//    - годовой процент депозита - percentDeposit - проверено!!!
//    - сумма депозита - moneyDeposit - проверено!!!

// 2) Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы слова разделены запятой и пробелом  (Интернет, Такси, Коммунальные расходы)

//itemExpenses - обязательные статьи расходов

//itemIncome - название допдоходов
