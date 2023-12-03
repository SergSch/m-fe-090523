import logo from './logo.svg';
import React, {useState} from 'react';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph.jsx';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';


function App() {

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <LoginForm />
    </div>
  );
}

export default App;
