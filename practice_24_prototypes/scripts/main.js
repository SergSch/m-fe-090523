// код пишем здесь!

function ProductFunction(id, name, price, description) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
}

class ProductClass {

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

const independentObject = {
  property: 'value'
}

const productInstance = new ProductClass(1,'Name', 2, 'Description');
