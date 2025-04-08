import { useNavigate } from "react-router-dom";
import store from "../app/store";
import { setUserName } from "./loginSlice";
import { setPassword, confirmPassword, setTerms, resetPasswords } from "./signUpSlice";

function SignUp() {
    const navigate = useNavigate();
    const login = store.getState().login;
    const password = store.getState().SignUp.password;
    const confirmPasswordValue = store.getState().SignUp.confirmPassword;
    const terms = store.getState().SignUp.terms;


    function passwordHandle(event: React.ChangeEvent<HTMLInputElement>) {
        store.dispatch(setPassword(event.target.value))
    }

    function confirmPasswordHandle(event: React.ChangeEvent<HTMLInputElement>) {
        store.dispatch(confirmPassword(event.target.value));
    }
    
    function loginClose() {
        navigate('/');
    }
    function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (store.getState().SignUp.password!==store.getState().SignUp.confirmPassword) {
            alert('Heslá sa nezhodujú');
            store.dispatch(resetPasswords())
        } else {
            navigate(`/${store.getState().login}`)
        }
    }

    function handleUserNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        store.dispatch(setUserName(event.target.value))
    }

    function termsHandle() {
        store.dispatch(setTerms())
    }

    return (
        <div className="container">
            <div className="loginField">
            <button onClick={loginClose}>X</button>
                <form className="loginForm" onSubmit={handleLoginSubmit}>
                    <input type="text" name='userName' placeholder="Zadajte užívateľské meno" required autoFocus={true} onChange={handleUserNameInput} value={login}/>
                    <input type="email" name="userMail" placeholder='Zadajte email' required pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.toString()}/>
                    <input type="password" name='password' required placeholder="Heslo" id='password' minLength={8} onChange={passwordHandle} value={password}/>
                    <input type="password" name='password' required placeholder="Zopakujte heslo" onChange={confirmPasswordHandle} value={confirmPasswordValue}/>
                    <div className="terms">
                        <input type="checkbox" name='terms' required id='terms' onClick={termsHandle}/>
                        <label htmlFor="terms">Súhlasím s podmienkami používania aplikácie FitCall</label>
                    </div>
                    <input type="submit" value='Registrovať sa' disabled={terms? false : true} id={!terms? 'disabled' : 'enable'}/>
                </form>
            </div>
        </div>
    )
}

export default SignUp;