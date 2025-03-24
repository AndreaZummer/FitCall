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
    }, [])
    
    function generateHandle() {
        navigate('../ownworkout')
    }

    return (
        <div className="full-size-container"> 
            <div className="filter-container">
                <div className="filter">
                    <form>
                        <input type='text' name='text'/>
                        <input type="submit" value='Hľadať'/>
                    </form>
                    <form>
                        <h3>Filtrovať</h3>
                        <div className="filterInputContainer">
                            <h4>Cieľová partia</h4>
                            <div className="filterInput">
                                <input id='ruky' type="checkbox"/>
                                <label htmlFor="ruky">Ruky</label>
                            </div>
                            <div className="filterInput">
                                <input id='nohy' type="checkbox"/>
                                <label htmlFor="nohy">Nohy</label>
                            </div>
                            <div className="filterInput">
                                <input id='brucho' type="checkbox"/>
                                <label htmlFor="brucho">Brucho</label>
                            </div>
                            <div className="filterInput">
                                <input id='zadok' type="checkbox"/>
                                <label htmlFor="zadok">Zadok</label>
                            </div>
                            <div className="filterInput">
                                <input id='kondička' type="checkbox"/>
                                <label htmlFor="kondička">Kondička</label>
                            </div>
                        </div>
                        <div className="filterInputContainer">
                            <h4>Obtiažnosť</h4>
                            <div className="filterInput">
                                <input id='ľahké' type="checkbox"/>
                                <label htmlFor="ľahké">Ľahké</label>
                            </div>
                            <div className="filterInput">
                                <input id='stredné' type="checkbox"/>
                                <label htmlFor="stredné">Stredné</label>
                            </div>
                            <div className="filterInput">
                                <input id='ťažké' type="checkbox"/>
                                <label htmlFor="ťažké">Ťažké</label>
                            </div>
                        </div>
                        <div className="filterInputContainer">
                            <h4>Pomôcky</h4>
                            <div className="filterInput">
                                <input id='činky' type="checkbox"/>
                                <label htmlFor="činky">Činky</label>
                            </div>
                            <div className="filterInput">
                                <input id='kettlebell' type="checkbox"/>
                                <label htmlFor="ketlebell">Kettlebell</label>
                            </div>
                            <div className="filterInput">
                                <input id='expander' type="checkbox"/>
                                <label htmlFor="expander">Expander</label>
                            </div>
                            <div className="filterInput">
                                <input id='slider' type="checkbox"/>
                                <label htmlFor="slider">Slider</label>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
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
                                        <button className="close" onClick={() => context.removeHandle(exercise)}>X</button>
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
