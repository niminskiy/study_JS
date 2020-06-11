'use strict';


let mission = 5000;//+prompt('Сколько вы хотите накопить денег?');
console.log('Цель накопить ' +mission+ ' рублей');

let money = 40000;//+prompt('Какой у вас месячный доход?');
console.log('Месячный доход: ' +money+ ' рублей');

let addExpenses = prompt('Пересислите возможные расходы за месяц через запятую');
console.log(addExpenses.split(', '));

let deposit = prompt('Есть ли у вас депозит в банке?');


let expenses1 = prompt('Введите обязательную статью расходов', 'ипотека');
let expenses1Amount = prompt('Во сколько вам обойдется первая статья?', '12000');


let expenses2 = prompt('Введите обязательную статью расходов', 'кредит');
let expenses2Amount = prompt('Во сколько вам обойдется врорая статья?', '14000');


let budgetMonth = money - expenses1Amount - expenses2Amount;
console.log('Ваш бюджет на месяц: ' +budgetMonth+ 'р');

let income;

let showTypeof = function(item){
  console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);


let getExpensesMonth = function(){
  return expenses1Amount + expenses2Amount;
};
console.log('Расходы на месяц: ' + getExpensesMonth());


let getAccumulatedMonth = function(){
  return money - getExpensesMonth();
};


let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = function(){
  return mission / accumulatedMonth;
}
console.log(getTargetMonth());


let period = mission / accumulatedMonth;
console.log('Цель будет достигнута за: ' +Math.ceil(period)+ ' месяцев');


let budgetDay = accumulatedMonth / 30;
console.log('Ваш бюджет на день: ' +Math.floor(budgetDay)+ 'р');


if (budgetDay >= 1200){
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >=600){
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600){
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0){
  console.log('Что то пошло не так');
}


/*1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

5) Удалить из кода переменную budgetMonth

6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)

7) Почистить консоль логи и добавить недостающие, должны остаться:

 - вызовы функции showTypeOf
 - Расходы за месяц вызов getExpensesMonth
 - Вывод возможных расходов в виде массива (addExpenses)
 - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
 - Бюджет на день (budgetDay)
 - вызов функции getStatusIncome

8) Проверить, чтобы все работало и не было ошибок в консоли

9) Добавить папку с четвертым уроком в свой репозиторий на GitHub*/
