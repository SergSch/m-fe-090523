// код пишем здесь!

/*
1. Работаем в предметной области интернет-магазина, теперь мы торгуем инструментами. Нам нужно спроектировать и реализовать структуру классов для работы с нашими товарами. В интернет-магазине доступны такие товары, как:
 - электроинструмент `PowerTool` (электропила, дрель)
 - ручной инструмент `Tool` (молоток, плоскогубцы)

У каждого товара есть название (`name`), ID, цена за единицу (`price`), краткое описание (`description`). Нужно создать класс для представления товара (`Product`). У класса должен быть определен конструктор, который принимает все описанные параметры.
*/

class Product {

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  print() {
    console.log(`Product ${this.name}, price - ${this.price}`);
  }

  render() {
    const productContainer = document.createElement('div');
    productContainer.classList.add('productCard');
    const productNameHeader = document.createElement('h2');
    productNameHeader.textContent = this.name;
    // ...
    productContainer.append(productNameHeader);
    return productContainer;
  }
}

/*
2. У каждого электроинструмента есть значение потребляемой мощности (Вт) - `power`, и гарантийный срок - `warranty`. А у каждого ручного инструмента есть показатель прочности материала `strength` (измеряемый в целочисленных условных единицах). При этом, и электроинструменты, и ручные инструменты остаются товарами. Нам нужно создать классы для представления электроинструмента и ручного инструмента, и при этом:
 - сделать так, чтобы они также являлись и товарами - т.е. унаследоваться от класса `Product`.
 - определить для каждого класса конструктор  с соответствующим набором параметров. Важно не забыть про конструктор родительского класса!
 */

class PowerTool extends Product {

  constructor(id, name, price, description, power, warranty) {
    super(id, name, price, description);
    this.power = power;
    this.warranty = warranty;
  }

  print() {
    super.print();
    console.log(`Power: ${this.power} kW`);
  }

  render() {
    const powerLabel = document.createElement('p');
    powerLabel.textContent = this.power;
    const parentContainer = super.render();
    parentContainer.append(powerLabel);
    return parentContainer;
  }
}

class Tool extends Product {
  constructor(id, name, price, description, strength) {
    super(id, name, price, description);
    this.strength = strength;
  }

  print() {
    super.print();
    console.log(`Strength: ${this.strength}`);
  }

  render() {
    const strengthLabel = document.createElement('p');
    strengthLabel.textContent = this.strength;
    const parentContainer = super.render();
    parentContainer.append(strengthLabel);
    return parentContainer;
  }
}

/* 3. Добавляем методы. У каждого товара должен быть определен метод `print`, который выводит в консоль информацию о товаре. Информацию выводить следующим образом: "Товар НАЗВАНИЕ_ТОВАРА, цена - ЦЕНА_ТОВАРА".
*/

/*4. Создать один объект класса `Product`, с названием Product, ценой 10, и описанием "Test product", и вызвать для него метод print.*/

let electricSaw = new PowerTool(1, "Electric Saw", 250, "Makita forewer!", 2.2, 1);
electricSaw.print();
let hammer = new Tool(2, 'Hammer', 50, 'Description', 35);
hammer.print();
