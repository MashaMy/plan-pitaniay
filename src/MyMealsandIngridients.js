const MyMealsandIngridients = ({selectedDay, updateDay}) => {

    const editMyMeal = (myImput, value) => {
        updateDay ({
            ...selectedDay,
            [myImput]: value
        })
    }

if(!selectedDay) return <p>План</p>

return <div className="whole-plan">
    <div className="meal-editing">

<input
type="text"
className="myInput"
placeholder="Сегодня ..."
id="title"
value={selectedDay.title}
onChange = {(e) => editMyMeal("title", e.target.value)}
/>

<textarea
placeholder="Напиши свой план питания здесь"
id="mealForADay"
value={selectedDay.mealForADay}
onChange={(e) => editMyMeal("mealForADay", e.target.value)}
/>

<textarea
placeholder="Список ингредиентов"
id="mealForADay"
value={selectedDay.ingredients}
onChange={(e) => editMyMeal("ingredients", e.target.value)}
/>

</div>

    </div>
}

export default MyMealsandIngridients;