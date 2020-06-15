'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
let money;
>>>>>>> 63e650ecaadbfabd8cd0f2e2ed77cb3de1e689ae

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
      console.log('Что-то пошло не так');
    }
  },
  
};
appData.asking();

appData.getExpensesMonth();

appData.getBudget();

appData.getTargetMonth();

appData.getStatusIncome();

<<<<<<< HEAD
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
=======
for (let key in appData) {
console.log('Наша программа включает в себя данные:  ' + key + ': ' + appData[key]);
}
>>>>>>> 63e650ecaadbfabd8cd0f2e2ed77cb3de1e689ae
