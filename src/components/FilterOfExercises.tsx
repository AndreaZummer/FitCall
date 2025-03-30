import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import background from '../styles/personal-fit-background.jpg';
import "../styles/FilterOfExercises.css";
import { Exercise } from "../entities";
import { useState } from "react";

type filterOfExercisesProps = {
    finalWorkoutSetup: (finalWorkout:Exercise[]) => void,
    selectedTypeSetup: (type: string) => void
}

function FilterOfExercises() {

    const context: filterOfExercisesProps = useOutletContext();
    const navigate = useNavigate();
    const [selected, setSelected] = useState<Exercise[]>([]);

    function addSelected(exercise:Exercise, type: string) {
        setSelected([...selected, exercise]);
        context.selectedTypeSetup(type)
    }

    function removeHandle(removedexercise:Exercise) {
        setSelected(selected.filter(exercise => {
            return removedexercise !== exercise
        }))
    }

    const childContext = {addSelected:addSelected}

    function generateHandle() {
        context.finalWorkoutSetup(selected);
        navigate('../ownworkout')
    }

    return (
        <div className="full-size-container"> 
            
            <div className="exercise-preview">
                <div className="intendation"></div>
                <div className="personal-fit" style={{backgroundImage: `url(${background})`}}>
                    <div className="overlay"></div>
                    <div className="fit">
                        <h2>Moje virtuálne fitko</h2>
                    </div>
                    <div className="selectedExercises">
                        {selected && selected.map((exercise) => {
                            return (
                                <div className="selected-exercise" key={exercise.id}>
                                    <img alt={exercise.name} src={exercise.imageURL}/>
                                    <div className="half">
                                        <button className="close remove" onClick={() => removeHandle(exercise)}>X</button>
                                        <h4>{exercise.name}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="login" id="createExercise" onClick={generateHandle}>Vytvoriť cvičenie</button>
                </div>
                <Outlet context={childContext}/>
            </div>
        </div>
    )
}

export default FilterOfExercises;
