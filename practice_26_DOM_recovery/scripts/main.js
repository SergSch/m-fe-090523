const productsContainerEl = document.querySelector('.products-container');

/* 1. И вновь работаем с интернет-магазином. Наша первая задача - получить с бэка (`https://fakestoreapi.com/products`) список товаров, записать его в массив `productsDataSource`, и вывести его в консоль. */

let productsDataSource = [];

fetch('https://fakestoreapi.com/products')
  .then( resp => resp.json())
  .then( products => {
    productsDataSource = products;
    console.log(productsDataSource);
    renderProducts(products);
  });

  // async function getProducts() {
  //   const resp = await fetch('https://fakestoreapi.com/products');
  //   const data = await resp.json();
  //   productsDataSource = data;
  //   console.log('From async', data);
  // }

  // getProducts();

  /* 2. Пишем функцию `renderProduct`, которая будет рендерить наш товар. Ее задача - отрисовать карточку товара. В качестве аргумента функция ожидает объект product (товар, список которых мы получили в п.1). Карточка:
 - это div с классом `product-card`
 - содержит заголовок (`h3`) с классом `product-title`, и значением свойства title объекта product
 - содержит параграф (`p`) с описанием (description). Класс - `product-description`
 - содержит параграф (`p`) с ценой товара, класс - `product-price`.
 */

function renderProduct(product) {
  const productCard = document.createElement('div');
  const title = document.createElement('h3');
  const descr = document.createElement('p');
  const price = document.createElement('p');

  productCard.classList.add('product-card');
  title.classList.add('product-title');
  descr.classList.add('product-description');
  price.classList.add('product-price');

  title.textContent = product.title;
  descr.textContent = product.description;
  price.textContent = product.price;

  productCard.append(title, descr, price);

  return productCard;
}

/* 3. Рендерим список товаров. Пишем функцию `renderProducts`, которая на вход будет принимать массив товаров. Она должна в контейнер товаров (элемент с классом `products-container`) отрендерить список наших товаров. ВАЖНО! Нужно перед отрисовкой переданного списка товаров, очистить контейнер от старых элементов. Как это сделать:
```
productsContainerEl.innerHTML = '';
```
*/

function renderProducts(products) {
  productsContainerEl.innerHTML = '';
  products.forEach( product => productsContainerEl.append(renderProduct(product)));
}

/*
5. Готовимся к применению сортировок. Нам нужно написать функцию `sortProducts`, которая будет принимать аргумент `sortRule` (правило сортировки), и сортировать наш массив `productsDataSource`, в соответствии с переданным аргументом.
*/

function sortProducts(sortRule, products) {
  switch (sortRule) {
    case "price_asc": {
      products.sort( (a,b) => a.price - b.price );
      break;
    }
    case "price_desc" : {
      products.sort( (a,b) => b.price - a.price );
      break;
    }
    case "title_asc" : {
      products.sort( (a,b) => a.title.localeCompare(b.title) );
      break;
    }
    case "title_desc" : {
      products.sort( (a,b) => b.title.localeCompare(a.title) );
      break;
    }
    default: break;
  }
}

/*6. Добавляем обработчик на событие `change` нашего выпадающего меню (`select`). При этом событии, нам нужно отсортировать наш массив товаров, и отрендерить его.
*/

const productsSortSelect = document.querySelector('#productsSortSelect');
productsSortSelect.addEventListener( 'change', (event) => {
  const val = event.target.value;
  sortProducts(val, productsDataSource);
  renderProducts(productsDataSource);
});

const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
searchButton.addEventListener('click', () => {
  if (!searchInput.value) {
    renderProducts(productsDataSource);
  } else {
    const inputValue = searchInput.value.toLowerCase();
    let filteredArr = productsDataSource.filter((elem) =>
      elem.title.includes(inputValue)
    );
    renderProducts(filteredArr);
  }
});