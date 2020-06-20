'use strict';

/*let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let isString = function(str) {
  return typeof str === 'string' && str.trim() !== '' && !isNumber(str);
};

let money,
  start = function() {
  
  do {
    money = prompt('Ваш месячный доход?', 40000);
  }
  while (isNaN(money) || money === '' || money === null);
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
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'шабашка');
      }
      while (!isString(itemIncome));

      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      }
      while (!isNumber(cashIncome));
      
      appData.income[itemIncome] = +cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');

    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      
      let itemExpenses;
      do {
        itemExpenses = prompt('Введите обязательную статью расходов');
      }
      while (!isString(itemExpenses));

      let cashExpenses;
      do {
        cashExpenses = prompt('Во сколько это обойдется?');
      }
      while (!isNumber(cashExpenses));

      appData.expenses[itemExpenses] = cashExpenses;
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
    return appData.mission / appData.budgetMonth;

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
      do {
        appData.percentDeposit = +prompt('Какой годовой процент?', 10);
      }
      while (!isNumber(appData.percentDeposit));

      do {
        appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
      }
      while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};
appData.asking();
appData.getExpensesMonth();
//appData.getBudget();
//appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();*/


//console.log('Цель будет достигнута за: ' + Math.ceil(appData.period) + ' месяцев');


// for (let key in appData) {
// console.log('Наша программа включает в себя данные:  ' + key + ' - ' + appData[key]);
// }

const arr = ['мама', 'папа', 'брат', 'сестра', 'сын', 'дочь'];

function bigFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

arr.forEach(item => console.log(bigFirst(item)));



// for (let key in appData.expenses) {
//   console.log('Расходы на месяц: ' + key + ' - ' + appData.expenses[key]);
// }


//console.log('Пример: ' + appData.addExpenses);

/*appData.addExpenses.forEach(function(item) {
  item[0].toUpperCase() + item.slice(1);
  console.log(appData.addExpenses.join(', '));
  //appData.addExpenses.push(item[0].toUpperCase() + item.slice(1));
  //console.log(appData.addExpenses);
  //console.log('Пример: ' + appData.addExpenses.join(', '));
});*/


// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('вася'));

// for (let i = 0; i < appData.addExpenses.length; i++) {
//   console.log(appData.addExpenses);
// }

// 2) Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы слова разделены запятой и пробелом

// Пример (Интернет, Такси, Коммунальные расходы)







 




