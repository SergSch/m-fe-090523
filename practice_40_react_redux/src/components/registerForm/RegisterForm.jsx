import React, {useState} from "react";

import classes from './RegisterForm.module.css';

export default function RegisterForm( props ) {

  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <form className={classes.contactsFormContainer}>
      <input
        placeholder="Login"
        type="text"
        className={classes.contactsInput}
        onChange={e => setLogin(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        className={classes.contactsInput}
        onChange={e => setPwd(e.target.value)}
      />

      <button className={classes.submitButton}>Enter</button>

    </form>
  );
}