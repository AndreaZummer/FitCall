import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import background from '../styles/personal-fit-background.jpg';
import "../styles/FilterOfExercises.css";
import { Exercise } from "../entities";
import { useEffect } from "react";

function FilterOfExercises() {

    const navigate = useNavigate();
    const context:{selected:Exercise[], removeHandle: (exercise:Exercise) => void, addSelected:(exercise:Exercise, type:string) => void, resetSelectedType: () => void} = useOutletContext();

    
    useEffect(() => {
        context.resetSelectedType()
        // eslint-disable-next-line
    }, [])

    function generateHandle() {
        navigate('../ownworkout')
    }

    return (
        <div className="full-size-container"> 
            
            <div className="exercise-preview">
                <div className="intendation"></div>
                <div className="personal-fit" style={{backgroundImage: `url(${background})`}}>
                    <div className="overlay"></div>
                    <h2>Moje virtuálne fitko</h2>
                    <div className="selectedExercises">
                        {context.selected && context.selected.map((exercise) => {
                            return (
                                <div className="selected-exercise" key={exercise.id}>
                                    <img alt={exercise.name} src={exercise.imageURL}/>
                                    <div className="half">
                                        <button className="close remove" onClick={() => context.removeHandle(exercise)}>X</button>
                                        <h4>{exercise.name}</h4>
                                    </div>
                                </div>
                            )
                        }
                        )
                        }
                    </div>
                    <button className="login" id="createExercise" onClick={generateHandle}>Vytvoriť cvičenie</button>
                </div>
                <Outlet context={context}/>
            </div>
        </div>
    )
}

export default FilterOfExercises;
