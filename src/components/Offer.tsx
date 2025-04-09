import { useNavigate, useOutletContext } from "react-router-dom";
import '../styles/Offer.css';
import { workoutGenerator} from "../utilities";
import { listOfWorkouts } from "../data/listOfExercises";
import { Exercise } from "../entities";

type OfferProps = {
    intervalVsRepeatSetup: (intervalVsRepeat: "interval" | "opakovania" | null) => void,
    finalWorkoutSetup: (finalWorkout: Exercise[]) => void
}

function Offer() {

    const context:OfferProps = useOutletContext();
    
    const navigation = useNavigate();

    function generateWorkoutSurprise() {
        const [finalWorkout, intervalVsRepeat] = workoutGenerator(listOfWorkouts,{});
        context.intervalVsRepeatSetup(intervalVsRepeat);
        context.finalWorkoutSetup(finalWorkout);
        navigation('./surpriseworkout')
    }

    function filterWorkout() {
        navigation('./filter');
    }

    function listOfExerciseNavigation() {
        navigation('./listofexercises');
    }

    return (
        <div className="home">
                    <div className="choiceColumn">
                        <h2>Vyskladám si tréning</h2>
                        <ul>
                            <li>Pozri si všetky ponúkané cviky</li>
                            <li>Navoľ si ľubovoľný počet cvičení</li>
                            <li>Pri väčšine cvičení možnosť výberu interval/počet opakovaní</li>
                        </ul>
                        <button className="login login-query" onClick={listOfExerciseNavigation}>Pozrieť si cvičenia</button>
                    </div>
                    <div className="choiceColumn">
                        <h2>Vyfiltrujem si tréning</h2>
                        <ul>
                            <li>Vyber si obtiažnosť cvičenia</li>
                            <li>Zvoľ si cieľovú partiu tela</li>
                            <li>Povedz nám ako dlho chceš cvičiť</li>
                            <li>Nemáš všetky potrebné cvičebné pomôcky?...Nevadí! Vyber si tie ktoré máš</li>
                        </ul>
                        <button className="login login-query" onClick={filterWorkout}>Navoliť typ tréningu</button>
                    </div>
                    <div className="choiceColumn">
                        <h2>Nechám sa prekvapiť</h2>
                        <ul>
                            <li>Stále nový tréning, pri ktorom nikdy nevieš čo ťa čaká</li>
                            <li>Nepáči sa ti niektorý cvik? Tak ho vymeň!</li>
                        </ul>
                        <button className="login login-query" onClick={generateWorkoutSurprise}>Vytvoriť tréning</button>
                    </div>
                </div>
    )
}

export default Offer;