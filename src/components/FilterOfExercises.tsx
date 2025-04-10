import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import background from '../styles/personal-fit-background.jpg';
import "../styles/FilterOfExercises.css";
import { Exercise } from "../entities";
import {removeSelected} from "./filterOfExercisesSlice";
import store from "../app/store";
import { listOfWorkouts } from "../data/listOfExercises";
import { useSelector } from "react-redux";

type filterOfExercisesProps = {
    finalWorkoutSetup: (finalWorkout:Exercise[]) => void,
    selectedTypeSetup: (type: "interval" | "opakovania") => void
}

function FilterOfExercises() {

    const context: filterOfExercisesProps = useOutletContext();
    const navigate = useNavigate();
    const selectedId = useSelector(() => store.getState().filterOfExercises.selected);
    const selectedType = useSelector(() => store.getState().filterOfExercises.selectedType);

    function finalWorkoutCreate() {
        let finalWorkout: Exercise[] = [];
        for (let item of selectedId) {
            listOfWorkouts.forEach(exercise => {
                if (item === exercise.id) {
                    finalWorkout.push(exercise)
                }
            })
        }
        return finalWorkout
    }

    function generateHandle() {
        context.finalWorkoutSetup(finalWorkoutCreate());
        navigate('../ownworkout')
    }

    function removeHandle(selected:number) {
        const selectedIndex = selectedId.indexOf(selected)
        store.dispatch(removeSelected({selected, selectedIndex}))
    }

    return (
        <div className="full-size-container"> 
            <div className="filter-container">
                <div className="menu">
                <div className="overlay"></div>
                    <form className="search">
                        <input type='text' name='text' placeholder="Vyhľadať cvik..."/>
                        <input type="submit" className='login' value='Hľadať'/>
                    </form>
                    <form className="filter">
                        <h2>Filter</h2>
                        <div className="selection">
                            <h3>Cieľová partia</h3>
                            <div className="selectionButtons">
                                <div className="inputLabel">
                                    <input id='ruky' type="checkbox"/>
                                    <label htmlFor="ruky" className="button">Ruky</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='nohy' type="checkbox"/>
                                    <label htmlFor="nohy" className="button">Nohy</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='brucho' type="checkbox"/>
                                    <label htmlFor="brucho" className="button">Brucho</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='zadok' type="checkbox"/>
                                    <label htmlFor="zadok" className="button">Zadok</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='kondička' type="checkbox"/>
                                    <label htmlFor="kondička" className="button">Kondička</label>
                                </div>
                            </div>
                        </div>
                        <div className="selection">
                            <h3>Obtiažnosť</h3>
                            <div className="selectionButtons">
                                <div className="inputLabel">
                                    <input id='ľahké' type="checkbox"/>
                                    <label htmlFor="ľahké" className="button">Ľahké</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='stredné' type="checkbox"/>
                                    <label htmlFor="stredné" className="button">Stredné</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='ťažké' type="checkbox"/>
                                    <label htmlFor="ťažké" className="button">Ťažké</label>
                                </div>
                            </div>
                        </div>
                        <div className="selection">
                            <h3>Pomôcky</h3>
                            <div className="selectionButtons">
                                <div className="inputLabel">
                                    <input id='činky' type="checkbox"/>
                                    <label htmlFor="činky" className="button">Činky</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='kettlebell' type="checkbox"/>
                                    <label htmlFor="ketlebell" className="button">Kettlebell</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='expander' type="checkbox"/>
                                    <label htmlFor="expander" className="button">Expander</label>
                                </div>
                                <div className="inputLabel">
                                    <input id='slider' type="checkbox"/>
                                    <label htmlFor="slider" className="button">Slider</label>
                                </div>
                            </div>
                        </div>
                        <button className="login">Filtrovať</button>
                    </form>
                </div>
            </div>
            <div className="exercise-preview">
                <div className="intendation"></div>
                <div className="personal-fit" style={{backgroundImage: `url(${background})`}}>
                    <div className="overlay"></div>
                    <div className="fit">
                        <h2>Moje virtuálne fitko</h2>
                    </div>
                    <div className="selectedExercises">
                        {selectedId && finalWorkoutCreate().map((exercise) => {
                            return (
                                <div className="selected-exercise" key={exercise.id}>
                                    <img alt={exercise.name} src={exercise.imageURL}/>
                                    <div className="half">
                                        <button className="close remove" onClick={() => removeHandle(exercise.id)}>X</button>
                                        <h4>{exercise.name}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="login" id="createExercise" onClick={generateHandle}>Vytvoriť cvičenie</button>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default FilterOfExercises;
