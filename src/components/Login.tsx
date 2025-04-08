import store from "../app/store";
import "../styles/Login.css";
import { setUserName } from "./loginSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const {login} = store.getState();

    function loginClose() {
        navigate('/');
    }

    function handleLoginSubmit() {
        navigate(`/${store.getState()}`)
    }

    function handleUserNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        // setUsername(event.target.value)
        store.dispatch(setUserName(event.target.value))
    }

    return (
        
        <div className="container">
            <div className="loginField">
                <button onClick={loginClose}>X</button>
                <form className="loginForm" onSubmit={handleLoginSubmit}>
                    <input type="text" name='userName' id='userName' placeholder="Zadajte užívateľské meno" required autoFocus={true} onChange={handleUserNameInput} value={login}/>
                    <input type="password" name='password' required placeholder="Heslo" id='password'/>
                    <input type="submit" value='Prihlásiť sa'/>
                    <span onClick={loginClose}>Zabudli ste heslo?</span>
                </form>
            </div>
        </div>
        
    )
}

export default Login;
