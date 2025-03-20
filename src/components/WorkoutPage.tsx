/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./Header";
import Footer from "./Footer";
import '../styles/WorkoutPage.css';
import { Exercise } from "../entities";
import { useNavigate, useParams } from "react-router-dom";
import { workoutGenerator } from "../utilities";
import { listOfWorkouts } from "../data/listOfExercises";
import { useEffect, useState } from "react";
import background from '../styles/group-pilates-instructors-exercising-reformers.jpg';

function WorkoutPage() {

    const params = useParams();
    const {choice} = params;
    const {username} = params;
    const navigate = useNavigate();
    const [finalWorkout, setFinalWorkout] = useState<Exercise[]> ([]);
    const [intervalVsRepeat, setIntervalVsRepeat] = useState<"interval" | "opakovania" | null> (null);

    useEffect(() => {
        
        window.scrollTo(0,0);
        // Surprise workout
        if (choice === "surpriseworkout") {
            const [finalWorkout, intervalVsRepeat] = workoutGenerator(listOfWorkouts,{});
            setFinalWorkout(finalWorkout);
            setIntervalVsRepeat(intervalVsRepeat);
        }
    },[params]);

    function deleteExercise(indexToDelete: number) {
        setFinalWorkout(workouts => workouts.filter((workout, index) => { return index!==indexToDelete}))
    }

    function homeRedirect() {
        navigate(`../${username}`)
    }

    return (
    <div className="landing">
        <main>
            <Header/>
            <div className="home">
                <div className="choiceColumn" id='single' style={{backgroundImage: `url(${background})` }}>
                    <div className="overlay"></div>
                    <h2>Tvoj dnešný tréning</h2>
                    <div className="containerForGenerated" >
                        {finalWorkout.map((exercise,index) => {
                            return (
                                <div key={exercise.id} className={`generatedDetail`}>
                                    <img alt ={exercise.name} src={exercise.imageURL}/>
                                    <span className="exerciseName">{exercise.name}</span>
                                    <span className="exerciseBodyPart">{exercise.bodyPart.length>1? exercise.bodyPart.join(', ') : exercise.bodyPart}</span>
                                    <span className="exerciseEquipment">{exercise.equipment}</span>
                                    <span className="exerciseDifficulty">{exercise.difficulty}</span>
                                    <span className="exerciseInterval">{intervalVsRepeat}</span>
                                    <span className="exerciseSerie">{exercise.series} série</span>
                                    {intervalVsRepeat==='interval'? <span className="exerciseInter">{exercise.interval} s</span> : <span className="exerciseRepeat">{exercise.repeat}</span>}
                                    <button className="deleteExercise" onClick={() => deleteExercise(index)}>X</button>
                                </div>    
                            )
                        })}
                    </div>
                    <button id='finish' className="login" onClick={homeRedirect}>Skončiť tréning</button>
                </div>
            </div>
        </main>
        <Footer/>
    </div>

    )
}

export default WorkoutPage;