import React from 'react'
import style from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(3)}`;
  return (
    <>
    <li className={style.meal}>
      <div>
       <h2> {props.name} </h2>
       <div className={style.description}> {props.description} </div>
       <div className={style.price}> {price} </div>
      </div>

     <div></div>
      
    </li>
    </>
  )
}

export default MealItem;