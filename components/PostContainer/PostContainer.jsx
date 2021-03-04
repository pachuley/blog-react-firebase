import React, { useEffect, useState } from "react";
import { PageHeader } from 'antd';
import PostSnippet from "../PostSnippet/PostSnippet"
import db from "../../firebase"
import _ from "lodash"
import "./PostContainer.css"

function PostContainer(props) {

    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        let postsRef = db.collection("blogPosts") 

        postsRef
            .get()
            .then(posts => {
                posts.forEach(post => {
                    let data = post.data()
                    let {id} = post
                    let payload = {
                        id,
                        ...data
                    }
                    setBlogPosts((blogPosts) => [...blogPosts, payload])
                })
            })
    }, [])

    return(

        <div className="postContainer">
            <div className="postsHeaderContainer">
                <h1>Entries</h1>
            </div>
            <div className="postContentContainer">
                {   
                    _.map(blogPosts, (article, idx) => (
                        <div className="individualPosts">
                            <PostSnippet 
                                key={idx}
                                id={article.id}
                                title={article.title}
                                content={article.content.substring(0, 200)+"..."}
                            />
                        </div>
                    ))    
                }
            </div>
        </div>
    )
}
export default PostContainer;