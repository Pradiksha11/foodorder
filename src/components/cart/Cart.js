import React from 'react'
import style from './Cart.module.css';

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
    }
  ];

  const cart = DUMMY_CART.map((data) => {<li> {data.name} </li>})

  return (
    <>
      {cart}
      <div className={style.total}>
      <span>Total Amount</span>
      <span>42.26</span>
      </div>

      <div className={style.actions}>
      <button className={['button--alt']}> Close </button>
      <button className={style.button}> Order </button>
      </div>
    </>
  )
}

export default Cart
