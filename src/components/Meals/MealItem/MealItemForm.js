import React from 'react'
import style from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {

  const submitHandler = event => {
    event.preventDefault();

  }

  return (
    <>
      <form className={style.form} onSubmit={submitHandler}>
        <Input 
        label= 'Quantity'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
        />             {/*yahape Input.js component import karke usme value pass kiya hai */}
        <button>+Add</button>
      </form>
    </>
  )
}

export default MealItemForm;