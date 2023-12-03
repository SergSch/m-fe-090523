import logo from './logo.svg';
import React, {useState} from 'react';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph.jsx';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';


function App() {

  /*
  1. Пристрелочная - добавляем счетчик кликов на кнопку. Добавить в компоненте `App` кнопку. И нужно, чтобы компонент "считал" количество кликов на кнопку. То есть, нам нужно:
 - добавить в компонент `App` состояние (clickCount) состояние (хук `useState`)
 - добавить обработчик клика на кнопке - при клике увеличивать счетчик на 1
 - добавить в компонент `App` наш `SimpleParagraph`, в котором выводить текст "Кликнули N раз"
 */


  const [clickCount, setClickCount] = useState(0);

  const counterClickHandler = () => {
    setClickCount( clickCount + 1 );
  }

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <button onClick={counterClickHandler}>Increment</button>
      <SimpleParagraph text={`Clicked ${clickCount} times!`}/>

      <LoginForm />
    </div>
  );
}

export default App;
