import React from "react";
import { PageHeader } from 'antd';
import Post from "../Post/Post"
import "./Posts.css"

function Posts(props) {
    return(
        <div className="postsContainer">
            <div className="postsHeaderContainer">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                />
            </div>
            <div className="articleContainer">
                <Post />
            </div>
        </div>
    )
}
export default Posts;