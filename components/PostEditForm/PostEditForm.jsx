import React, { useState, useEffect } from "react";
import db from "../../firebase"
import { useHistory } from "react-router"
import "./PostEditForm.css";

function PostEditForm(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        let postRef = db.collection("blogPosts").doc(props.match.params.id)

        postRef.get().then(doc => {
            let { title, content } = doc.data()
            setTitle(title)
            setContent(content)
        })
    }, [])

    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)
    let history = useHistory()

    const onEditPost = () => {
        let editedPostRef = db.collection("blogPosts").doc(props.match.params.id)
        let payload = {title, content}

        editedPostRef.update(payload)
            .then(function (doc) {
                console.log("Blogpost edited correctly!")
            })
            .catch(function (e) {
                console.log(e)
            })
        history.push("/")
    }

    return( 
        <div className="editFormContainer">
            <div className="editFormTitle">
                <h1>Let's Edit</h1>
                <hr className="editFormHr"/>
            </div>
            <div className="editForm">
                <div className="nameEditFormContainer">
                    <input placeholder="Blog Title" 
                            value={title} 
                            onChange={onTitleChange} 
                            className="nameEditForm"/>
                </div>
                <div className="articleEditFormContainer">
                    <textarea placeholder="What's new?" 
                            rows={10} 
                            value={content} 
                            onChange={onContentChange} 
                            className="articleEditForm"/> 
                </div>
                <div className="submitButtonEditForm">
                    <button size="large" onClick={onEditPost} className="editButton">Edit</button>
                </div>
            </div>
        </div>
    )
}
export default PostEditForm;