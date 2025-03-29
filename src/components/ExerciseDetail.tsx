import { useNavigate, useParams } from "react-router-dom";
import { listOfWorkouts } from "../data/listOfExercises";
import { useOutletContext } from "react-router-dom";
import { Exercise } from "../entities";
import { useState } from "react";
import background from '../styles/detail-background.jpg';
import '../styles/ExerciseDetail.css';

function ExerciseDetail() {

    const params = useParams();
    const {exercisename} = params;
    const navigate = useNavigate();

    const context:{addSelected:(exercise:Exercise, type: string)=> void} = useOutletContext();
    const [selectedType, setSelectedType] = useState("interval");

    const actualExercise =  listOfWorkouts.filter(exercise => {
        return exercise.name === exercisename
    })  
    
    const exercise = (actualExercise[0])

    function addExerciseHandle(exercise:Exercise) {
        context.addSelected(exercise, selectedType);
        setSelectedType("interval")
    }
        
    function inputChangeHandle(event:React.ChangeEvent<HTMLSelectElement>) {
        setSelectedType(event.target.value);
    }

    return (
        <div className="exercises-container">
            <div className="choice-column back" style={{backgroundImage:`url(${background})`}}>
            <div className="overlay zak"></div>
                <div className="detail">
                    <div className="image-button">
                        <img alt = {exercise.name} src={exercise.imageURL}/>
                        <button className="login" onClick={() => navigate(-1)}>Späť</button>
                    </div>
                    <div className="detail-instruction">
                        <h2>{exercise.name}</h2>
                        <p className="short">
                            {exercise.description}
                        </p>
                        <p className="long">
                            {exercise.detail}
                        </p>
                        <p className="bold">Cieľová partia: <span>{exercise.bodyPart.join(', ')}</span></p>
                        <p className="bold">Obtiažnosť: <span>{exercise.difficulty}</span></p>
                        {exercise.equipment && <p className="bold">Pomôcky: <span>{exercise.equipment}</span></p>}
                        <div className="lastrow">
                            <label htmlFor={exercise.name}>Vyberte variantu</label>
                            <select name={exercise.name} id={exercise.name} disabled={!exercise.repeat}  onChange={inputChangeHandle} defaultValue={"interval"}>
                                <option value='interval'>Intervaly</option>
                                <option value='opakovania'>Opakovania</option>
                            </select>
                            <input className='login' type="submit" value='Pridať cvičenie' onClick={() => addExerciseHandle(exercise)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExerciseDetail;