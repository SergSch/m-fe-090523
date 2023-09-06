// We will work here!

const numbers = [1,2,3,4,5,6,7,8];

const strings = ['This', 'is', 'an', 'array', 'of', 'Test', 'strings'];

const ball = {
  name: "Ball",
  category: "Sport",
  img: "./assets/ball.jpeg",
  price: 100
};
const gloves = {
  name: "Gloves",
  category: "Sport",
  img: "./assets/gloves.jpg",
  price: 140
};
const shoes = {
  name: "Sport shoes",
  category: "Sport",
  discount: true,
  img: "./assets/shoes.png",
  price: 320
};
const hammer = {
  name: "Hammer",
  category: "Tools",
  img: "./assets/hammer.jpeg",
  price: 40
};
const saw = {
  name: "Saw",
  category: "Tools",
  discount: true,
  img: "./assets/saw.jpeg",
  price: 75
};
const shark = {
  name: "Shark toy",
  category: "Other",
  img: "./assets/shark.jpeg",
  price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

// const result = numbers.reduce( (acc, val) => {
//     return acc + val;
// }, 0);
// console.log('Sum: ', result)

/* 2. Получить суммарную стоимость всех товаров массива `products` */
// const sumProducts = products.reduce( (acc, val) => acc + val.price, 0 );
// console.log('Total price: ', sumProducts)

/* 3. Из массива строк `strings` получить объект, в котором ключами будут строки из массива, а значениями - длины этих строк. Пример:
 ```
 // Исходный массив
 let arr = ["This", "is", "an", "array", "of", "strings"];
 // Ожидаемый результат
 {
  This: 4,
  is: 2,
  an: 2,
  array: 5,
  of: 2,
  strings: 7
 }
 ```
 */

// const result = strings.reduce( (acc, val) => {
//     acc[val] = val.length;
//     return acc;
// }, {} );
// 1st iteration. acc = {}, val = 'This'
// End of first iteration: acc = { This: 4 }, val = 'This'
// 2nd iteraton. acc = { This: 4 }, val = 'is'
// End of second iteration: acc = { This: 4, is: 2 }, val = 'is'
// ...

// console.log(result);

/* 4. Получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
*/
// const categoriesArray = products.reduce( (acc, val) => {
//     acc.push(val.category);
//     return acc;
// }, [] );
// console.log(categoriesArray);

/* 6. Получить объект, в котором будут суммарные стоимости товаров по категориям. */
/*
// Expected result:
 {
    Sport: 560,
    Tools: 115,
    Other: 40
 }
*/

// const categoriesTotalPrices = products.reduce( (acc, val) => {

//     if (acc[val.category]) {
//         acc[val.category] += val.price;
//      }
//      else {
//         acc[val.category] = val.price;
//      }
//     return acc;
// }, {} );

// let result6 = products.reduce((acc, elem) => {
//     acc[elem.category] ? (acc[elem.category] += elem.price) : (acc[elem.category] = elem.price)
//     return acc
// }, {})

// products.reduce((accumulator, currentValue) => {
//     accumulator[currentValue.category] =
//       (accumulator[currentValue.category] || 0) + currentValue.price;
//     return accumulator;
//   }, {})


// console.log(categoriesTotalPrices)

/*
7. Написать функцию `removeDuplicates`. Она принимает на вход массив, и должна вернуть новый массив, который не содержит дубликатов.
```
removeDuplicates( [1, 4, 7, 1, 2, 3, 3, 2, 2, 4, 9] ); // [1, 4, 7, 2, 3, 9]
```
*/
// const arr1 = [1, 4, 7, 1, 2, 3, 3, 2, 2, 4, 9];
// function removeDuplicates(arr) {
//     const result = [];
//     arr.forEach(element => {
//         if (!result.includes(element)) {
//             result.push(element);
//         }
//     });
//     return result;
// }

// let result7 = removeDuplicates.filter((elem, ind, arr) => {
//     return arr.indexOf(elem) === ind
// })

// console.log(removeDuplicates(arr1));

/*
8. Задача "со звездочкой". Получить массив с текстами всех параграфов на странице.
*/

const pars = document.querySelectorAll('p');
let result = [...pars].reduce( (acc, val) => {
    acc.push(val.textContent);
    return acc;
}, []);

console.log(result);