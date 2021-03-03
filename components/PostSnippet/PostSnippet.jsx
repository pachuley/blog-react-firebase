import React from "react";
import { Card } from 'antd';
import { NavLink } from "react-router-dom"
import "./PostSnippet.css"

function PostSnippet(props) {
    return( 
        <div className="article">
            <Card
                type="inner"
                title="Inner Card title"
                extra=
                    {<NavLink to={`/post/${id}`}>
                        Read Full Article
                    </NavLink>}
                >
                Inner Card content
            </Card>
        </div>
    )
}
export default PostSnippet;