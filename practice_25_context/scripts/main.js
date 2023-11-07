class Product {

  constructor(id, name, price, description) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
  }
}

class PowerTool extends Product {
  constructor(id, name, price, description, power, warranty) {
      super(id, name, price, description);
      this.power = power;
      this.warranty = warranty;
  }
}

class Tool extends Product {
  constructor(id, name, price, description, strength) {
      super(id, name, price, description);
      this.strength = strength;
  }
}

function customMap(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
      result[i] = callback(this[i]);
  }
  return result;
}

const weirdArray = {
  length: 2,
  0: 'Saw',
  1: 'Hammer'
}

const veryWeirdArray = {
  0: 'Drill',
  1: 'Axe',
  2: 'Nails',
};

/* 1. Создаем объект класса `Product`. ID=1, name="Product", price=100, description = "Simple product description". Нужно в этот объект (именно в объект, НЕ в класс!), добавить метод addDiscount(discount), который должен установить новую цену товару. Новая цена = старая цена * discount * 0.01. ВАЖНО: при решении задачи, работать через контекст (`this`)! */

const newProduct = new Product(1, "Product", 100, 'Simple description');

newProduct.addDiscount = function(discount) {
  this.price = this.price * discount * 0.01;
}

newProduct.addDiscount(95);
console.log(newProduct);

/* 2. Пишем функцию `showProductInfo()`. Задача функции - выводить в консоль информацию о товаре, вида: "Товар НАЗВАНИЕ, цена - ЦЕНА". Функция должна быть контексто-ориентированной, т.е. предполагается, что она будет вызвана в контексте объекта товара.
*/

function showProductInfo() {
  console.log(`Product ${this.name}, price - ${this.price}`);
}

/*
3. Вызовите функцию `showProductInfo()` в контексте объекта из п.1. Для этого, нам понадобится явно привязать контекст.
*/
showProductInfo.call(newProduct);

/* 4. Применяем нашу функцию - нужно сделать так, чтобы она была доступна для ВСЕХ объектов класса `Product`, и его потомков. Для этого, нам может пригодиться прототип. */
Product.prototype.showProductInfo = showProductInfo;

newProduct.showProductInfo();
console.log(newProduct)

/*
5. Работаем с привязкой контекста. У нас есть метод `customMap`, который повторяет функциональность метода массивов `map`. И есть массив `numbers`. Мы хотим получить из массива `numbers` другой, новый массив `newNumbers`, элементы которого будут рассчитаны так: `newNumbers[i] = numbers[i] * numbers[i]`. То есть, массив квадратов. Сделать это вызовом метода `customMap`, в контексте массива `numbers`.
*/

const numbers = [1,2,3,4,5];

function square(el) {
  return el * el;
}

const newNumbers = customMap.call(numbers, square);
console.log('From call', newNumbers);

const newNumbers1 = customMap.apply(numbers, [square]);
console.log('From apply', newNumbers1);

const bindedFunction = customMap.bind(numbers);
const newNumbers2 = bindedFunction(square);
console.log('From bind', newNumbers2);

/* 6. Задача повышенной сложности. Есть объект `weirdArray`. У него есть свойство length, и ключи очень похожи на индексы массива. Но это не массив. Нужно применить к нему метод `forEach`, и вывести в консоль каждое его свойство, у которого ключ - число (т.е. 0, 1, 2, ...). Для этого, нам нужно привязать контекст явно к методу forEach, и вызвать его. Такой прием называется заимствованием методов. */

const forEachCallback = (el) => console.log(el);

const bindedForeach = Array.prototype.forEach.bind(weirdArray);
bindedForeach(forEachCallback);

/*
7. Вспоминаем методы класса `Object`. Теперь метод forEach нужно применить к объекту veryWeirdArray. Он тоже похож на массив, но у него нет свойства `length`. Нужно как-то применить к нему метод массива `forEach`. Здесь нам тоже нужна привязка объектов, но еще не повредит установить нашему объекту свойство `length` с правильным значением.
*/

veryWeirdArray.length = Object.keys(veryWeirdArray).length;
const binded2 = Array.prototype.forEach.bind(veryWeirdArray);
binded2(forEachCallback);