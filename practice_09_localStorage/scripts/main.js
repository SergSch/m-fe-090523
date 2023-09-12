// localStorage.setItem('test', 100);
// const testValue = localStorage.getItem('test');
// console.log('TestValue: ', testValue);
// localStorage.removeItem('test');

/*
2. Реализовать запоминание времени первого посещения сайта, и вывод его в консоль. То есть, на событие загрузки документа добавить обработчик, который:
 - проверит наличие в localStorage ключа `firstEnter`.
 - если его нет - запомнит в localStorage значение текущего времени (использовать конструкцию `let firstEnter = Date.now();`), с ключом `firstEnter`.
 - если такой ключ есть - вывести его в консоль.
 */

// document.addEventListener('DOMContentLoaded', (event) => {
//   const existingValue = localStorage.getItem('firstEnter');
//   if (existingValue) {
//     console.log(existingValue)
//   }
//   else {
//     localStorage.setItem('firstEnter', Date.now());
//   }
// });

/*
3. Реализовать сохранение значения инпута в localStorage, а именно:
 - средствами JS добавить в `div.root`, инпут.
 - на инпут, на событие потери фокуса, добавить обработчик, который сохранит в localStorage значение инпута (использовать ключ inputValue)
 - на событие загрузки документа, добавить обработчик, который проверит наличие в localStorage ключа inputValue. Если такой имеется - то его значение записать в инпут.
 */

//  const rootElement = document.querySelector('div.root');
//  const newElem = document.createElement('input');
//  rootElement.append(newElem);

//  newElem.addEventListener('focusout', (event) => {
//   localStorage.setItem('inputValue', newElem.value);
//  });

//  document.addEventListener('DOMContentLoaded', () => {
//   const inputValue = localStorage.getItem('inputValue');
//   if (inputValue) {
//     newElem.value = inputValue;
//   }
//  });

//  const myObj = {
//   name: 'Vasilij',
//   surname: 'Vailiev'
//  }

// localStorage.setItem('myObj', JSON.stringify(myObj));

// const serializedData = localStorage.getItem('myObj');
// console.log(serializedData);
// const deserialized = JSON.parse(serializedData);
// console.log(deserialized);