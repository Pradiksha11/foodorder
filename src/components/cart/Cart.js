import React from 'react'
import { useState, useContext } from 'react';
import style from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../components/Store/Context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {

  const [showCheckout, setShowCheckout] = useState(false);

  const orderHandler = () => {
    setShowCheckout(true);
  }
  
  const cartCtx = useContext(CartContext);

   const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const cartRemoveItemHandler = (id) => {
      cartCtx.removeItem(id);
    };

     const cartAddItemHandler = (item) => {
       cartCtx.addItem({...item, amount: 1});
     };

const hasItems = cartCtx.items.length > 0;

       const modalbutton = (<div className={style.actions}>
      <button className={['button--alt']} onClick={props.onClose} > Close </button>
      {hasItems && <button className={style.button}  onClick={orderHandler}> Order </button>}
      </div>)

     const cartItems = (
       <ul className={style['cart-items']}> {cartCtx.items.map((data) => (
           <CartItem key={data.id}
              name={data.name} 
              amount={data.amount} 
              price={data.price} 
              onRemove={cartRemoveItemHandler.bind(null, data.id)} 
              onAdd={cartAddItemHandler.bind(null, data)}
              />    
       ))} 
       </ul>
   );
  
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
     <div className={style.total}>
     
      <span>Total Amount</span>
      <span>₹{totalAmount}</span>
      </div>
      {showCheckout && <Checkout onClick={props.onClose}/>}
      {!showCheckout && modalbutton}
    </Modal>
  )
};

export default Cart;
