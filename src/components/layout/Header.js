import React from 'react';
import meal from '../../assets/meals.jpg';
import style from './Header.module.css';
import HeaderCartButton from '../layout/HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onOpen} />
        </header>
      <div className={style['main-image']}>
      <img src={meal} alt="meal"/>
      </div>
    </>
  )
};

export default Header;