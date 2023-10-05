// код пишем здесь.

/*
1. Пристрелочная задача. Написать асинхронную функцию, которая будет обращаться за списком товаров по адресу `https://fakestoreapi.com/products`, и выводит результат консоль. Использовать синтаксис async/await.
*/

// async function getProducts() {
//     try {
//         const resp = await fetch('https://fakestoreapi.com/products');
//         const jsonData = await resp.json();
//         console.log(jsonData);
//         return jsonData;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

/*
2. Создать промис, который будет зарезолвлен через 3 секунды словом 'Success'. Используя синтаксис async/await, дождаться успешного выполнения промиса, и вывести результат в консоль. ВАЖНО! Слово `await` мы можем использовать только внутри `async`-функций, а следовательно, создадим для этих целей функцию `asyncFunction`, в которой будем работать с await.
*/

/*
3. Освежаем промисы. Написать функцию `promiseFactory`, которая будет создавать промисы. В аргументах она принимает `isSuccess`, `timeout`, `promiseResult`. Функция должна создать промис. Если `isSuccess = true`, то через `timeout` секунд промис должен быть зарезолвлен аргументом `promiseResult`. А если `isSuccess = false`, то через `timeout` секунд нужно вызвать `reject` с `promiseResult`.
*/

/*
4. Теперь работаем с нештатными ситуациями. Вызвать функцию `promiseFactory(false, 3, 'Something went wrong!');`. То есть, нужно имитировать нештатную ситуацию. И нам нужно, используя синтаксис async/await, обработать эту нештатную ситуацию - вывести причину в консоль. Здесь нам поможет `try/catch`.
*/

/*
5. Нам нужно создать 2 промиса, с использованием нашей функции `promiseFactory`, оба должны зарезолвиться успешно. Первый - через 2 секунды, числом 5, а второй - через 3 секунды, числом 7. С использованием async/await, вывести в консоль сумму результатов этих двух промисов.
*/

function promiseFactory(isSuccess, timeout, promiseResult) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (isSuccess) {
                resolve(promiseResult);
            }
            else {
                reject(promiseResult);
            }
        }, timeout * 1000);
    });
}

async function init () {

    try {
        const promise1 = promiseFactory(true, 2, 5);
        const promise2 = promiseFactory(true, 3, 7);
        // Promise.all( [promise1, promise2] )
        //     .then( (result) => {
        //         console.log(result[0] + result[1])
        //     });
        const result = await Promise.all( [promise1, promise2] );
        console.log(result[0] + result[1]);
    }
    catch (err) {
        console.log(err);
    }
    //..

    // Здесь мы будем работать с асинхронными (async) функциями, которые нам предстоит написать.
}

init();