// код пишем здесь.

const car1 = {
    model: 'Lada',
    type: 'sedan',
    color: 'baklazhan',
    manufactured: 1989
}

const car2 = {
    model: 'Lada',
    type: 'sedan',
    color: 'baklazhan',
    manufactured: 1989
}

const car3 = car1;

const baseDwarfWeapons = [
    {
        type: 'melee',
        name: 'Sword',
    },
    {
        type: 'melee',
        name: 'Axe',
    },
    {
        type: 'melee',
        name: 'Spear',
    },
    {
        type: 'melee',
        name: 'Flail',
    },
    {
        type: 'archery',
        name: 'crossbow',
    },
];

/*
1. Пристрелочная задача. Вывести в консоль текущие время и дату, в формате местной локализации.
*/

// let currentDate = new Date();

/*
2. Добавляем это на страницу. У нас есть элемент с классом `dateTimeHeader`, нужно записать в него текст с текущими датой и временем.
*/

// const dateTimeHeader = document.querySelector('.dateTimeHeader');

/*
3. Добавляем динамики. Нужно, чтобы наш параграф отображал актуальное время с точностью до секунды. Для этого, текст в параграфе нужно ежесекундно обновлять.
*/

// function updateCurrentDateTime() {
//     let curDate = new Date();
//     dateTimeHeader.textContent = curDate.toLocaleString();
// }
// updateCurrentDateTime();

// setInterval(updateCurrentDateTime, 1000);

/*
4. Изменяем текстовку. Теперь дату и время выводим так: "Сегодня 9-е число 10-го месяца 2023 года, текущее время 14:10". То есть, нам нужно работать с частями дат.
*/

// function updateCurrentDateTime() {
//     let curDate = new Date();
//     dateTimeHeader.textContent = `Сегодня ${curDate.getDate()}-е число ${curDate.getMonth() + 1}-го месяца ${curDate.getFullYear()} года, текущее время ${curDate.getHours()}:${curDate.getMinutes()}`;
// }
// updateCurrentDateTime();

// setInterval(updateCurrentDateTime, 1000);

/*
5. Пишем функцию `isAdult`, которая проверит, является ли пользователь совершеннолетним. Она принимает на вход день, месяц, и год рождения пользователя. И задача - проверить, есть ли пользователю 18 лет. Подсказка, как это сделать: нужно посчитать дату совершеннолетия пользователя, и проверить, что текущая дата больше даты совершеннолетия.
*/

// function isAdult(day, month, year) {
//     const currentDate = new Date();
//     const adultDate = new Date(year + 18, month - 1, day);
//     return currentDate > adultDate;
// }

// console.log(isAdult(1,1,2000));
// console.log(isAdult(1,1,2007));
// console.log(isAdult(10,10,2005));

/*
6. Бонусная задача. Вывести в консоль разницу во времени между UTC и своей временной зоной.
*/

// const curDate = new Date();
// console.log(curDate);
// console.log(curDate.getTimezoneOffset())


/*
7. Переходим к объектам. У нас есть несколько тестовых объектов. Создайте копию объекта `car2` - так чтобы она содержала те же свойства и значения что и оригинал.
*/

const car4 = { ...car2 };
console.log(car2, car4, car2 === car4)

/*
8. Работаем с более сложным объектом. У нас есть объект `dwarf` - персонаж компьютерной игры, гном. Нужно создать его "глубокую" копию `dwarfClone`, но при этом его свойство `name` должно быть `Torin`, а его навык в рукопашной (`melee`) должен быть 15.
*/

const dwarf = {
    name: 'Karst',
    level: 12,
    fraction: 'Dwarwes',
    skills: {
        magic: 0,
        melee: 11,
        archery: 0,
    }
}

const dwarfClone = {
    ...dwarf,
    name: 'Torin',
    skills: {
        ...dwarf.skills,
        melee: 15
    }
}

const copy = JSON.parse(JSON.stringify(dwarf));
copy.skills.archery = 100;
console.log(dwarf, dwarfClone, copy)