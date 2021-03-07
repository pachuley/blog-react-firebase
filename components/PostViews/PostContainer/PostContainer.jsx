import React, { useEffect, useState } from "react";
import PostSnippet from "../PostSnippet/PostSnippet"
import db from "../../../firebase"
import _ from "lodash"
import "./PostContainer.css"

function PostContainer(props) {
    
    const [blogPosts, setBlogPosts] = useState([])
    console.log(blogPosts)

    useEffect(() => {

        let postsRef = db.collection("users").doc(props.user.uid).collection("blogPosts")
        const unsubscribe = postsRef
            .onSnapshot(posts => {
            let blogPostsArray = []
            posts.forEach(post => {
                let data = post.data()
                let {id} = post
                let payload = {
                    id,
                    ...data
                }
                blogPostsArray.push(payload)
            })
            setBlogPosts(blogPostsArray)
        }) 
        return () => unsubscribe()
    }, [props.user.uid])

    return(
        <div className="postContainer">
            <div className="headerContainer">
                <h1>Captain's log</h1>
                <hr className="headerHr"/>
            </div>
            <div className="postContentContainer">
                {_.map(blogPosts, (post, idx) => (
                    <div className="individualPosts" key={post.id}>
                        <PostSnippet 
                            id={post.id}
                            title={post.title}
                            content={post.content.substring(0, 200)+"..."}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PostContainer;