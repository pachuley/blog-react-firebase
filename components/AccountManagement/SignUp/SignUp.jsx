import React, { useState } from "react";
import { useHistory } from "react-router"
import { NavLink } from "react-router-dom"
import db, { auth } from "../../../firebase"
import "./SignUp.css"

function SignUp(props) {  
        
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    let history = useHistory()


    const onPassword2Change = (event) => {
        setPassword2(event.target.value);
        if (password2 !== password) {
            console.log("Both passwords should match");
        } else {
            console.log("Both passwords match correctly")
        }
    }

    const onSignUp = () => {
        if (password === password2){
            auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                console.log(result)
                setEmail("")
                setPassword("")
                setPassword2("")
                alert("Account created succesfully!")
                history.push("/")
            })
            .catch(function (error) {
                setEmail("")
                setPassword("")
                setPassword2("")
                alert("Something happened during the Sign Up")
                console.log(error)
            })
        } else {
            setEmail("")
            setPassword("")
            setPassword2("")
            alert("Both passwords should match")
        }
    }

    return (
        <div className="signUpContainer">       
            <div className="signUpTitle">
                <h1>Create your account</h1>
                <hr className="signUpHr"/>
            </div>
            <div className="signUpForm">
                <div className="signUpEmailContainer">
                    <h3 className="signUpEmail">Email</h3>
                    <input placeholder="Write your email address" 
                            type="email"
                            required="required"
                            value={email} 
                            onChange={onEmailChange} 
                            className="emailForm"/>
                </div>
                <div className="signUpPasswordContainer">
                    <h3 className="signUpPassword">Password</h3>
                    <input placeholder="Write your new password" 
                            type="password"
                            required="required"
                            value={password} 
                            onChange={onPasswordChange} 
                            className="passwordForm"/> 
                </div>
                <div className="signUpPasswordContainer">
                    <h3 className="signupPassword">Please confirm your password</h3>
                    <input placeholder="Write your new password again" 
                            type="password"
                            required="required"
                            value={password2} 
                            onChange={onPassword2Change} 
                            className="passwordForm"/> 
                </div>
                <div className="signUpButtonContainer">
                    <button size="large" className="signUpButton" onClick={onSignUp}>Sign Up</button>
                    <div className="logInLinkContainer">
                        {<NavLink to={`/log_in/`}>
                            <h4 className="logInLink">If you already have an Account, sign in!</h4>
                        </NavLink>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;