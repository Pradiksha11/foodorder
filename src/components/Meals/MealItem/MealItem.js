import React from 'react'
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

  const price = `${props.price.toFixed(3)}`;
  
  return (
    <>
     <li className={style.meal}>  {/*yahape AvailableMeal.js component se data aya hai */}
      <div>
       <h2> {props.name} </h2>
       <div className={style.description}> {props.description} </div>
       <div className={style.price}> ${price} </div>
      </div>

        <div><MealItemForm /></div>
      
    </li>
    </>
  )
}

export default MealItem;