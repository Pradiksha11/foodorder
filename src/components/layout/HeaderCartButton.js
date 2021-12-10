import React from 'react';
import CartIcon from '../cart/CartIcon';
import style from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
      <CartIcon />
      </span>
      <span>Cart</span>
      <span className={style.badge}> 5 </span>
    </button>
  )
}

export default HeaderCartButton;
