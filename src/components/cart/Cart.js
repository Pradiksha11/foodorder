import React from 'react'
import style from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {

  const DUMMY_CART = [
    {
      id: 'c1',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'c2',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
      id: 'c3',
      name: 'Burger',
      description: 'meaty',
      price: 51.99,
    },
    {
      id: 'c4',
      name: 'Green Salad',
      description: 'Healthy',
      price: 92.49,
    }
  ];

  const cartItems = <ul className={style['cart-items']}> {DUMMY_CART.map((data) => (<li key={data.id}>{data.name}</li>))} </ul>

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
      <span>Total Amount</span>
      <span>cart.js se value aya hai 42.34</span>
      </div>

      <div className={style.actions}>
      <button className={['button--alt']}> Close </button>
      <button className={style.button}> Order </button>
      </div>
    </Modal>
  )
}

export default Cart;
