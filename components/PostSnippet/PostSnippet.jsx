import React from "react";
import { NavLink } from "react-router-dom"
import "./PostSnippet.css"

const PostSnippet = (props) => {
    return( 
        <div className="postSnippetContainer">
            <div className="postSnippetHeaderContainer">
                <div className="postSnippetTitle">
                    <h4>{props.title}</h4>
                </div>
                <div className="postSnippetReadLink">
                    {<NavLink to={`/post/${props.id}`}>
                        Read Full Article
                    </NavLink>}
                </div>
            </div>
            <div className="postSnippetContent">
                <span>
                    {props.content.split("\n").map((paragraph, idx) => {
                            return <p key={idx}>{paragraph}</p>
                    })}
                </span>
            </div>
        </div>
    )
}
export default PostSnippet;