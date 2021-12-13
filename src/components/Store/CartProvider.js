import React from 'react'
import CartContext from './CartContext';

const CartProvider = (props) => {

  const addItemToCartHandler = props => {};
  const removeItemToCartHandler = props => {};

    const cartContext = () => {
    items: [];
    totalAmount: 0,
    addItems = {addItemToCartHandler},
    removeItem = {removeItemToCartHandler}
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;
