import React, { useState } from "react";
import { useHistory } from "react-router"
import db from "../../firebase"
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
            <div className="headerContainer">
                <h1>What's on your mind?</h1>
            </div>
            <div className="namePostForm">
                <input placeholder="Blog Title" value={title} onChange={onTitleChange}/>
            </div>
            <div className="articlePostForm">
                <textarea placeholder="What's up?" rows={10} value={content} onChange={onContentChange}/> 
            </div>
            <div className="submitButtonPostForm">
                <button size="large" onClick={onCreatePost}>Submit</button>
            </div>
        </div>
    )
}
export default PostCreatorForm;