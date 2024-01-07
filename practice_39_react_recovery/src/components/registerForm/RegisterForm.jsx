import React, {useEffect, useState, useRef, useCallback} from "react";

import classes from './RegisterForm.module.css';
import AttemptsList from "./AttemptsList";

export default function RegisterForm( props ) {

  /* FOR TASK 8 */
  const [attempts, setAttempts] = useState( [] );

  const dropAttempt = useCallback( (datetime) => {
    const filteredList = attempts.filter((attempt) => attempt.datetime !== datetime);
    setAttempts(filteredList);
  }, []);

  const addAttempt = (login, pwd) => {
      const attempt = { login, pwd, datetime: new Date().getTime()};
      setAttempts( old => [...old, attempt] );
  }

  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  const enterBtnRef = useRef(null);

  const handleEnterBtnClick = (event) => {
    event.preventDefault();
    addAttempt(login, pwd);
  }

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

      <input
        placeholder="Email"
        type="text"
        className={classes.contactsInput}
      />

      <button
        onClick={handleEnterBtnClick}
        ref={enterBtnRef} className={classes.submitButton}>Enter</button>

      {/* for task 8 */}
      <AttemptsList attempts={attempts} dropAttempt={dropAttempt} />

    </form>
  );
}