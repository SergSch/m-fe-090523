import React, { useState } from "react";
import SimpleParagraph from "../simpleParagraph/SimpleParagraph";

export default function LoginForm( props ) {

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  const [error, setError] = useState('');

  const clickHandler = () => {
    if (!login || !passwd) {
      setError('Fill all fields!')
    }
    else {
      setError('');
      props.successLoginHandler(login);
    }
  }

  return (
    <div>
      <input
        value={login}
        onChange={ (event) => { setLogin(event.target.value) } }
        placeholder="Login" type="text" className="input"
      />

      <input
        value={passwd}
        onChange={ (event) => { setPasswd(event.target.value) } }
        placeholder="Password" type="password" className="input"
      />

      { error && <SimpleParagraph text={error}/> }

      <button onClick={clickHandler}>Enter</button>
    </div>
  );
}