import React from "react";
import "../styles/Login.css";

function Login() {
    return (
        <div className="container">
            <div className="loginField">
                <form>
                    <input type="email" name='email' id='email' placeholder="Zadajte email" required pattern={/^[*]+@[*]+\.[*]+/.toString()}/>
                    <label htmlFor="email">Email</label>
                    <input type="password" name='password' required placeholder="password" id='password' minLength={8}/>
                    <label htmlFor="password">Password</label>
                </form>
            </div>
        </div>
    )
}

export default Login;
