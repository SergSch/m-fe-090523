import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';
import SimpleInput from './components/input/SimpleInput';
import SimpleComponent from './components/simpleComponent/SimpleComponent';


function App() {
  const paragraphClickHandler = () => {
    console.log('Handler on paragraph')
  }

  //const appTheme = 'dark';

  let [state, setState] = useState('simpleState');

  const [appTheme, setAppTheme] = useState('light');

  const handleUpClick = () => {
    const newState = state.toUpperCase();
    setState(newState);
  }

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <button onClick={ () => {
        setAppTheme( appTheme === 'light' ? 'dark' : 'light' );
      }}>{appTheme}</button>

      <button onClick={handleUpClick}>Up!</button>

      <SimpleParagraph text={state} />

      <SimpleParagraph
        text="Paragraph text!"
        onClick={ paragraphClickHandler }
        currentTheme={appTheme}
      />

      <SimpleComponent appTheme={appTheme}/>

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
