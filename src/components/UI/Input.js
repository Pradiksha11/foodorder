import React from 'react'
import style from './Input.module.css';

const Input = (props) => {
  return (
    <>
     <div className={style.input}>  {/* yahape MealItemForm.js component se value aya hai */}
     <label > {props.label} </label>
     <input {...props.input} />
     </div>
    </>    
  )
};

export default Input;