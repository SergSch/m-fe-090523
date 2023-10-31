// код пишем здесь!

class Product {

  static author = 'Author';
  static creationDate = '30.10.2023';
  static #instancesCounter = 0;

  static #MAX_INSTANCES = 2;

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;

    if (Product.#instancesCounter < Product.#MAX_INSTANCES) {
      Product.#instancesCounter++;
    }
    else {
      throw new Error('Нельзя сотворить здесь!');
    }
  }

  static describe() {
    console.log(`Class Product, created by ${Product.author}, at ${this.creationDate}`);
    console.log(this.#instancesCounter)
  }

  nonStaticDescribe() {
    console.log(this.author);
  }

  static get counter() {
    return this.#instancesCounter;
  }

  static set maxInstances(newValue) {
    if (newValue < this.#instancesCounter) {
      throw new Error('Prohibited!');
    }
    else {
      this.#MAX_INSTANCES = newValue;
    }
  }
}

const nProd = new Product(1, 'Name', 2, 'Desct');
console.log('1st created')
//const nProd1 = new Product(1, 'Name', 2, 'Desct');
//console.log('2nd created')

Product.maxInstances = 1;

// const nProd2 = new Product(1, 'Name', 2, 'Desct');
// console.log('3rd created')
