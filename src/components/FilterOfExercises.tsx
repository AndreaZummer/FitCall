import { createSearchParams, Outlet, useNavigate, useOutletContext, useParams} from "react-router-dom";
import background from '../styles/personal-fit-background.jpg';
import "../styles/FilterOfExercises.css";
import { Exercise } from "../entities";
import {removeSelected} from "./filterOfExercisesSlice";
import store from "../app/store";
import { listOfWorkouts } from "../data/listOfExercises";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, deleteSearch } from "./searchSlice";
import {addBodyPart, addDifficulty, addEquipment, deleteBodyPart, deleteDifficulty, deleteEquipment, deleteAll} from "./filterResultsSlice";

type filterOfExercisesProps = {
    finalWorkoutSetup: (finalWorkout:Exercise[]) => void,
    selectedTypeSetup: (type: "interval" | "opakovania") => void
}

function FilterOfExercises() {

    const context: filterOfExercisesProps = useOutletContext();
    const navigate = useNavigate();
    const params = useParams();
    const {username} = params;
    const selectedId = useSelector(() => store.getState().filterOfExercises.selected);
    const searchTerm = useSelector(() => store.getState().search);
    const dispatch = useDispatch();
    const {bodyPartFilter, difficultyFilter, equipmentFilter} = useSelector(() => store.getState().filterResults);

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
        dispatch(removeSelected({selected, selectedIndex}))
    }

    function searchHandle(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const searchQueryParams = {
            'search': searchTerm
        };
        const searchQueryString = createSearchParams(searchQueryParams);
        navigate({
            pathname:`/${username}/listofexercises`,
            search: `?${searchQueryString}`
        })
        dispatch(deleteSearch())
    }

    function searchChangeHandle(event:React.ChangeEvent<HTMLInputElement>) {
        store.dispatch(setSearch(event.target.value))
    }

    function bodyPartSetup(part: "brucho" | "ruky" | "nohy" | "zadok" | "kondička") {
            if(bodyPartFilter.includes(part)) {
                dispatch(deleteBodyPart(part))
            } else {
                dispatch(addBodyPart(part))
            }
        }
    
        function difficultySetup(diff: "ľahké" | "stredné" | "ťažké") {
            if(difficultyFilter.includes(diff)) {
                dispatch(deleteDifficulty(diff))
            } else {
                dispatch(addDifficulty(diff))
            }
        }
    
        function equipmentSetup(equip: "činky" | "expander" | "kettlebell" | "slider") {
            if(equipmentFilter.includes(equip)) {
                dispatch(deleteEquipment(equip))
            } else {
                dispatch(addEquipment(equip))
            }
        }

    function filterHandle() {
        // event.preventDefault();
        const searchQueryParams = {
            bodyPart: bodyPartFilter,
            difficulty: difficultyFilter,
            equipment: equipmentFilter,
        };
        const searchQueryString = createSearchParams(searchQueryParams).toString();
        navigate({
            pathname:`/${username}/listofexercises`,
            search: `?${searchQueryString}`
        })
        dispatch(deleteAll())
    }

    function prevent(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    function filterDeleteHandle() {
        dispatch(deleteAll())
        navigate(`/${username}/listofexercises`)
    }
        

    function filterDisplay() {
        return (
            <div className="full-size-container"> 
                <div className="filter-container">
                    <div className="intendation"></div>
                    <div className="menu">
                        <div className="overlay"></div>
                            <form className="search" onSubmit={searchHandle}>
                                <input type='text' name='text' placeholder="Vyhľadať cvik..." onChange={searchChangeHandle} value={searchTerm}/>
                                <input type="submit" className='login' value='Hľadať'/>
                            </form>
                            <form className="filter" onSubmit={prevent}>
                                <h2>Filter</h2>
                                <div className="selection firstSelection">
                                    <h3>Cieľová partia</h3>
                                    <div className="selectionButtons">
                                        <div className="inputLabel">
                                            <input id='ruky' type="checkbox" onChange={() => {bodyPartSetup('ruky')}} checked={bodyPartFilter.includes('ruky')}/>
                                            <label htmlFor="ruky" className="button">Ruky</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='nohy' type="checkbox" onChange={() => {bodyPartSetup('nohy')}} checked={bodyPartFilter.includes('nohy')}/>
                                            <label htmlFor="nohy" className="button">Nohy</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='brucho' type="checkbox" onChange={() => {bodyPartSetup('brucho')}} checked={bodyPartFilter.includes('brucho')}/>
                                            <label htmlFor="brucho" className="button">Brucho</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='zadok' type="checkbox" onChange={() => {bodyPartSetup('zadok')}} checked={bodyPartFilter.includes('zadok')}/>
                                            <label htmlFor="zadok" className="button">Zadok</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='kondička' type="checkbox" onChange={() => {bodyPartSetup('kondička')}} checked={bodyPartFilter.includes('kondička')}/>
                                            <label htmlFor="kondička" className="button">Kondička</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="selection">
                                    <h3>Obtiažnosť</h3>
                                    <div className="selectionButtons">
                                        <div className="inputLabel">
                                            <input id='ľahké' type="checkbox" onChange={() => {difficultySetup('ľahké')}} checked={difficultyFilter.includes('ľahké')}/>
                                            <label htmlFor="ľahké" className="button">Ľahké</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='stredné' type="checkbox" onChange={() => {difficultySetup('stredné')}} checked={difficultyFilter.includes('stredné')}/>
                                            <label htmlFor="stredné" className="button">Stredné</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='ťažké' type="checkbox" onChange={() => {difficultySetup('ťažké')}}  checked={difficultyFilter.includes('ťažké')}/>
                                            <label htmlFor="ťažké" className="button">Ťažké</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="selection">
                                    <h3>Pomôcky</h3>
                                    <div className="selectionButtons">
                                        <div className="inputLabel">
                                            <input id='činky' type="checkbox" onChange={() => {equipmentSetup('činky')}} checked={equipmentFilter.includes('činky')}/>
                                            <label htmlFor="činky" className="button">Činky</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='kettlebell' type="checkbox" onChange={() => {equipmentSetup('kettlebell')}} checked={equipmentFilter.includes('kettlebell')}/>
                                            <label htmlFor="kettlebell" className="button">Kettlebell</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='expander' type="checkbox" onChange={() => {equipmentSetup('expander')}} checked={equipmentFilter.includes('expander')}/>
                                            <label htmlFor="expander" className="button">Expander</label>
                                        </div>
                                        <div className="inputLabel">
                                            <input id='slider' type="checkbox" onChange={() => {equipmentSetup('slider')}} checked={equipmentFilter.includes('slider')}/>
                                            <label htmlFor="slider" className="button">Slider</label>
                                        </div>
                                    </div>
                                </div>
                                <button className="login" id="filteration" onClick={()=> filterHandle()}>Filtrovať</button>
                                <button className="login" id="deleteFilter" onClick={()=> filterDeleteHandle()}>Zmazať filter</button>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
    
    return (
        <div className="full-size-container">
            <div className="filterDefault">
                {filterDisplay()}
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
                <div className="filterMedia">
                    {filterDisplay()}
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default FilterOfExercises;
