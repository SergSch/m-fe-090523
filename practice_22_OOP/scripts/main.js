// код пишем здесь!

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
}

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