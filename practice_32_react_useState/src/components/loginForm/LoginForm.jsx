import React, { useState } from "react";
import SimpleParagraph from "../simpleParagraph/SimpleParagraph";

/*
3. Добавляем внутреннее состояние в нашу форму. Нам нужно, чтобы введенное пользователем в инпуте значение теперь хранилось в стейте компонента. Для этого:
 - нужно добавить внутреннее состояние - хук `useState`. Назовем его `login`
 - значение в инпуте (`value`) - поставить `login`. То есть теперь инпут заполняется значением из стейта.
 - добавить обработчик события `onChange` на инпут ( `onChange={ (event) => {...} }` )при изменении инпута, мы должны менять наш стейт - записывать в него значение `event.target.value`.
*/

export default function LoginForm() {

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  const [error, setError] = useState('');

  console.log('Render login form')

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

      <button onClick={() => {
        if (!login || !passwd) {
          setError('Fill all fields!')
        }
        else {
          setError('');
          console.log('Form state: ', login, passwd);
        }
      }}>Enter</button>
    </div>
  );
}