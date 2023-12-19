import React from "react";

import classes from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';

export default function RegisterForm( props ) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  }

  const handleFormError = (error) => {
    console.log('Something went wrong!', error);
    const errorValues = Object.values(error);
    if (errorValues.length > 0) {
      const errorInput = errorValues[errorValues.length - 1];
      setTimeout( () => {
        errorInput.ref.focus();
      },100)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm, handleFormError)} className={classes.contactsFormContainer}>
      <input
        placeholder="Login" type="text"
        className={classes.contactsInput}
        {...register('login', {
          required: 'Please fill the login!',
          minLength: {
            value: 3,
            message: 'Too short!'
          },
          maxLength: {
            value: 12,
            message: 'Too long'
          }
        } )}
      />
      { errors.login && <p className={classes.errorField}>{errors.login.message}</p>}

      <input
        placeholder="Password" type="password"
        className={classes.contactsInput}
        {...register('passwd', { required: 'Please fill the password!' } )}
      />
      { errors.passwd && <p className={classes.errorField}>{errors.passwd.message}</p>}

      <input
        placeholder="Email" type="text"
        className={classes.contactsInput}
        {...register('email', {
          required: 'I do not believe that you don\'t have email!',
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Please enter valid email!'
          }
        } )}
      />
      { errors.email && <p className={classes.errorField}>{errors.email.message}</p>}

      <button className={classes.submitButton}>Enter</button>
    </form>
  );
}