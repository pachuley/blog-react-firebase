import React, { useEffect, useState } from "react";
import PostSnippet from "../PostSnippet/PostSnippet"
import db from "../../../firebase"
import _ from "lodash"
import "./AuthorPosts.css"

function AuthorPosts(props) {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        let postsRef = db.collection("blogPosts").where("author", "==", props.match.params.email)
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
    }, [props.user.email])

    return(
        <div className="postContainer">
            <div className="headerContainer">
                <h1>{props.match.params.email}'s Entries</h1>
                <hr className="headerHr"/>
            </div>
            <div className="postContentContainer">
                {_.map(blogPosts, (post) => (
                    <div className="myPosts" key={post.id}>
                        <PostSnippet 
                            id={post.id}
                            author={post.author}
                            title={post.title}
                            content={post.content.substring(0, 1000)+"..."}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AuthorPosts;