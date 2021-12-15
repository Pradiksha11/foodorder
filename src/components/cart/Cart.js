import React from 'react'
import { useContext } from 'react';
import style from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../components/Store/Context';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = <ul className={style['cart-items']}> {cartCtx.items.map((data) => (<li key={data.id}>{data.name}</li>))} </ul>

  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
      <span>Total Amount</span>
      <span>${totalAmount}</span>
      </div>

      <div className={style.actions}>
      <button className={['button--alt']} onClick={props.onClose} > Close </button>
      {hasItems && <button className={style.button}> Order </button>}
      </div>
    </Modal>
  )
};

export default Cart;
