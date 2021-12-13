import React from 'react';
import CartIcon from '../cart/CartIcon';
import style from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
      <CartIcon />
      </span>
      <span>Cart</span>
      <span className={style.badge}> 5 </span>
    </button>
  )
};

export default HeaderCartButton;
