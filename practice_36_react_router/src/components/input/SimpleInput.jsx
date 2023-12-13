import { useState } from 'react';
import classes from './SimpleInput.module.css';

export default function SimpleInput( props  ) {

  const [theme, setTheme] = useState('light');

  return (
    <input
      className={
        `${classes.input}
         ${props.isError ? classes.errorInput : ''}
         ${props.size ? classes[props.size + 'Input'] : ''}
         ${classes[theme + 'Input']}
        `}
      type="text"
      placeholder="Default placeholder"
      disabled={props.disabled}
    />
  );
}