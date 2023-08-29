// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw];

/**************** Примеры колбэков ************* */

/* Объявляем функцию, которую потом используем как колбэк. */
function myCallback() {
    console.log('Hi from callback!');
}

/** Объявляем функцию, которая в первом аргументе ожидает функцию-колбэк.
 * Ее задача - просто ВЫЗВАТЬ колбэк
 */
function wrapper(callback) {
    // вызываем колбэк
    callback();
}

// вызываем функцию, которая вызовет колбэк. В аргументе передаем ссылку на
// функцию-колбэк
wrapper(myCallback);

// Примеры колбэка с массивами
const demoArray = [ 1,6,2,8,4,11];

// Объявляем свою функцию, которую используем в качестве колбэка метода Array.filter
function myFilter(num) {
    return num % 2 !== 0;
}

// вызываем метод массивов filter, и передаем туда колбэк, который мы объявили ранее
const evenArrayWithExplicitFunction = demoArray.filter( myFilter );
console.log(evenArrayWithExplicitFunction);

// также вызываем метода массива filter, а в качестве колбэка передаем
// АНОНИМНУЮ функцию
const evenArrayWithImlicitFunction = demoArray.filter( (item) => {
    return item % 2 !== 0;
});
console.log(evenArrayWithExplicitFunction);

// Пример реализации метода массивов filter
// Функция ожидает массив, кототый надо отфильтровать, и функцию-критерий отбора
// (колбэк). В результирующий (отфильтрованный массив) попадут только те
// элементы, для которых функция-колбэк вернет true
function customFilter(srcArray, condition) {
    let result = [];
    for (let i = 0; i < srcArray.length; i++) {
        if (condition(srcArray[i]) === true) {
            result.push(srcArray[i]);
        }
    }
    return result;
};

const dummyFilter = (item) => {
    return item % 2 !== 0;
};

const customFiltered = customFilter(demoArray, dummyFilter)
console.log('Custom: ', customFiltered);

/*
2. Пишем функцию `onlyForDiscounted`. Функция принимает массив (товаров), и функцию-колбэк, которую она должна выполнить только для тех товаров, у которых `discounted = true`.
*/

const productCallback = (product) => {
    console.log(product.name, 'is discounted');
}

function onlyForDiscounted(arr, callback) {
    // когда мы вызовем нашу ф-ю с аргументом products,
    // arr = products
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].discount) {
            callback(arr[i]);
        }
        // 1st iteration: Ball. ball.discount === undefined => callback will not be called
        // 2nd iteration: Gloves. gloves.discount === undefined => callback will not be called
        // 3rd iteration: Shoes. shoes.discount === true => callback will be called
        // ..
    }
}

onlyForDiscounted(products, productCallback);


/*3. Написать свою реализацию метода `forEach` - назовем ее `customForEach`. Пишем функцию, которая принимает первым аргументом массив, а вторым - функцию-колбэк, которую нужно выполнить для каждого элемента массива.
*/

function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback( arr[i] );
    }
}

function myCallback4ForEach(item) {
    console.log(item.name);
}

customForEach(products, myCallback4ForEach );

/* 4. Делаем аналогичное действие для `map` - пишем свою `customMap`. */
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const mapped = callback( arr[i] );
        result.push(mapped);
    }
    return result;
}

const dummyMapSrc = [ 1,2,3,4,5 ];
function square(x) {
    return x * x;
}
const squares = customMap(dummyMapSrc, square);
console.log(squares);