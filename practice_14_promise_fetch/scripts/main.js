// Здесь пока ничего нет.

/*
1. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://fakestoreapi.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
*/


/*
2. Усложняем задачу. Нужно написать функцию `renderSelect`. Она должна:
 Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же, но с большой буквы (т.е. надо сделать первую букву значения заглавной).
*/

const categoriesSelect = document.querySelector('#categoriesSelect');

const renderSelect = () => {
    // запросить данные категорий
    fetch('https://fakestoreapi.com/products/categories')
        .then( resp => resp.json())
        .then( data => {
            console.log('Response data: ', data);
            // отрендерить их в селекте
            data.forEach( elem => {
                const optionEl = document.createElement('option');
                optionEl.value = elem;
                optionEl.textContent = elem.charAt(0).toUpperCase() + elem.slice(1);
                categoriesSelect.append(optionEl);
            });
        });
}

renderSelect();

/*
3. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://fakestoreapi.com/products/category/CATEGORY`. В ответ нам придет список товаров этой категории. Наша задача - отрендерить их в списке товаров (`div.productsContainer`). ВАЖНО! Список товаров перед рендерингом надо очистить! Товары рендерим в виде карточек, класс - `productCard`.
*/

const loader = document.querySelector('.loader');
loader.style.display = 'none';

const productsContainer = document.querySelector('#productsContainer');
function getProducts(category) {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then( resp => resp.json())
        .then( data => {
            data.forEach( product => {
                const productCard = document.createElement('div');
                productCard.classList.add('productCard');
                const title = document.createElement('h3');
                title.textContent = product.title;
                const price = document.createElement('p');
                price.textContent = product.price;
                const description = document.createElement('p');
                description.textContent = product.description;

                productCard.append(title, price, description);
                productsContainer.append(productCard);
            });
            loader.style.display = 'none';
        });

}

/*
5. Добавляем обработчик события `change` на наш `select`. При событии, нам нужно вызывать функцию из п.12 с соответствующей категорией - т.е. мы рисуем список товаров выбранной категории.
*/

categoriesSelect.addEventListener('change', (event) => {
    productsContainer.innerHTML = '';
    loader.style.display = 'block';
    getProducts(event.target.value);
});

/**
 * 6. Добавляем "иконку загрузки" на нашу страницу. Добавляем перед нашим `select` контейнер (`div.loader`) с текстом "Подождите, идет загрузка...". По умолчанию он скрыт (`display: none`). Нам нужно показывать этот блок при начале запроса списка товаров, и скрывать, когда список товаров успешно загружен.
 */