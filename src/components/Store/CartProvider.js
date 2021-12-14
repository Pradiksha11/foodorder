import React from 'react';
import CartContext from './Context';

// const CartContext = createContext({
 
// });

const CartProvider = (props) => {

  const addItemToCartHandler = props => {};
  const removeItemToCartHandler = props => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem : addItemToCartHandler,
    removeItem : removeItemToCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

// eslint-disable-next-line
{/* <CartProvider> ye app.js me wrap kiya hai  */}
export default CartProvider;
