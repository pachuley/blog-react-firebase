import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import DeleteBtn from "../../Commons/DeleteButton/DeleteBtn"
import db from "../../../firebase"
import "./PostDetail.css"

function PostDetail(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")

    let userId = props?.uid ? props.uid : props.match.params.uid

    useEffect(() => {
        let postRef = db.collection("blogPosts").doc(props.match.params.id)

        postRef.get().then(doc => {
            console.log(doc.data)
            let { title, content, author } = doc.data()
            setTitle(title)
            setContent(content)
            setAuthor(author)
        })
    }, [userId])
 
    return( 
        <div className="postDetailContainer">
            <div className="postDetailTitleContainer">
                <h1>{title}</h1>
                <hr className="postDetailHr"/>
                <h4>by: {author}</h4>
            </div>
            {(props.match.params.author === props.user.email &&
                <div className="editLinksContainer"> 
                    <div className="editLink">
                        {<NavLink to={`/edit_post/${props.match.params.id}`}>
                            <h4 className="postEditLink">Edit</h4>
                        </NavLink>}
                    </div>
                    <div className="deleteLink">
                        <DeleteBtn id={props.match.params.id} user={props.user}/>
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