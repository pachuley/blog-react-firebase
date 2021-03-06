import React, { useState } from "react";
import { useHistory } from "react-router"
import { NavLink } from "react-router-dom"
import { auth } from "../../../firebase"
import "./LogIn.css"

function LogIn(props) {     
     
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    let history = useHistory()

    const onLogIn = (event => {
        auth.signInWithEmailAndPassword(email, password)
        .then(function (result) {
            alert("User logged in succesfully!")
            history.push("/")
        })
        .catch(function (error) {
            setEmail("")
            setPassword("")
            alert("Something happened during the Log In")
            console.log(error)
        })
    })

    return (
        <div className="logInContainer">       
            <div className="logInTitle">
                <h1>Create your account</h1>
                <hr className="logInHr"/>
            </div>
            <div className="logInForm">
                <div className="logInEmailContainer">
                    <h3 className="logInEmail">Email</h3>
                    <input placeholder="Write your email address" 
                            type="email"
                            value={email} 
                            onChange={onEmailChange} 
                            className="emailForm"/>
                </div>
                <div className="logInPasswordContainer">
                    <h3 className="logInPassword">Password</h3>
                    <input placeholder="Write your new password" 
                            type="password"
                            value={password} 
                            onChange={onPasswordChange} 
                            className="passwordForm"/> 
                </div>
                <div className="logInButtonContainer">
                    <button size="large" onClick={onLogIn} className="LogInButton">LogIn</button>
                    <div className="signUpLinkContainer">
                        {<NavLink to={`/sign_up/`}>
                            <h4 className="signUpLink">If you don't have an Account, create one!</h4>
                        </NavLink>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;