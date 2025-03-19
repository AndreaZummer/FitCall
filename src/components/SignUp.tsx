import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const navigate = useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [terms, setTerms] = useState(false);

    function passwordHandle(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function confirmPasswordHandle(event: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(event.target.value);
    }
    
    function loginClose() {
        navigate('/');
    }
    function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (password!==confirmPassword) {
            alert('Heslá sa nezhodujú');
            setPassword('');
            setConfirmPassword('');
        } else {
            navigate(`/${userName}`)
        }
    }

    function handleUserNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function termsHandle() {
        terms? setTerms(false) : setTerms(true);
    }

    return (
        <div className="container">
            <div className="loginField">
            <button onClick={loginClose}>X</button>
                <form className="loginForm" onSubmit={handleLoginSubmit}>
                    <input type="text" name='userName' placeholder="Zadajte užívateľské meno" required autoFocus={true} onChange={handleUserNameInput} value={userName}/>
                    <input type="email" name="userMail" placeholder='Zadajte email' required pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.toString()}/>
                    <input type="password" name='password' required placeholder="Heslo" id='password' minLength={8} onChange={passwordHandle} value={password}/>
                    <input type="password" name='password' required placeholder="Zopakujte heslo" onChange={confirmPasswordHandle} value={confirmPassword}/>
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