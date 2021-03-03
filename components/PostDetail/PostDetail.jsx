import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import db from "../../firebase"
import "./PostDetail.css"

function PostDetail(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        let postRef = db.collection("blogPosts").doc(props.match.params.id)

        postRef.get().then(doc => {
            let { title, content } = doc.data()
            setTitle(title)
            setContent(content)
        })
    })
 


    return( 
        <div>
            <div className="postHeaderContainer">
                <h1>{title}</h1>
            </div>
            <div className="postDetailContainer">
                <Card>
                    <p>{content}</p>
                </Card>
            </div>
        </div>
    )
}
export default PostDetail;