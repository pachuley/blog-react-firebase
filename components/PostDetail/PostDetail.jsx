import React from "react";
import { Card } from 'antd';
import "./PostDetail.css"

function PostDetail(props) {
    return( 
        <div>
            <div className="postHeaderContainer">
                <h1>Post Title</h1>
            </div>
            <div className="postDetailContainer">
                <Card>
                    <p>Card content</p>
                </Card>
            </div>
        </div>
    )
}
export default PostDetail;