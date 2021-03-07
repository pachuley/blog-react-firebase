import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import DeleteBtn from "../../Commons/DeleteButton/DeleteBtn"
import db from "../../../firebase"
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
        <div className="postDetailContainer">
            <div className="postDetailTitleContainer">
                <h1>{title}</h1>
                <hr className="postDetailHr"/>
            </div>

            {(props.user &&
                <div className="editLinksContainer"> 
                    <div className="editLink">
                        {<NavLink to={`/edit_post/${props.match.params.id}`}>
                            <h4 className="postEditLink">Edit</h4>
                        </NavLink>}
                    </div>

                    <div className="deleteLink">
                        <DeleteBtn id={props.match.params.id}/>
                    </div>
                </div>
            )}
            
            <div className="postDetailContent">             
                {content.split("\n").map((paragraph, idx) => {
                return <p key={idx} className="postDetailParagraph">{paragraph}</p>
                })}        
            </div>
        </div>
    )
}
export default PostDetail;