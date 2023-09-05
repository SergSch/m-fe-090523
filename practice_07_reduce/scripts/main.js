// We will work here!

const numbers = [10, 45, 3, 9, 19, 11, -5, 0, 7, 21, 89, 68, 1, 13, 8];
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

/*
1. Дан массив строк. Из него нужно получить новый массив строк, приведенных к верхнему регистру.
```
let strings = ['str1', 'Str2', 'sTr3'];
// Expected: ['STR1', 'STR2', 'STR3']
```
*/

// const uppercased = strings.map( (el) => el.toUpperCase() );
// console.log(uppercased);

/*
2. Дан массив объектов `products` (товары). Получить из него массив имен товаров.
*/
// const productNames = products.map( function(product) {
//   return product.name;
// } );
// console.log(productNames);

/*
3. Получить из массива `products` массив объектов, которые содержат только название и цену товара. То есть, объект товара "превращается" в объект, у которого есть только свойства name, price.
*/

// const simplifiedProducts = products.map( product => {
//   return {
//     name: product.name,
//     price: product.price
//   };
// });

// console.log(simplifiedProducts);

/*
4. Дан массив строк. Представим, что эти строки - тексты элементов списка, полученных с "бэка". Наша задача - создать неупорядоченный список (`ul`) на нашей странице, и добавить в него эти элементы (в виде тегов `li`). Списку добавить класс `custom_ul`. Добавить список на страницу после элемента <div.root>.
*/

/*
 - создать DOM-элемент, через метод document.createElement
 - нужно пройтись по массиву строк (strings), дял каждого элемента массива нужно создать DOM-элемент li
 - для этих элементов списка, нужно добавить текст через атрибут textContent, и записать туда строку-элемент массива
 - нужно добавить эти элементы li в наш контейнер ul
 - нужно наш контейнер ul добавить на страницу после DOM-элемента div с классом root. Для этого надо будет найти этот элементе через document.querySelector
*/

// const ulContainer = document.createElement('ul');
// ulContainer.classList.add('custom_ul');

// strings.forEach( str => {
//   const firstLi = document.createElement('li');
//   firstLi.textContent = str;
//   ulContainer.append(firstLi);
// });

// const rootDiv = document.querySelector('div.root');
// rootDiv.after(ulContainer);

/*
5. Отсортировать массив строк `strings` по возрастанию.
*/
// strings.sort();
// console.log(strings);

/*
6. Отсортировать массив чисел `numbers` по убыванию.
*/
// numbers.sort( ( a, b) => b - a );
// console.log(numbers);

/*
7. Отсортировать массив объектов `products` по возрастанию цены.
*/
// products.sort( (prod1, prod2) => prod1.price - prod2.price);
// console.log(products)

/*
8. Отсортировать массив строк strings по убыванию кол-ва символов в строке;
*/
// strings.sort( (str1, str2) => str2.length - str1.length );
// console.log(strings);

/*
9. отсортировать массив объектов (товары) по категории (в алфавитном порядке), и по возрастанию цены. Т.е упорядочить по категориям, и в разрезе категорий - по возрастанию цены.
*/

// products.sort( (prod1, prod2) => {
//   if (prod1.category === prod2.category) {
//     return prod1.price - prod2.price;
//   }
//   else {
//     return prod1.category < prod2.category ? -1 : 1;
//   }
// });

// console.log(products);
