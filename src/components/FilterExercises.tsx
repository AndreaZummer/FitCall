import { useNavigate, useOutletContext } from 'react-router-dom';
import background from '../styles/filter-background.jpg';
import '../styles/FilterExercise.css';
import { useEffect, useState } from 'react';
import { listOfWorkouts } from '../data/listOfExercises';
import { workoutGenerator } from '../utilities';
import { Exercise } from '../entities';

type filterProperties = {
    finalWorkoutSetup: (modifyWorkout:Exercise[]) => void,
    intervalVsRepeatSetup: (intervalVsRepeat: "interval" | "opakovania" | null ) => void
}

function FilterExercise() {

    const context: filterProperties = useOutletContext();
    const navigate = useNavigate();
    const [bodyPart, setBodyPart] = useState<("brucho" | "ruky" | "nohy" | "zadok" | "kondička")[]>([]);
    const [difficulty, setDifficulty] = useState<("ľahké" | "stredné" | "ťažké")[]>([]);
    const [equipment, setEquipment] = useState<("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")[]>([]);
    const [time, setTime] = useState(0);
    const [typeOfExercise, setTypeOfExercise] = useState<"interval" | "opakovania" | null | undefined>(null);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    function bodyPartSetup(part: "brucho" | "ruky" | "nohy" | "zadok" | "kondička") {
        if(bodyPart.includes(part)) {
            setBodyPart(
                bodyPart.filter(item => {return  item!==part})
            )
        } else {
            setBodyPart([...bodyPart, part])
        }
    }

    function difficultySetup(diff: "ľahké" | "stredné" | "ťažké") {
        if(difficulty.includes(diff)) {
            setDifficulty(
                difficulty.filter(item => {return  item!==diff})
            )
        } else {
            setDifficulty([...difficulty, diff])
        }
    }

    function equipmentSetup(equip: "činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok") {
        if(equipment.includes(equip)) {
            setEquipment(
                equipment.filter(item => {return  item!==equip})
            )
        } else {
            setEquipment([...equipment, equip])
        }
    }
    function timeSetup(time: number) {
        setTime(time)
    }
    
    function reset() {
        setBodyPart([]);
        setDifficulty([]);
        setEquipment([]);
        setTime(0);
        setTypeOfExercise(null);
    }

    function filterWorkout() {
        const [finalWorkout, intervalVsRepeat] = workoutGenerator(listOfWorkouts,{bodyPart, time, difficulty, equipment, typeOfExercise});
        context.finalWorkoutSetup(finalWorkout);
        context.intervalVsRepeatSetup(intervalVsRepeat);
        reset();
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
                            <div className='inputLabel' onClick={() => {bodyPartSetup('ruky')}}>
                                <input id='1' type='checkbox'/>
                                <label htmlFor='1' className='button'>Ruky</label>
                            </div>
                            <div className='inputLabel' onClick={() => {bodyPartSetup('nohy')}}>
                                <input id='2' type='checkbox'/>
                                <label htmlFor='2' className='button'>Nohy</label>
                            </div>
                            <div className='inputLabel' onClick={() => {bodyPartSetup('zadok')}}>
                                <input id='3' type='checkbox'/>
                                <label htmlFor='3' className='button'>Zadok</label>
                            </div>
                            <div className='inputLabel' onClick={() => {bodyPartSetup('brucho')}}>
                                <input id='4' type='checkbox'/>
                                <label htmlFor='4' className='button'>Brucho</label>
                            </div>
                            <div className='inputLabel' onClick={() => {bodyPartSetup('kondička')}}>
                                <input id='5' type='checkbox'/>
                                <label htmlFor='5' className='button tooLong'>Kondička</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Náročnosť?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel' onClick={() => {difficultySetup('ľahké')}}>
                                <input id='6' type='checkbox'/>
                                <label htmlFor='6' className='button'>Ľahké</label>
                            </div>
                            <div className='inputLabel' onClick={() => {difficultySetup('stredné')}}>
                                <input id='7' type='checkbox'/>
                                <label htmlFor='7' className='button'>Stredné</label>
                            </div>
                            <div className='inputLabel' onClick={() => {difficultySetup('ťažké')}}>
                                <input id='8' type='checkbox'/>
                                <label htmlFor='8' className='button'>Ťažké</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Nejaké pomôcky?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel'  onClick={() => {equipmentSetup('kettlebell')}}>
                                <input id='9' type='checkbox'/>
                                <label htmlFor='9' className='button'>Kettlebell</label>
                            </div>
                            <div className='inputLabel' onClick={() => {equipmentSetup('činky')}}>
                                <input id='10' type='checkbox'/>
                                <label htmlFor='10' className='button'>Činky</label>
                            </div>
                            <div className='inputLabel' onClick={() => {equipmentSetup('slider')}}>
                                <input id="11" type='checkbox'/>
                                <label htmlFor='11' className='button'>Slider</label>
                            </div>
                            <div className='inputLabel' onClick={() => {equipmentSetup('expander')}}>
                                <input id='12' type='checkbox'/>
                                <label htmlFor='12' className='button'>Expander</label>
                            </div>
                            <div className='inputLabel' onClick={() => {equipmentSetup('bez pomôcok')}}>
                                <input id='13' type='checkbox'/>
                                <label htmlFor='13' className='button'>Bez pomôcok</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Ako dlho cvičíme?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel' onClick={() => {timeSetup(10)}}>
                                <input id='14' type='checkbox'/>
                                <label htmlFor='14' className='button'>10 minút</label>
                            </div>
                            <div className='inputLabel' onClick={() => {timeSetup(20)}}>
                                <input id='15' type='checkbox'/>
                                <label htmlFor='15' className='button'>20 minút</label>
                            </div>
                            <div className='inputLabel' onClick={() => {timeSetup(30)}}>
                                <input id='16' type='checkbox'/>
                                <label htmlFor='16' className='button'>30 minút</label>
                            </div>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Intervaly či opakovania?</h3>
                        <div className='selectionButtons'>
                            <div className='inputLabel' onClick={() => {setTypeOfExercise('interval')}}>
                                <input id='17' type='checkbox'/>
                                <label htmlFor='17' className='button'>Interval</label>
                            </div>
                            <div className='inputLabel' onClick={() => {setTypeOfExercise('opakovania')}}>
                                <input id='18' type='checkbox'/>
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