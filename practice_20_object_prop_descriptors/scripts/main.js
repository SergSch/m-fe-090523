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