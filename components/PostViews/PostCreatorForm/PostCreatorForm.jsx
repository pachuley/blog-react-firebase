import React, { useState } from "react";
import { useHistory } from "react-router"
import db from "../../../firebase"
import "./PostCreatorForm.css";

function PostCreatorForm(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)
    let history = useHistory()

    const onCreatePost = () => {
        let postRef = db.collection("blogPosts")
        let payload = {title, content}

        console.log("Entro")

        postRef.add(payload)
            .then(function (doc) {
                console.log("Blogpost saved correctly!")
            })
            .catch(function (e) {
                console.log(e)
            })
        setTitle("")
        setContent("")
        history.push("/")
    }

    return( 
        <div className="postFormContainer">
            <div className="postFormTitle">
                <h1>What's on your mind?</h1>
                <hr className="postFormHr"/>
            </div>
            <div className="postForm">
                <div className="namePostFormContainer">
                    <h3 className="namePostTitle">What should it be called?</h3>
                    <input placeholder="Blog Title" 
                            value={title} 
                            onChange={onTitleChange} 
                            className="namePostForm"/>
                </div>
                <div className="articlePostFormContainer">
                    <h3 className="namePostTitle">What happened?</h3>
                    <textarea placeholder="What's up?" 
                            rows={10} 
                            value={content} 
                            onChange={onContentChange} 
                            className="articlePostForm"/> 
                </div>
                <div className="submitButtonPostForm">
                    <button size="large" onClick={onCreatePost} className="submitButton">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default PostCreatorForm;