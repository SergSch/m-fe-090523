import logo from './logo.svg';
import React, {useState} from 'react';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph.jsx';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';
import SimpleInput from './components/input/SimpleInput.jsx';
import Greeting from './components/greeting/Greeting.jsx';


function App() {

  // local state UserName
  const [userName, setUserName] = useState('');
  const [greet, setGreet] = useState(false);

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <LoginForm successLoginHandler={setUserName}/>
      <button onClick={ () => {setGreet(old => !old);} }>Toggle Greeting visibility</button>
      { greet && <Greeting name={userName} /> }
    </div>
  );
}

export default App;
