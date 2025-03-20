import { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [userName, setUsername] = useState('');

    function loginClose() {
        navigate('/');
    }

    function handleLoginSubmit() {
        navigate(`/${userName}`)
    }

    function handleUserNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    return (
        
        <div className="container">
            <div className="loginField">
            <button onClick={loginClose}>X</button>
                <form className="loginForm" onSubmit={handleLoginSubmit}>
                    <input type="text" name='userName' id='userName' placeholder="Zadajte užívateľské meno" required autoFocus={true} onChange={handleUserNameInput} value={userName}/>
                    <input type="password" name='password' required placeholder="Heslo" id='password'/>
                    <input type="submit" value='Prihlásiť sa'/>
                    <span onClick={loginClose}>Zabudli ste heslo?</span>
                </form>
            </div>
        </div>
        
    )
}

export default Login;
