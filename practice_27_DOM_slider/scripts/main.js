const IMG_WIDTH = 300;

class Slider {

  // Общее количество слайдов
  #totalSlides = 0;
  // Текущий слайд (индекс текущего слайда)
  #currentSlide = 0;
  // Массив слайдов, которые будем показывать
  #slides = [];
  // Контейнер слайдов
  #containerEl;

  constructor(slides) {
    this.#slides = slides;
    this.#totalSlides = slides.length;
    this.#currentSlide = 0;
  }

  #renderSlide(slideData) {
    const slideContainer = document.createElement('div');
    slideContainer.classList.add('sliderCard');
    const slideImg = document.createElement('img');
    slideImg.src = slideData.img;
    slideContainer.append(slideImg);
    return slideContainer;
  }

  #renderControls(container) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('controlButtonContainer');
    const btnLeft = document.createElement('button');
    const btnRight = document.createElement('button');
    btnLeft.classList.add('controlButton');
    btnRight.classList.add('controlButton');
    btnLeft.textContent = '<';
    btnRight.textContent = '>';
    buttonsContainer.append(btnLeft, btnRight);
    container.append(buttonsContainer);

    btnLeft.addEventListener('click', () => {
      this.slideLeft();
    });
    btnRight.addEventListener('click', () => {
      this.slideRight();
    });
  }

  slideLeft() {
    if (this.#currentSlide > 0) {
      this.#currentSlide--;
    }
    else {
      this.#currentSlide = this.#totalSlides - 1;
    }
    this.#containerEl.style.left = `${ -1 * this.#currentSlide * IMG_WIDTH }px`;
  }

  slideRight() {
    if (this.#currentSlide !== this.#totalSlides - 1) {
      this.#currentSlide++;
    }
    else {
      this.#currentSlide = 0;
    }
    this.#containerEl.style.left = `${ -1 * this.#currentSlide * IMG_WIDTH }px`;
  }

  render( container ) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('sliderContainer');
    this.#slides.forEach( slide => {
      innerContainer.append( this.#renderSlide(slide) );
    });
    this.#containerEl = innerContainer;
    container.append(innerContainer);
    this.#renderControls(container);
  }

}

const ball = {
  id: 1,
  name: 'Ball',
  category: 'Sport',
  img: './assets/ball.jpeg',
  price: 100,
};
const gloves = {
  id: 2,
  name: 'Gloves',
  category: 'Sport',
  img: './assets/gloves.jpg',
  price: 140,
};
const shoes = {
  id: 3,
  name: 'Sport shoes',
  category: 'Sport',
  discount: true,
  img: './assets/shoes.png',
  price: 320,
};
const hammer = {
  id: 4,
  name: 'Hammer',
  category: 'Tools',
  img: './assets/hammer.jpeg',
  price: 40,
};
const saw = {
  id: 5,
  name: 'Saw',
  category: 'Tools',
  discount: true,
  img: './assets/saw.jpeg',
  price: 75,
};
const shark = {
  id: 6,
  name: 'Shark toy',
  category: 'Other',
  img: './assets/shark.jpeg',
  price: 45,
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

const sliderInstance = new Slider(products);
const container = document.querySelector('.centeredContainer');
sliderInstance.render(container);