import React from "react";
import { Card } from 'antd';
import "./Post.css"

function Post(props) {
    return( 
        <div className="article">
            <Card
                type="inner"
                title="Inner Card title"
                extra={<a href="#">More</a>}
                >
                Inner Card content
            </Card>
        </div>
    )
}
export default Post;