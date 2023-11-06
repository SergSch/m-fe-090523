// код пишем здесь!

function ProductFunction(id, name, price, description) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
}

ProductFunction.prototype.print = function() {
  console.log(`Name ${this.name}, price ${this.price}`);
}

class ProductClass {

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  print() {
    console.log(`Name ${this.name}, price ${this.price}`)
  }
}

const fInst = new ProductFunction(1, 'Name1', 1, 'Descr1');
const cInst = new ProductClass(2, 'Name2', 2, 'Descr2');

fInst.print()
cInst.print()



const independentObject = {
  property: 'value'
}

const productInstance = new ProductClass(1,'Name', 2, 'Description');


/* 1. Пристрелочная задача. Нужно создать метод `containsNumbersOnly`, который будет применяться к массивам. Его задача - проверить, что массив содержит только числа. Если есть хоть одно "не-число" - вернуть false. Внутри метода НЕ используем методы массивов. */
Array.prototype.containsNumbersOnly = function() {
  for (let elem of this) {
    if (typeof elem !== 'number') {
      return false;
    }
  }
  return true;
}
const array = ['add', 1,2]
console.log(array.containsNumbersOnly());


/* 2. Усложняем предыдущую задачу. Нужно создать метод `containsSameType`, который должен проверить, что массив содержит элементы одного типа (т.е. у элементов одинаковый результат `typeof`). */

Array.prototype.containsSameType = function() {
  const firstElemType = typeof this[0];
  for (let i = 1; i < this.length; i++) {
    if (typeof this[i] !== firstElemType) return false;
  }
  return true;
}
console.log([1,2,'str'].containsSameType());
console.log(['str', 1,2,'str'].containsSameType());
console.log([1,2].containsSameType());
console.log(['str', 'eee'].containsSameType());
console.log([].containsSameType());

/* 3. "Запрещаем" работу метода `reduce` для массивов. Нужно сделать так, чтобы при вызове метода `reduce` для ЛЮБОГО массива, генерировалась бы ошибка "Метод запрещен!". Подсказка: нужно переопределить метод в прототипе.
*/
Array.prototype.reduce = function() {
  throw new Error('This method is prohibited!');
}

/* 4. Понимание разницы функции-конструктора и класса. В файле `main.js` есть две реализации товара: `ProductFunction`, `ProductClass`. Нужно сделать так, чтобы экземплярам, созданным с помощью этих реализаций, был доступен метод `print`, который будет выводить в консоль цену и название товара. */

/*5. Присвоение прототипа. В файле `main.js` есть объект `independentObject`. Нужно сделать так, чтобы его прототипом стал прототип, который используется при создании экземпляров класса `ProductClass`.
*/

independentObject.__proto__ = ProductClass.prototype;

console.log(independentObject.print())

/* 6. Перебор свойств. В файле `main.js` есть объект `productInstance`. Сделайте его прототипом для объекта `independentObject`. Нужно вывести в консоль все доступные свойства объекта `independentObject` (т.е. и свои, и из прототипов).
*/
independentObject.__proto__ = productInstance;
console.log(independentObject);
for (let prop in independentObject) {
  console.log('Property', prop)
}

/*7. Вывести в консоль все собственные свойства объекта `independentObject`. Тут нам придется вспомнить методы `Object` для работы со свойствами.*/
for (let prop in independentObject) {
  let isOwn = independentObject.hasOwnProperty(prop);
  if (isOwn) {
    console.log('Own prop', prop)
  }
}

for (let key of Object.keys(independentObject)) {
  console.log('From key', key)
}