// код пишем здесь!

const gloves = {
  productCode: 1,
  name: 'Gloves',
  price: 10,
  description: 'Gloves to deal with rough materials',
  discount: 5,
}

const shoes = {
  productCode: 2,
  name: 'Shoes',
  price: 15,
  description: 'Just the sport shoes',
}

const ball = {
  productCode: 3,
  name: 'Ball',
  price: 8,
  description: 'The ball to play basketball',
}

const jacket = {
  productCode: 4,
  name: 'Jacket',
  price: 18,
  description: 'Sport jacket to use in case of cold weather',
  discount: 10,
}

const productAdditional = {
  brand: 'Puma',
  shopId: 14
}

const products = [gloves, shoes, ball, jacket];

const orders = {
  user1: [ball, gloves],
  user2: [jacket, gloves],
  user3: [shoes, jacket, ball]
}

/*1. Пристрелочная задача. Для товара `gloves`, сделать цену неизменяемой.*/
Object.defineProperty( gloves, 'price', { writable: false } );

/* 2. Еще пристрелочная. Для всех товаров, которые есть в массиве `products`, сделать так, чтобы свойство `productCode` игнорировалось при переборе свойств объекта. */
products.forEach( product => {
  Object.defineProperty( product, 'productCode', { enumerable: false } );
});

/*
3. Запретить изменение свойства `price` для всех товаров массива `products`, у которых есть свойство `discount`.
*/
products.forEach( product => {
  if (product.discount) {
    Object.defineProperty( product, 'price', { writable: false } );
  }
});

/*
4. У нас есть объект `productAdditional` - с дополнительной информацией относительно наших товаров. Нам нужно сделать так, чтобы свойства объекта `productAdditional` добавились бы к свойствам всех товаров из массива `products` - то есть "объединить" объекты. Можно использовать spread-оператор, а можно - методы `Object`.
*/

const newProducts = products.map( product => {
  return { ...product, ...productAdditional }
});
console.log(newProducts)

const newProducts2 = products.map( product => {
  return Object.assign({}, product, productAdditional);
});
console.log(newProducts2)

/*
5. Пройтись по массиву `products`, собрать объект, который содержит в качестве ключей названия товаров, а в качестве значений - их цены. ВАЖНО - эта задача решается методами массивов!
*/
const prices = products.reduce( (acc, value) => {
  const prodName = value.name;
  acc[prodName] = value.price;
  return acc;
}, {});
console.log(prices);

/*
6. Пишем функцию `getMaxProperty`. На вход она примет объект, у которого будут свойства, которые содержат числа. Нужно найти свойство, значение которого максимальное в рамках объекта.
*/
const testObject = {
  prop1: 3,
  prop2: 10,
  prop3: -3,
  prop4: 8
}

const getMaxProperty = (obj) => {
  let maxValue = -Infinity;
  let result = [];
  for (let [key, value] of Object.entries(obj)) {
    if (value > maxValue) {
      result = [key, value];
      maxValue = value;
    }
  }
  return result;
}

console.log(getMaxProperty(testObject));
// result === ['prop2', 10];