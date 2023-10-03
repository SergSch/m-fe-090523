// Здесь пока ничего нет.

const categoriesSelect = document.querySelector('#categoriesSelect');
const loader = document.querySelector('.loader');
loader.style.display = 'none';
const productsContainer = document.querySelector('#productsContainer');

/**
 * Функция запроса списка товаров
 * @param {*} category Категория
 * @returns ПРОМИС, который будет зарезолвлен НТТР-ответом
 */
const requestProducts = (category) => {
    const productsUrl = `https://fakestoreapi.com/products/` + (!!category ? `category/${category}` : '');
    return fetch(productsUrl);
};

/**
 * Функция запроса списка категорий
 * @returns ПРОМИС, который будет зарезолвлен НТТР-ответов
 */
const requestCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories');
}

/**
 * Функция, которая рендерит категории
 * @param {*} categoriesArray Массив с категориями
 */
const renderCategories = (categoriesArray) => {
    categoriesArray.forEach( elem => {
        const optionEl = document.createElement('option');
        optionEl.value = elem;
        optionEl.textContent = elem.charAt(0).toUpperCase() + elem.slice(1);
        categoriesSelect.append(optionEl);
    });
}

/**
 * Функция которая рендеритт карточки товаров
 * @param {*} productsArray Массив с данными товаров
 */
const renderProducts = (productsArray) => {
    // Очищаем контейнер товаров
    productsContainer.innerHTML = '';
    // Отрисовываем карточки товаров
    productsArray.forEach( product => {
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');
        const title = document.createElement('h3');
        title.textContent = product.title;
        const price = document.createElement('p');
        price.textContent = product.price;
        const description = document.createElement('p');
        description.textContent = product.description;
        const dropProductBtn = document.createElement('a');
        dropProductBtn.classList.add('dropProductBtn');
        dropProductBtn.innerText = 'Drop';
        productCard.append(title, price, description, dropProductBtn);
        productsContainer.append(productCard);
    });
}

// Блок, который отработает при запуске скрипта.
const init = () => {
    loader.style.display = 'block';
    const categoriesPromise = requestCategories();
    const productsPromise = requestProducts();

    Promise.all( [categoriesPromise, productsPromise] )
        .then( result => {
            return Promise.all( [result[0].json(), result[1].json()] )
        })
        .then( dataResults => {
            renderCategories(dataResults[0]);
            renderProducts(dataResults[1]);
            loader.style.display = 'none';
        });

    // categoriesPromise
    //     .then( resp => resp.json())
    //     .then( data => renderCategories(data));

    // productsPromise
    //     .then( resp => resp.json())
    //     .then( data => renderProducts(data));

    categoriesSelect.addEventListener('change', (event) => {
        loader.style.display = 'block';
        requestProducts(event.target.value)
            .then(resp => resp.json())
            .then(products => {
                renderProducts(products);
                loader.style.display = 'none';
            });
    });
}

init();

// Для задачи №2
const task2Demo = () => {
    const firstPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('First promise finished!')
            resolve(5)
        }, 2000);
    });
    const secondPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Second promise finished!')
            resolve(7)
        }, 3000);
    });

    Promise.all( [firstPromise, secondPromise] )
        .then( result => {
            console.log('All promises resolved!', result)
            console.log( result[0] + result[1]);
        });
    // Нужно получить сумму того, чем зарезолвлены наши промисы
}

 task2Demo();

// Для задачи №4
const task4Demo = () => {
    const firstPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('First promise finished!')
            resolve(5)
        }, 2000);
    });
    const secondPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            const rand = Math.random();
            if (rand < 0.5) {
                console.log('Second promise rejected!')
                reject(7);
            }
            else {
                console.log('Second promise finished!')
                resolve(7);
            }
        }, 3000);
    });

    Promise.all( [firstPromise, secondPromise] )
        .then( results => {
            console.log('All success!', results[0] + results[1]);
        })
        .catch( error => {
            console.log('Something went wrong', error);
        })
        .finally( () => {
            console.log('All promises finished!');
        });
    /*
    Нужно построить такую логику, чтобы:
 - при успешном завершении обоих промисов, в консоли выводилась сумма результатов (как в предыдущей задаче)
 - в случае ошибки, в консоль выводилось "something went wrong!", и причина ошибки (то, что передается в `reject`)
 - вне зависимости от результата, чтобы в консоль выводилось "All promises are finished now!".
 */
}

// task4Demo();

// Работа с модальным окном формы добавления нового товара
const addProductBtn = document.querySelector('#addProductBtn');
const productModal = document.querySelector('#modalContainer');

addProductBtn.addEventListener('click', (event) => {
    productModal.style.display = 'block';
});

productModal.addEventListener('click', (event) => {
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
})

/*
Пишем функцию добавления нового товара `addProduct`. В аргументах она принимает:
 - title - название нового товара
 - price - цена
 - description - описание
 - category - категория товара

Она должна обратиться POST-запросом к адресу `https://fakestoreapi.com/products`, и в теле запроса передать такой объект:

```
{
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
```
Объект нужно преобразовать в строку (`JSON.stringify`).
*/

const addProduct = (title, price, description, category) => {
    const reqData = {
        title: title,
        price: price,
        description: description,
        category: category,
        image: 'https://i.pravatar.cc'
    };
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(reqData)
    })
        .then( resp => resp.json())
        .then( data => console.log(data));
}

addProduct('title', 12, 'descrp', 'cat')
