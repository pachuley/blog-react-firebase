import React, { useState, useEffect } from "react";
import db from "../../../firebase"
import { useHistory } from "react-router"
import "./ProfileForm.css";

function ProfileForm(props) {

    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {
        let postRef = db.collection("users").doc(props.user.uid).collection("bio").doc("userInfo")

        postRef.get().then(doc => {
            let { username, bio } = doc.data()
            setUsername(username)
            setBio(bio)
        })
    }, [props.user.uid])

    const onUsernameChange = (event) => setUsername(event.target.value)
    const onBioChange = (event) => setBio(event.target.value)
    let history = useHistory()

    const onEditBio = () => {
        let editedPostRef = db.collection("users").doc(props.user.uid).collection("bio")
        let payload = {username, bio}

        editedPostRef.update(payload)
            .then(function (doc) {
                console.log("Bio edited correctly!")
            })
            .catch(function (e) {
                console.log(e)
            })
        history.push("/")
    }

    return( 
        <div className="editFormContainer">
            <div className="editFormTitle">
                <h1>Your Profile</h1>
                <hr className="editFormHr"/>
            </div>
            <div className="editForm">
                <div className="nameEditFormContainer">
                    <h3 className="editPostTitle">What's your username?</h3>
                    <input placeholder="Blog Title" 
                            value={username} 
                            onChange={onUsernameChange} 
                            className="nameEditForm"/>
                </div>
                <div className="articleEditFormContainer">
                    <h3 className="editPostTitle">Tell us about yourself</h3>
                    <textarea placeholder="What's new?" 
                            rows={5} 
                            value={bio} 
                            onChange={onBioChange} 
                            className="articleEditForm"/> 
                </div>
                <div className="submitButtonEditForm">
                    <button size="large" onClick={onEditBio} className="editButton">Edit</button>
                </div>
            </div>
        </div>
    )
}
export default ProfileForm;