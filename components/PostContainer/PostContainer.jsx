import React from "react";
import { PageHeader } from 'antd';
import PostSnippet from "../PostSnippet/PostSnippet"
import "./PostContainer.css"

function PostContainer(props) {
    return(
        <div className="postContainer">
            <div className="postHeaderContainer">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                />
            </div>
            <div className="postContentContainer">
                <PostSnippet />
            </div>
        </div>
    )
}
export default PostContainer;