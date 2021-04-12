import React from "react";
import { NavLink } from "react-router-dom"
import "./PostSnippet.css"

const PostSnippet = (props) => {
    return( 
        <div className="postSnippetContainer">
            <div className="postSnippetTitle">
                <h3>{props.title}</h3>
                <hr className="postSnippetHr"/>
                <h6>by: {props.author}</h6>
            </div>
            <div>
                {props.content.split("\n").map((paragraph, idx) => {
                        return <p key={props.id} className="postSnippetParagraph">{paragraph}</p>
                })}
            </div>
            <div>                   
                {<NavLink to={`blogs/${props.author}/post/${props.id}`}>
                    <h5 className="postSnippetReadLink">Read Full Article</h5>
                </NavLink>}                   
            </div>
        </div>
    )
}
export default PostSnippet;