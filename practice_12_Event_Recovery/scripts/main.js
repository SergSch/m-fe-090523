/*
1. Освежаем в памяти методы Event. На странице есть инпут с id=`nameInput`. Предполагается, что мы будем вводить в него имя пользователя. Нвам нужно сделать так, чтобы имя пользователя было не больше 12 символов. То есть, нужно добавить обработчик на событие `keypress`, и при каждом этом событии проверять длину введенного. Если длина равна 12 - то предотвращаем поведение по умолчанию.
*/

const nameInput = document.querySelector('#nameInput');

nameInput.addEventListener('keypress', (event) => {
    if (event.target.value.length > 11) {
        event.preventDefault();
    }
});

/*
2. Теперь добавим минимальную длину для нашего имени пользователя. Нам нужно при уходе пользователя из инпута (при событии потери фокуса - `blur`), проверять, введено ли в инпут значение больше 3 символов длиной. Если длина введенного в инпуте меньше 3 символов - нам нужно:
 - применить класс `errorInput` к инпуту
 - установить на него фокус (для этого у DOMElement-ов есть метод `focus()`)
 */

nameInput.addEventListener('blur', (event) => {
    if (event.target.value.length < 3) {
        event.target.classList.add('errorInput');
        event.target.focus();
    }
    else {
        event.target.classList.remove('errorInput');
    }
});

/* 3. Работаем с событиями мыши. Нужно, чтобы при "заходе" мыши в блок `div.#bubblingBlock`, у этого блока становился цвет фона `yellow`, а после ухода курсора из блока - цвет фона должен быть обычный ('');
*/

// const bubblingBlock = document.querySelector('#bubblingBlock');
// bubblingBlock.addEventListener('mouseover', (event) => {
//     event.target.style.backgroundColor = 'yellow';
// })
// bubblingBlock.addEventListener('mouseleave', (event) => {
//     event.target.style.backgroundColor = '';
// })

/**
 * 4. Работаем со всплытием событий. У нас на странице есть блок `div#bubblingBlock`. Нужно добавить на него обработчик клика, чтобы он при клике выводил в консоль текст "Кликнули по " + ID элемента, по которому кликнули.
 */

bubblingBlock.addEventListener('click', (event) => {
    if (!event.defaultPrevented) {
        console.log(`Clicked on ${event.target.id}`)
    }
})

/*
5. Теперь нам нужно предотвратить отработку этого обработчика для первой кнопки. То есть, сделать так, чтобы при клике на первую кнопку (`button#firstButton`), обработчик из п.3 не отрабатывал.
*/

const firstButton = document.querySelector('#firstButton');
firstButton.addEventListener( 'click', (event) => {

    event.preventDefault();
});

/*
7. Закрепляем предыдущие задачи. У нас на странице есть ссылка, которая ведет на https://www.google.com. Нужно сделать так, чтобы при клике по ссылке в консоль выводилось сообщение "Ссылка не открывается - запрещено!", и перехода на странице Google не происходило. Подсказка - здесь нужно поставить обработчик клика и предотвратить поведение по умолчанию.
*/
const link = document.querySelector('#testInputsBlock > a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('This link is prohibited!')
})