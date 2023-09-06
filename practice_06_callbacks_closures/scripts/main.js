// We will work here!

/*
1. Пристрелочная задача на колбэки. Написать функцию `doHomework`. Она принимает 2 аргумента: название предмета, по которому выполняем домашку, и функцию, которая решает ДЗ по предмету. Задача функции - вывести в консоль сообщение вида "starting {subject} homework", и вызвать функцию-колбэк. В аргументах функции-колбэка передаем предмет.
*/

// Колбэк-функция
// function homeworkCallback(subject) {
//     console.log(`I finished my ${subject} homework!`);
// }

//   // Функция, которая ожидает колбэк
// function doHomework(subject, callback) {
//     console.log(`I started my ${subject} homework!`);
//     callback(subject);
// }

// doHomework('math', homeworkCallback);

/*
2. Пишем свою реализацию метода `filter`, назовем ее `customFilter`. Функция принимает 2 аргумента, массив `srcArray` и критерий отбора (колбэк). Функция должна вернуть новый массив, который включает только те элементы массива `srcArray`, для которых колбэк возвращает `true`.
*/

// function customFilter(arr, callback) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// const testArr = [1,2,3,45,6,7,8,9];

// const isEven = x => x % 2 !== 0;

// console.log( customFilter(testArr, isEven));

/*
3. Пишем функцию `firstFail`. Она примет на вход массив, и функцию-проверку `checker`. Функция должна вернуть объект, у которого будут свойства:
  - `passed` - массив, в который попадут все элементы исходного массива, для которых функция `checker` вернула true - до первого "фейла".
  - `failed` - массив, куда попадут все остальные элементы исходного массива.

```
const checker = (el) => el % 2 === 0;
firstFail( [2,8,10,7,6,4,31], checker ); // { passed: [2,8,10], failed: [7,6,4,31] }
firstFail( [1,2,8,10,34,2], checker ); // {passed: [], failed: [1,2,8,10,34,2] }
```
*/

// function firstFail(arr, callback) {
//     let result = {
//         passed: [],
//         failed: []
//     };

//     let failIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.passed.push(arr[i]);
//         }
//         else {
//             failIndex = i;
//             break;
//         }
//     }

//     result.failed = failIndex >= 0 ? arr.slice(failIndex) : [];
//     return result;
// }

/*
4. Переходим к замыканиям. Пишем функцию `summarizer`. Она принимает аргумент `addVal`, и должна вернуть другую функцию, которая также принимает число, и возвращает сумму этих двух чисел.
```
let fun1 = summarizer(5);
fun1(10); // 15
```
*/

// function summarizer(addVal) {
//     return function(num) {
//         return addVal + num;
//     }
// }

// const func = summarizer(5);
// const result = func(10);
// console.log(func(10));

/*
5. Пишем функцию `multiplyArray`. Она должна принять на вход массив `srcArray`, и вернуть другую функцию, которая примет на вход число `multiplier`. Результатом выполнения второй функции должен стать НОВЫЙ массив, который будет равен произведению элементов `srcArray` на число `multiplier`.
```
let m = multiplyArray( [1, 2, 3] );
m(2); // [2, 4, 6]
```
*/

// function multiplyArray (srcArray) {
//     return function(multiplier){
//         return srcArray.map(i => i * multiplier);

//     }
// }

// let m = multiplyArray( [1, 2, 3] );


// console.log( m(2) ); // [2, 4, 6]

// Task 9
function multipleFilters( ...args ) {
  return function(element) {
    let result = true;
    args.forEach( filterFunction => {
      result = result && filterFunction(element);
    });
    return result;
  }
}

const isOdd = (x) => x % 2 === 0; // функция проверки числа на четность
const divThree = (x) => x % 3 === 0; // функция проверки числа на кратность 3

const testArray = [1,2,3,4,5,6,7,8,9];
const result = testArray.filter( multipleFilters(isOdd, divThree) );
console.log(result);
