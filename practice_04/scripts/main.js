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

// 1
let result = numbers.push(45);
console.log(numbers);

// 2
let result1 = numbers.push(45,21,23);
console.log(numbers);

// 3
const newBall = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
}
let result2 = products.push(newBall);
console.log(result2);

// 4
let result3 = numbers.pop();
console.log(result3);

// 5
numbers.unshift(9);

// 6
numbers.shift();

// 7
strings.splice(6, 0, 'and', 'lowercased');
console.log(strings);

// 8
strings.splice(5, 3, 'tiny');
console.log(strings);


// Block 2
let isPresented = strings.includes('array');
console.log(isPresented)

const newBall2 = ball;
// проверить, есть ли в массиве products объекты newBall, newBall2
const res1 = products.includes(newBall);
const res2 = products.includes(newBall2);

/*
  - найти индекс числа 0  в массиве чисел
  - найти индекс объекта `shark` в массиве объектов
  - найти индекс последнего вхождения числа 9 в массиве чисел
*/
const indexOfZero = numbers.indexOf(0);
const indexOfShark = products.indexOf(shark);
const lastIndexOfNine = numbers.lastIndexOf(9);

// Block3
/*
  - объединить наш массив строк в одно предложениею. Результатом должна быть строка, разделенная пробелами.
  - объединить наш массив чисел в одно большое число (т.е. без разделителей)
  - вывести в консоль массив строк в обратном порядке
*/
const joined = strings.join(' ');
console.log(joined)
const joined1 = numbers.join('');
console.log(joined1);

strings.reverse();
console.log(strings)


const strings1 = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

strings1.forEach( (item, index) => {
    console.log(item, index);
} );
// 1st iteration:  item = 'this', index = 0
// 2nd iteration: item = 'is', index = 1
// 3rd iteration: item = 'an', index = 2
// ..

//- пройтись по массиву чисел, для каждого числа вывести, является ли оно четным.

numbers.forEach( (item) => {
    if (item % 2 === 0) {
        console.log(item + ' is even');
    }
    else {
        console.log(item + ' is odd');
    }
} );
