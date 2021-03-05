import React, { useState } from "react";
import { Input, Button } from 'antd';
import db from "../../firebase"
import "./PostEditForm.css";

const { TextArea } = Input

function PostEditForm(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)

    const onCreatePost = () => {
        let postRef = db.collection("blogPosts")
        let payload = {title, content}

        postRef.add(payload)
            .then(function (doc) {
                console.log("Blogpost saved correctly!")
            })
            .catch(function (e) {
                console.log(e)
            })

        setTitle("")
        setContent("")
        window.location = "/";
    }

    return( 
        <div className="postFormContainer">
            <div className="headerContainer">
                <h1>What's on your mind?</h1>
            </div>
            <div className="namePostForm">
                <Input placeholder="Blog Title" value={title} onChange={onTitleChange}/>
            </div>
            <div className="articlePostForm">
                <TextArea placeholder="What's up?" rows={10} value={content} onChange={onContentChange}/> 
            </div>
            <div className="submitButtonPostForm">
                <Button size="large" onClick={onCreatePost}>Submit</Button>
            </div>

        </div>
    )
}
export default PostEditForm;