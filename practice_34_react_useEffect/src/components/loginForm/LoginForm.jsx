import React, { useState } from "react";
import SimpleParagraph from "../simpleParagraph/SimpleParagraph";

export default function LoginForm( props ) {

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  const [error, setError] = useState('');

  const [attempts, setAttempts] = useState([]);

  const clickHandler = () => {
    if (!login || !passwd) {
      setError('Fill all fields!')
    }
    else {
      // setError('');
      const attemptData = {
        id: Date.now(),
        login: login,
        pwd: passwd
      };

      /* for demo only! */
      /*
      const newArray = attempts;
      newArray.push(attemptData)

      setAttempts(newArray);
      */
      setAttempts( [...attempts, attemptData] );
      props.successLoginHandler(login);
    }
  }

  console.log('Render LoginForm');
  return (
    <div>
      <input
        value={login}
        onChange={ (event) => { console.log('handle1'); setLogin(event.target.value) } }
        placeholder="Login" type="text" className="input"
      />

      <input
        value={passwd}
        onChange={ (event) => { console.log('handle2'); setPasswd(event.target.value) } }
        placeholder="Password" type="password" className="input"
      />

      { error && <SimpleParagraph text={error}/> }

      <button onClick={clickHandler}>Enter</button>

      {
        attempts.map( attempt => {
          return <p key={attempt.id}>{attempt.login + " " + attempt.pwd}</p>
        })
      }
    </div>
  );
}