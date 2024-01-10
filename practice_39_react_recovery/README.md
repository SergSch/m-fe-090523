# README

## Практическое занятие №39

### Тема:

Репозитарий содержит материалы по практическому занятию №39, посвященному повторению ранее пройденного.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
В нашем приложении уже есть компонент для рендеринга списка товаров - но еще нет компонента, где мы бы отображали подробную информацию о товаре. Давайте его реализуем.
1. Создаем компонент `ProductDetail`. Он должен отображать подробную информацию о товаре. В нем должны быть:
 - название товара (отображаем как `h3`)
 - описание товара (отображаем как `p`)
 - цена товара (отображаем также как `p`)
 - изображение товара (тег `img`).
 - кнопки "добавить", "убрать" (для будущей работы с корзиной).
2. Теперь надо оживить наш товар. В пропсах (пока что), он будет принимать ID товара. Нужно при монтировании компонента, сделать запрос адреса `https://dummyjson.com/products/PRODUCT_ID`, и отрендерить результат.
3. Добавим новый маршрут в наше приложение. Хорошо бы сделать относительный маршрут. У нас есть маршрут `/products` который ведет на страницу списка товаров. Было бы неплохо сделать относительный маршрут на страницу информации о товарах так: `/products/1`, где 1 - это ИД товара. И нужно доработать компонент `ProductList` - в каждую карточку товара добавить ссылку на страницу подробной информации о товаре, с текстом "Подробнее".
4. Вспоминаем за контекст. Делаем контекст приложения, в нем мы хотим хранить корзину товаров. Изначально, корзина пуста (пустой объект). Впоследствии, мы будем добавлять в корзину товары. Будем из добавлять по ключу, то есть у нас корзина - это объект, в котором ключами являются ИДы товаров, а значениями - количество этих товаров в корзине. Также, этот контекст должен предоставить методы для добавления и удаления товара из корзины.
5. Поработаем с императивом. Нужно добавить обработчик события клика на изображение в компоненте подробной информации о товаре. При клике, нужно выводить в консоль ширину и высоту изображения, а также значение атрибута `src`.

### Полезные ссылки по занятию:
 - [React useRef](https://react.dev/reference/react/useRef) - англоязычная документация по хуку `useRef`.
 - [React State](https://react.dev/learn/state-a-components-memory) - англоязычная подробная документация по `useState`.
 - [React useEffect](https://react.dev/reference/react/useEffect#updating-state-based-on-previous-state-from-an-effect) - толковая официальная документация по `useEffect`.
 - [React useContext](https://react.dev/reference/react/useContext) - англоязычная документация по хуку `useContext`
 - [Еще useContext](https://reactdev.ru/reference/useContext/#_12) - русскоязычная статья, вольный перевод официальной доки, с примерами использования. Рекомендуется к прочтению.