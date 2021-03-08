import React, { useEffect, useState } from "react";
import PostSnippet from "../PostSnippet/PostSnippet"
import db from "../../../firebase"
import _ from "lodash"
import "./PostContainer.css"

function PostContainer(props) {
    
    const [blogPosts, setBlogPosts] = useState([])
    let userId = props?.user.id ? props.user.id : props.match.params.uid

    useEffect(() => {
        let postsRef = db.collection("users").doc(userId).collection("blogPosts")
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
    }, [userId])

    return(
        <div className="postContainer">
            <div className="headerContainer">
                <h1>Captain's log</h1>
                <hr className="headerHr"/>
            </div>
            <div className="postContentContainer">
                {_.map(blogPosts, (post) => (
                    <div className="individualPosts" key={post.id}>
                        <PostSnippet 
                            id={post.id}
                            uid={userId}
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