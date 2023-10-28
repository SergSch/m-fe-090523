// код пишем здесь!

class Product {

  #purchasePrice;

  static staticProp = 5;

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.#calculatePurchasePrice(price);
    //this.#purchasePrice = 0.9 * price;
  }

  #calculatePurchasePrice(price) {
    this.price = 0.9 * price;
  }

  print() {
    console.log(`Product ${this.name}, price - ${this.price}`);
  }

  get shortName() {
    return `${this.name}, ${this.price}`
  }

  get purchasePrice() {
    console.log('getter')
    return this.#purchasePrice;
  }

  set purchasePrice(newPurchasePrice) {
    console.log('setter')
    this.#purchasePrice = newPurchasePrice;
  }

  /*
  3. Сделаем метод расчета закупочной цены `calculatePurchasePrice`. Метод должен быть доступен только внутри класса. И нужно его вызывать при вызове конструктора - собственно, для расчета закупочной цены.*/



}

const newProduct = new Product(1, 'Name', 100, 'Descr');
const prod2 = new Product(2, 'Name', 100, 'Descr');

console.log(Product.staticProp);
newProduct.staticProp = 10;
console.log(newProduct.staticProp, newProduct);

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
}