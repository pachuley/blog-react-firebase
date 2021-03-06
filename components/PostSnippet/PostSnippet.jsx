import React from "react";
import { NavLink } from "react-router-dom"
import "./PostSnippet.css"

const PostSnippet = (props) => {
    return( 
        <div className="postSnippetContainer">
            <div className="postSnippetTitle">
                <h3>{props.title}</h3>
                <hr className="postSnippetHr"/>
            </div>
            <div>
                {props.content.split("\n").map((paragraph, idx) => {
                        return <p key={idx} className="postSnippetParagraph">{paragraph}</p>
                })}
            </div>
            <div className="postSnippetReadLink">                   
                {<NavLink to={`/post/${props.id}`}>
                    <h5>Read Full Article</h5>
                </NavLink>}                   
            </div>
        </div>
    )
}
export default PostSnippet;