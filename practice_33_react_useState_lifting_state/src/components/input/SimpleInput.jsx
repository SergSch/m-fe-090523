import classes from './SimpleInput.module.css';

export default function SimpleInput( props  ) {

  return (
    <input
      className={
        `${classes.input}
         ${props.isError ? classes.errorInput : ''}
         ${props.size ? classes[props.size + 'Input'] : ''}
        `}
      type="text"
      placeholder="Default placeholder"
      disabled={props.disabled}
    />
  );
}