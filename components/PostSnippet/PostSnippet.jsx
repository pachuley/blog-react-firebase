import React from "react";
import { Card } from 'antd';
import { NavLink } from "react-router-dom"
import "./PostSnippet.css"

const PostSnippet = (props) => {
    return( 
        <div className="article">
            <Card
                type="inner"
                title={props.title}
                extra=
                    {<NavLink to={`/post/${props.id}`}>
                        Read Full Article
                    </NavLink>}
                >
                <p>
                    {props.content}
                </p>
            </Card>
        </div>
    )
}
export default PostSnippet;