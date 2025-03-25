import '../styles/WorkoutPage.css';
import { Exercise } from "../entities";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { workoutGenerator } from "../utilities";
import { listOfWorkouts } from "../data/listOfExercises";
import { useEffect, useState } from "react";
import background from '../styles/group-pilates-instructors-exercising-reformers.jpg';

type workoutPageProperties = {
    bodyPartSelected?: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička") [];
    timeSelected?: number;
    difficultySelected?: ("ľahké" | "stredné" | "ťažké")[]; 
    equipmentSelected?: ("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")[];
    intervalOrRepeatSelected?: "interval" | "opakovania" | null | undefined;
    reset: () => void;
    selected: Exercise[];
    selectedType: string[];
    resetSelectedType: () => void
}

function WorkoutPage() {

    const context: workoutPageProperties = useOutletContext();
    let bodyPart = context.bodyPartSelected;
    let time = context.timeSelected;
    let difficulty = context.difficultySelected;
    let equipment = context.equipmentSelected;
    let typeOfExercise = context.intervalOrRepeatSelected;
    
    const params = useParams();
    const {choice} = params;
    const {username} = params;
    const navigate = useNavigate();
    const [finalWorkout, setFinalWorkout] = useState<Exercise[]> ([]);
    const [intervalVsRepeat, setIntervalVsRepeat] = useState<"interval" | "opakovania" | null> (null);
    const selectedType = context.selectedType;


    useEffect(() => {
        
        window.scrollTo(0,0);
        // Surprise workout
        if (choice === "surpriseworkout") {
            const [finalWorkout, intervalVsRepeat] = workoutGenerator(listOfWorkouts,{});
            setFinalWorkout(finalWorkout);
            setIntervalVsRepeat(intervalVsRepeat);
        } 

        // Filtered workout
        if (choice === "filteredworkout") {
            const [finalWorkout, intervalVsRepeat] = workoutGenerator(listOfWorkouts,{bodyPart, time, difficulty, equipment, typeOfExercise});
            setFinalWorkout(finalWorkout);
            setIntervalVsRepeat(intervalVsRepeat);
            setTimeout(() => context.reset(), 1000)
        }

        // Choosen workout 
        if (choice === "ownworkout") {
            const finalWorkout = context.selected;
            setFinalWorkout(finalWorkout);
            setTimeout(() => context.reset(), 1000)
        }
        return () => context.resetSelectedType()
    },[choice]);


    function deleteExercise(indexToDelete: number) {
        setFinalWorkout(workouts => workouts.filter((workout, index) => { return index!==indexToDelete}))
    }

    function typeOfExerciseHandle(index: number) {
        if (selectedType.length > 0) { 
            if (selectedType[index] === 'interval') {
                return <span className="exerciseInter">interval</span>
            } else {return  <span className="exerciseRepeat">opakovania</span>}
        } else {
            return <span className="exerciseInterval">{intervalVsRepeat}</span>
        }
    }

    function homeRedirect() {
        navigate(`/${username}`)
    }

    return (
        <div className="home">
            <div className="choiceColumn" id='single' style={{backgroundImage: `url(${background})` }}>
                <div className="overlay"></div>
                <h2>Tvoj dnešný tréning</h2>
                <div className="containerForGenerated" >
                    {finalWorkout.map((exercise,index) => {
                        return (
                            <div key={index} className={`generatedDetail`}>
                                <img alt ={exercise.name} src={exercise.imageURL}/>
                                <div className='container-query'>
                                    <span className="exerciseName">{exercise.name}</span>
                                    <div className='container-query-detail'>
                                        <span className="exerciseBodyPart">{exercise.bodyPart.length>1? exercise.bodyPart.join(', ') : exercise.bodyPart}</span>
                                        <span className="exerciseEquipment">{exercise.equipment}</span>
                                        <span className="exerciseDifficulty">{exercise.difficulty}</span>
                                    </div>
                                    {typeOfExerciseHandle(index)}
                                    <span className="exerciseSerie">{exercise.series} série</span>
                                    {intervalVsRepeat==='interval'? <span className="exerciseInter">{exercise.interval} s</span> : <span className="exerciseRepeat">{exercise.repeat}</span>}
                                    <button className="deleteExercise" onClick={() => deleteExercise(index)}>X</button>
                                </div>
                            </div>    
                        )
                    })}
                </div>
                <button id='finish' className="login" onClick={homeRedirect}>Skončiť tréning</button>
            </div>
        </div>
    )
}

export default WorkoutPage;