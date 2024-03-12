import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsandIngridients from './MyMealsandIngridients';
import { v4 as uuid } from 'uuid';


function App() {

  const [mealPlans, setMealPlans ] = useState (
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState (false);

  useEffect (() => {
  localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

const addMeal = () => {
const newMeal = {
  title: "Сегодня ...",
  id: uuid(),
  mealForADay:"",
  ingredients:""
}
setMealPlans([newMeal, ...mealPlans]) 
  console.log (newMeal)
}

const deleteDay = (mealId) => {
  setMealPlans(mealPlans.filter(({id}) => id !== mealId))
}

const updateDay = (myUpdateMeal) => {
const updateMeal = mealPlans.map((mealPlan) => {
  if (mealPlan.id === myUpdateMeal.id) {
    return myUpdateMeal;
  }
  return mealPlan;
})
setMealPlans(updateMeal)
}

const getActiveMeal = () => {
  return mealPlans.find(({id})=> id === selectedDay)
}

  return (
    <div className='App'>
      <MyList 
      mealPlans = {mealPlans}  
      addMeal={addMeal} 
      deleteDay={deleteDay}
      selectedDay = {selectedDay}
      setSelectedDay = {setSelectedDay}
      />
      <MyMealsandIngridients
      selectedDay = {getActiveMeal()}
      updateDay = {updateDay}
      />
      <button></button>
    </div>
  );
}

export default App;
