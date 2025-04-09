import { useNavigate, useOutletContext} from 'react-router-dom';
import background from '../styles/filter-background.jpg';
import store from '../app/store';
import '../styles/FilterExercise.css';
import { useEffect } from 'react';
import { listOfWorkouts } from '../data/listOfExercises';
import { workoutGenerator } from '../utilities';
import { useDispatch, useSelector } from 'react-redux';
import { addBodyPart, addDifficulty, addEquipment, addTime, addTypeOfExercise, deleteBodyPart, deleteDifficulty, deleteEquipment} from './filterExerciseSlice';
import { Exercise } from '../entities';

type filterProperties = {
    finalWorkoutSetup: (modifyWorkout:Exercise[]) => void,
    intervalVsRepeatSetup: (intervalVsRepeat: "interval" | "opakovania" | null ) => void
}

function FilterExercise() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const context: filterProperties = useOutletContext();
    const {bodyPart, difficulty, equipment, time, typeOfExercise} = useSelector(() => store.getState().filterExercise);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    function bodyPartSetup(part: "brucho" | "ruky" | "nohy" | "zadok" | "kondička") {
        if(bodyPart.includes(part)) {
            dispatch(deleteBodyPart(part))
        } else {
            dispatch(addBodyPart(part))
        }
    }

    function difficultySetup(diff: "ľahké" | "stredné" | "ťažké") {
        if(difficulty.includes(diff)) {
            dispatch(deleteDifficulty(diff))
        } else {
            dispatch(addDifficulty(diff))
        }
    }

    function equipmentSetup(equip: "činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok") {
        if(equipment.includes(equip)) {
            dispatch(deleteEquipment(equip))
        } else {
            dispatch(addEquipment(equip))
        }
    }

    function filterWorkout() {
        const [finalWorkout, intervalVsRepeat] = workoutGenerator(listOfWorkouts,{bodyPart, time, difficulty, equipment, typeOfExercise});
        context.finalWorkoutSetup(finalWorkout);
        context.intervalVsRepeatSetup(intervalVsRepeat);
        navigate('../filteredworkout')
    }

    return (
        <div className="home">
            <div className="choiceColumn" id='filter' style={{backgroundImage: `url(${background})` }}>
                <div className="overlay"></div>
                <h2>Čo to dnes bude?</h2>
                <div className='menu'>
                    <div className='selection'>
                        <h3>Čo dnes cvičíme?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel' >
                                <input id='1' type='checkbox' onChange={() => {bodyPartSetup('ruky')}}/>
                                <label htmlFor='1' className='button'>Ruky</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='2' type='checkbox' onChange={() => {bodyPartSetup('nohy')}}/>
                                <label htmlFor='2' className='button'>Nohy</label>
                            </div>
                            <div className='inputLabel' >
                                <input id='3' type='checkbox' onChange={() => {bodyPartSetup('zadok')}}/>
                                <label htmlFor='3' className='button'>Zadok</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='4' type='checkbox' onChange={() => {bodyPartSetup('brucho')}}/>
                                <label htmlFor='4' className='button'>Brucho</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='5' type='checkbox'onChange={() => {bodyPartSetup('kondička')}}/>
                                <label htmlFor='5' className='button tooLong'>Kondička</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Náročnosť?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel'>
                                <input id='6' type='checkbox' onChange={() => {difficultySetup('ľahké')}}/>
                                <label htmlFor='6' className='button'>Ľahké</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='7' type='checkbox' onChange={() => {difficultySetup('stredné')}}/>
                                <label htmlFor='7' className='button'>Stredné</label>
                            </div>
                            <div className='inputLabel' >
                                <input id='8' type='checkbox' onChange={() => {difficultySetup('ťažké')}}/>
                                <label htmlFor='8' className='button'>Ťažké</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Nejaké pomôcky?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel'>
                                <input id='9' type='checkbox' onChange={() => {equipmentSetup('kettlebell')}}/>
                                <label htmlFor='9' className='button'>Kettlebell</label>
                            </div>
                            <div className='inputLabel' >
                                <input id='10' type='checkbox'onChange={() => {equipmentSetup('činky')}}/>
                                <label htmlFor='10' className='button'>Činky</label>
                            </div>
                            <div className='inputLabel' >
                                <input id="11" type='checkbox' onChange={() => {equipmentSetup('slider')}}/>
                                <label htmlFor='11' className='button'>Slider</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='12' type='checkbox' onChange={() => {equipmentSetup('expander')}}/>
                                <label htmlFor='12' className='button'>Expander</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='13' type='checkbox' onClick={() => {equipmentSetup('bez pomôcok')}}/>
                                <label htmlFor='13' className='button'>Bez pomôcok</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Ako dlho cvičíme?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel' >
                                <input id='14' type='checkbox' onChange={() => {dispatch(addTime(10))}}/>
                                <label htmlFor='14' className='button'>10 minút</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='15' type='checkbox' onChange={() => {dispatch(addTime(20))}}/>
                                <label htmlFor='15' className='button'>20 minút</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='16' type='checkbox' onChange={() => {dispatch(addTime(30))}}/>
                                <label htmlFor='16' className='button'>30 minút</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Intervaly či opakovania?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel' >
                                <input id='17' type='checkbox' onChange={() => {dispatch(addTypeOfExercise('interval'))}}/>
                                <label htmlFor='17' className='button'>Interval</label>
                            </div>
                            <div className='inputLabel'>
                                <input id='18' type='checkbox' onChange={() => {dispatch(addTypeOfExercise('opakovania'))}}/>
                                <label htmlFor='18' className='button'>Opakovania</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button id='filterOut' className="login" onClick={filterWorkout}>Vytvoriť tréning</button>
            </div>
        </div>
    )
}

export default FilterExercise;