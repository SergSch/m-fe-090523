import logo from './logo.svg';
import React from 'react';
import './App.css';


function App() {

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>
      <SimpleParagraph />
      <LoginForm />
    </div>
  );
}

 /*
 6. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
 */
function LoginForm() {
  return (
    <div>
      <input placeholder='Login'/>
      <input placeholder='Password' type="password"/>
      <button>Enter</button>
    </div>
  );
}

function SimpleParagraph() {
  return (
    <p>Simple Paragraph!</p>
  );
}

export default App;
