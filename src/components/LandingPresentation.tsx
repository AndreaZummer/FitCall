import "../styles/LandingPresentation.css";
import Crunch from '../components/resources/pexels-pixabay-416778.jpg';
import Stretching from "../components/resources/sport-lifestyle-fitness-male-training.jpg";
import Weightlift from "../components/resources/pexels-victorfreitas-841128.jpg";
import Exercises from "../components/resources/pexels-olly-868483.jpg";
import { useNavigate } from "react-router-dom";

function LandingPresentation() {
    const navigate = useNavigate();

    function signupClickHandle() {
        navigate('/Signup');
    }

    return (
        <div className="presentation">
            <div className="slides crunch">
                <img alt='crunch' src={Crunch}/>
                <h2>Máš rád cvičenie?</h2>
            </div>
            <div className="slides">
                <h2 id='stretching'>Nerád improvizuješ a chceš si tréning pripraviť dopredu?</h2>
                <img alt='stretching' src={Stretching}/>
            </div>
            <div className="slides">
                <img alt='exercises' src={Exercises}/>
                <h2 id='weighlift'>Alebo práve naopak? Nemáš nápady či čas premýšľať nad tréningom?</h2>
            </div>
            <div className="slides">
                <div className="text">
                    <h2 className='exercise'><span className="fitCall">FitCall®</span> je tá správna voľba pre teba!</h2>
                    <p className="exercise">Zaregistruj sa a získaj tréning presne podľa tvojho gusta</p>
                    <div className='sign registration'>
                        <button className='login' id="registrationButton" onClick={signupClickHandle}>Registrovať sa</button>
                    </div>                
                </div>
                <img alt='weightlift' src={Weightlift}/>
            </div>
        </div>
    )
}

export default LandingPresentation;