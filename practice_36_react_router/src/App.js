import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';
import SimpleComponent from './components/simpleComponent/SimpleComponent.jsx';


function App() {

  // local state UserName
  const [userName, setUserName] = useState('');
  const [greet, setGreet] = useState(false);

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <LoginForm successLoginHandler={setUserName}/>

      <SimpleComponent />
    </div>
  );
}

export default App;
