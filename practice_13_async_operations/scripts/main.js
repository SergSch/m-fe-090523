// Здесь пока ничего нет.

/*
1. Работаем с отложенным выполнением кода. Нужно вывести в консоль сообщение "Delayed message", через 5 секунд после запуска скрипта.
*/

// setTimeout( () => {
//     console.log('Delayed message')
// }, 5000 );

/*
2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.
*/
const container = document.querySelector('#root');
const timeInput = document.createElement('input');
timeInput.placeholder = 'Delay time (s)';
const timeButton = document.createElement('button');
timeButton.textContent = 'Start';

const cancelButton = document.createElement('button');
cancelButton.textContent = 'Cancel';
cancelButton.style.display = 'none';

let timerId;
timeButton.addEventListener('click', (event) => {
    timerId = setTimeout( () => {
        console.log('Delayed message from timer');
        cancelButton.style.display = 'none';
    }, timeInput.value * 1000 );

    cancelButton.style.display = 'block';
});
cancelButton.addEventListener('click', (event) => {
    clearTimeout(timerId);
    cancelButton.style.display = 'none';
});
container.append(timeInput, timeButton, cancelButton);

// const timerId = setTimeout( () => {
//     console.log('Hello from timeout')
// }, 2000);

// clearTimeout(timerId);

/*
3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
 - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
 - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
 - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.
 */


 /*
 8. Работаем с промисами. Задача - написать промис, который через 5 секунд будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
 */
const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {

        // Send request
        // Handle result
        // if result - OK => resolve(result)
        // else => reject(errorText)
        //resolve('Successfully finished');
        reject('Something went wrong')
    }, 1500);
} );

promise.then(
    (resolvedData) => {
        console.log(resolvedData);
    },
    (rejectedData) => {}
)
.catch( (rejectedData) => {
    console.log('Rejected', rejectedData);
});