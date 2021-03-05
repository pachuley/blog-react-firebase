import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';
import db from "../../firebase"
import { useHistory } from "react-router"
import "./PostEditForm.css";

const { TextArea } = Input

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
        <div className="postFormContainer">
            <div className="headerContainer">
                <h1>Do you want to change what was on your mind  back then?</h1>
            </div>
            <div className="namePostForm">
                <Input placeholder="Blog Title" value={title} onChange={onTitleChange}/>
            </div>
            <div className="articlePostForm">
                <TextArea placeholder="What's up?" rows={10} value={content} onChange={onContentChange}/> 
            </div>
            <div className="submitButtonPostForm">
                <Button size="large" onClick={onEditPost}>Edit</Button>
            </div>

        </div>
    )
}
export default PostEditForm;