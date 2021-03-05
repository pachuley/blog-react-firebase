import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import { NavLink } from "react-router-dom"
import db from "../../firebase"
import "./PostDetail.css"

function PostDetail(props) {

    console.log(props)
    console.log(props.id)

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
            <div className="headerContainer">
                <h1>{title}</h1>
            </div>
            <div className="postDetailContainer">
                <Card 
                    extra=
                        {<NavLink to={`/edit_post/${props.match.params.id}`}>
                            Edit
                        </NavLink>}>
                    <p>{content.split("\n").map((paragraph, idx) => {
                        return <p key={idx}>{paragraph}</p>
                    })}</p>
                </Card>
            </div>
        </div>
    )
}
export default PostDetail;