import React, { useState } from "react";
import { Input, Button } from 'antd';
import db from "../../firebase"
import "./PostCreatorForm.css";

const { TextArea } = Input

function PostCreatorForm(props) {

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
    }

    return( 
        <div className="postFormContainer">
            <h1>What's in your mind?</h1>
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
export default PostCreatorForm;