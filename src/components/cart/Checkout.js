import React from 'react'
import style from './Checkout.module.css';

const Checkout = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Thankyou! your Order is getting ready soon it will get delivered to you");
  }

  return (
    <>
    <form className={style.form} onSubmit={submitHandler}>
    <div className={style.control}>
    <label htmlFor='name'>Your Name</label>
    <input type='text' id='name' />
    </div>
    <div className={style.control}>
    <label htmlFor='email'>email</label>
    <input type='text' id='email' />
    </div>
    <div className={style.control}>
    <label htmlFor='contact'>contact</label>
    <input type='text' id='contact' />
    </div>
    <div className={style.actions}>
     <button onClick={props.onClick}>cancel</button>
     <button className={style.submit}>order</button>
    </div>
    </form>
    </>
  )
};

export default Checkout;
