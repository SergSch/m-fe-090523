import React, {useEffect} from "react";

import classes from './RegisterForm.module.css';
import AttemptsList from "./AttemptsList";

export default function RegisterForm( props ) {

  /* FOR TASK 8 */
  /*
  const [attempts, setAttempts] = useState( [] );

  const dropAttempt = (datetime) => {
    const filteredList = attempts.filter((attempt) => attempt.datetime !== datetime);
    setAttempts(filteredList);
  };

  const addAttempt = (login, pwd) => {
      const attempt = { login, pwd, datetime: new Date().getTime()};
      setAttempts( old => [...old, attempt] );
  }
  */

  return (
    <form className={classes.contactsFormContainer}>
      <input
        placeholder="Login"
        type="text"
        className={classes.contactsInput}
      />

      <input
        placeholder="Password"
        type="password"
        className={classes.contactsInput}
      />

      <input
        placeholder="Email"
        type="text"
        className={classes.contactsInput}
      />

      <button className={classes.submitButton}>Enter</button>

      {/* for task 8 */}
      { /*
        <AttemptsList attempts={attempts} dropAttempt={dropAttempt} />
      */ }
    </form>
  );
}