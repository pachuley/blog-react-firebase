import React, { useEffect, useState } from "react";
import PostSnippet from "../PostSnippet/PostSnippet"
import db from "../../../firebase"
import _ from "lodash"
import "./MyPosts.css"

function MyPosts(props) {
    console.log(props.user.uid)
    const [blogPosts, setBlogPosts] = useState([])

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
                <h1>My Entries</h1>
                <hr className="headerHr"/>
            </div>
            <div className="postContentContainer">
                {_.map(blogPosts, (post) => (
                    <div className="myPosts" key={post.id}>
                        <PostSnippet 
                            id={post.id}
                            uid={props.user.uid}
                            title={post.title}
                            content={post.content.substring(0, 1000)+"..."}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MyPosts;