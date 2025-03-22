import { listOfWorkouts } from "../data/listOfExercises";
import "../styles/ListOfExercises.css";
import background from '../styles/pexels-leonardho-1717096.jpg';

function ListOfExercises() {
    return (
        <div className="exercises-container">
            <div className="choice-column back" style={{backgroundImage:`url(${background})`}}>
            <div className="overlay zak"></div>
                <div className="display-container">
                    {listOfWorkouts.map((exercise, index) => {
                        return (
                            index < 12 && (
                                <div className="exercise-container">
                                    <div className="firstrow">
                                        <img alt={exercise.name} src={exercise.imageURL}/>
                                        <div className="popis">
                                            <span>{exercise.difficulty}</span>
                                            <span id='equip'>{exercise.equipment}</span>
                                        </div>
                                    </div>
                                        <h3>{exercise.name}</h3>
                                        <p>{exercise.description}</p>
                                        <div className="lastrow">
                                            <label htmlFor={exercise.name}>Vyberte variantu</label>
                                            <select name={exercise.name} id={exercise.name} disabled={!exercise.repeat}>
                                                <option value='Intervaly'>Intervaly</option>
                                                <option value='Opakovania'>Opakovania</option>
                                            </select>
                                            <input className='login' type="submit" value='Pridať cvičenie'/>
                                        </div>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListOfExercises;