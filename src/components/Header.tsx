
import {useNavigate} from "react-router-dom";
import '../styles/Header.css';
import logo from './resources/logo.png';
import stopwatch from './resources/stopwatch-svgrepo-com.svg';
import fitnnessWatch from './resources/fitness-watch-pulse-smartwatch-svgrepo-com.svg';
import bag from './resources/gym-bag-barrel-svgrepo-com.svg';
import dumbell from './resources/dumbell-fitness-svgrepo-com.svg';
import shoe from './resources/shoe-5-svgrepo-com.svg';

function Header() {
    // const navigate = useNavigate();

    function loginClickHandler() {
        // navigate('/Login');
    }

    return (
        <div className='app-header'>
            <img id="logo" alt="logo" src={logo}/>
            <img className="header-svgs" id='stop' alt="stopwatch" src={stopwatch}/>
            <img className="header-svgs" id='watch' alt="fitness watch" src={fitnnessWatch}/>
            <img className="header-svgs" id='bag' alt="bag" src={bag}/>
            <img className="header-svgs" id='shoe' alt="shoe" src={shoe}/>
            <img className="header-svgs" id='dumbell' alt="dumbell" src={dumbell}/>
            <div className='sign'>
                <button className='login' onClick={loginClickHandler}>Prihlásiť sa</button>
                <p>alebo</p>
                <span id="signUp">Registrovať sa</span>
            </div>
        </div>
    )
}

export default Header;