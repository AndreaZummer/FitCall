import { useNavigate } from "react-router-dom";
import store from "../app/store";
import { setUserName } from "./loginSlice";
import { setPassword, confirmPassword, setTerms, resetPasswords } from "./signUpSlice";
import { useSelector } from "react-redux";

function SignUp() {
    const navigate = useNavigate();


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
            store.dispatch(resetPasswords())
        }
    }

    function handleUserNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        store.dispatch(setUserName(event.target.value))
    }

    const terms = useSelector(() => store.getState().SignUp.terms);
    const password = useSelector(() => store.getState().SignUp.password);
    const againPassword = useSelector(() => store.getState().SignUp.confirmPassword);

    return (
        <div className="container">
            <div className="loginField">
            <button onClick={loginClose}>X</button>
                <form className="loginForm" onSubmit={handleLoginSubmit}>
                    <input type="text" name='userName' placeholder="Zadajte užívateľské meno" required autoFocus={true} onChange={handleUserNameInput} />
                    <input type="email" name="userMail" placeholder='Zadajte email' required pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.toString()}/>
                    <input type="password" name='password' required placeholder="Heslo" id='password' minLength={8} onChange={passwordHandle} value={password}/>
                    <input type="password" name='password' required placeholder="Zopakujte heslo" onChange={confirmPasswordHandle} value={againPassword}/>
                    <div className="terms">
                        <input type="checkbox" name='terms' required id='terms' onClick={() => store.dispatch(setTerms())} checked={!terms? false : true}/>
                        <label htmlFor="terms">Súhlasím s podmienkami používania aplikácie FitCall</label>
                    </div>
                    <input type="submit" value='Registrovať sa' disabled={terms? false : true} id={!terms? 'disabled' : 'enable'}/>
                </form>
            </div>
        </div>
    )
}

export default SignUp;