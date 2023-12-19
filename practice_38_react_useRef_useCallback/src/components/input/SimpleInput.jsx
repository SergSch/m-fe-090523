import classes from './SimpleInput.module.css';

export default function SimpleInput( props  ) {

  return (
    <input
      className={
        `${classes.input}
         ${props.isError ? classes.errorInput : ''}
        `}
      type={props.type || 'text'}
      placeholder={props.placeholder || "Default placeholder"}
      disabled={props.disabled}
    />
  );
}