import React from "react";
import { useHistory } from "react-router"
import { auth } from "../../../firebase"
import "./LogOut.css"

function LogOut(props) {      
    let history = useHistory()

    const onLogOut = (event => {
        auth.signOut()
            .then(function () {
                alert("User succesfully signed out");
                history.push("/")
            })
            .catch(function (error) {
                console.log(error)
            })
    })

    return (
        <div className="logOutContainer">       
            <h4 className="logOutLink" onClick={onLogOut}>Log Out</h4>
        </div>
    );
}

export default LogOut;