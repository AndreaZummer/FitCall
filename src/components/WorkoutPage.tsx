import '../styles/WorkoutPage.css';
import { Exercise } from "../entities";
import { useNavigate, useOutletContext, useParams,Link } from "react-router-dom";
import { useEffect} from "react";
import background from '../styles/group-pilates-instructors-exercising-reformers.jpg';

type workoutPageProperties = {
    finalWorkout: Exercise[],
    intervalVsRepeat: "interval" | "opakovania" | null,
    finalWorkoutSetup: (modifyWorkout:Exercise[]) => void,
    selectedType: string[],
    resetSelectedType: () => void
}

function WorkoutPage() {

    const context: workoutPageProperties = useOutletContext();
    const navigate = useNavigate();
    const params = useParams();
    const {username} = params;

    useEffect(() => {
        
        window.scrollTo(0,0);
    }, []);
    
    function deleteExercise(indexToDelete: number) {
        const modifyWorkout = context.finalWorkout.filter((workout, index) => { return index!==indexToDelete})
        context.finalWorkoutSetup(modifyWorkout);
    }

    function typeOfExerciseHandle(index: number) {
        
        if (context.selectedType.length > 0) { 
            if (context.selectedType[index] === 'interval') {
                return <span className="exerciseInter">interval</span>
            } else {return  <span className="exerciseRepeat">opakovania</span>}   
        } else {
            return <span className="exerciseInterval">{context.intervalVsRepeat}</span>
        }
    }

    function displayIntervalOrRepeatTime(index:number,exercise:Exercise) {
        if(context.intervalVsRepeat==='interval' || context.selectedType[index]==='interval') {
            return <span className="exerciseInter">{exercise.interval} s</span> 
        } else {
            return <span className="exerciseRepeat">{exercise.repeat}</span>
        } 
    }

    function homeRedirect() {
        context.resetSelectedType();
        navigate(`/${username}`)
    }

    return (
        <div className="home">
            <div className="choiceColumn" id='single' style={{backgroundImage: `url(${background})` }}>
                <div className="overlay"></div>
                <h2>Tvoj dnešný tréning</h2>
                <div className="containerForGenerated" >
                    {context.finalWorkout.map((exercise,index) => {
                        return (
                            <div key={index} className={`generatedDetail`}>
                                <img alt ={exercise.name} src={exercise.imageURL}/>
                                <div className='container-query'>
                                    <Link to={`../listofexercises/${exercise.name}`}><span className="exerciseName">{exercise.name}</span></Link>
                                    <div className='container-query-detail'>
                                        <span className="exerciseBodyPart">{exercise.bodyPart.length>1? exercise.bodyPart.join(', ') : exercise.bodyPart}</span>
                                        <span className="exerciseEquipment">{exercise.equipment}</span>
                                        <span className="exerciseDifficulty">{exercise.difficulty}</span>
                                    </div>
                                    {typeOfExerciseHandle(index)}
                                    <span className="exerciseSerie">{exercise.series} série</span>
                                    {displayIntervalOrRepeatTime(index,exercise)}
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