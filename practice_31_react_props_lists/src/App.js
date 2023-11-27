import logo from './logo.svg';
import React from 'react';
import './App.css';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';
import SimpleInput from './components/input/SimpleInput';


function App() {
  const paragraphClickHandler = () => {
    console.log('Handler on paragraph')
  }

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>
      <SimpleParagraph
        text="Paragraph text!"
        onClick={ paragraphClickHandler }
      />
      <SimpleInput disabled={true} size="small" />
      <SimpleInput disabled={false} size="medium" />
      <SimpleInput isError={true} size="large" />
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

export default App;
