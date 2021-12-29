import React, { useState, useEffect } from 'react';
import style from './AvailableMeal.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeal = () => {
  const [Meals, setMeals] = useState([]);

useEffect(() => {
const fetchMeals = async() => {
  const response = await fetch('https://food-react-app-f2766-default-rtdb.firebaseio.com/meals.json');
  const data = await response.json();
  const loadedMeals = [];
  for(const key in data) {
    loadedMeals.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price,
    });
  }
  setMeals(loadedMeals);
};
  fetchMeals();
}, []);

  const mealsList = Meals.map((val) => (
    <MealItem id={val.id}
            key={val.id}
            name={val.name}
            description={val.description}
            price={val.price}
     />
  ));
  
  return (
    <>
     <section className={style.meals}>
     <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
    </>
  )
};

export default AvailableMeal;
