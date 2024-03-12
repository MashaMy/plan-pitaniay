const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
    return <div>
          <div>
        <h1>Недельный план по питанию</h1>
        <button className="button-add" onClick={addMeal}>Добавить</button>
          </div>
       <div>
        {mealPlans.map(({id, title, mealForADay}) => (
     <div className={`meal ${id === selectedDay ? "selected" : "default"}`}
     onClick={() => setSelectedDay(id)}
     >
          <p className="fielde">{title}</p>
          <p className="fielde">{mealForADay.substring( 0, 60 )}</p>
          <button className="button-delete" onClick={() => deleteDay(id)}>Удалить</button>
      </div>
    ))}
        </div>
    </div>

    }
    
    export default MyList;