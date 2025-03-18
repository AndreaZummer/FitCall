
import {useNavigate, useParams} from "react-router-dom";
import '../styles/Header.css';
import logo from './resources/logo.png';
import stopwatch from './resources/stopwatch-svgrepo-com.svg';
import fitnnessWatch from './resources/fitness-watch-pulse-smartwatch-svgrepo-com.svg';
import bag from './resources/gym-bag-barrel-svgrepo-com.svg';
import dumbell from './resources/dumbell-fitness-svgrepo-com.svg';
import shoe from './resources/shoe-5-svgrepo-com.svg';
import avatar from './resources/avatar-man-profile-svgrepo-com.svg';

function Header() {
    const navigate = useNavigate();
    const params = useParams();
    const userName = params["username"];

    function logOutClickHandler() {
        navigate('/');
    }

    function loginClickHandler() {
        navigate('/Login');
    }

    function signupClickHandle() {
        navigate('/Signup');
    }

    return (
        <div className='app-header'>
            <img id="logo" alt="logo" src={logo}/>
            <img className="header-svgs" id='stop' alt="stopwatch" src={stopwatch}/>
            <img className="header-svgs" id='watch' alt="fitness watch" src={fitnnessWatch}/>
            <img className="header-svgs" id='bag' alt="bag" src={bag}/>
            <img className="header-svgs" id='shoe' alt="shoe" src={shoe}/>
            <img className="header-svgs" id='dumbell' alt="dumbell" src={dumbell}/>
            {!userName? 
                <div className='sign'>
                    <button className='login' onClick={loginClickHandler}>Prihlásiť sa</button>
                    <p>alebo</p>
                    <span className="signUp" onClick={signupClickHandle}>Registrovať sa</span>
                </div>
                :
                <div className="profil">
                    <div className="userInfo">
                        <img alt='avatar' src={avatar}/>
                        <h3>{userName}</h3>
                    </div>
                    <span className="signUp" onClick={logOutClickHandler}>Odhlásiť sa</span>
                </div>
            }
            
        </div>
    )
}

export default Header;