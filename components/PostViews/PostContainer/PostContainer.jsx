import React, { useEffect, useState } from "react";
import PostSnippet from "../PostSnippet/PostSnippet"
import db from "../../../firebase"
import _ from "lodash"
import "./PostContainer.css"

function PostContainer(props) {
    
    const [blogPosts, setBlogPosts] = useState([])
    //let userId = props?.user.uid ? props.user.uid : props.match.params.uid
    useEffect(() => {
       
        let postsRef = db.collection("blogPosts")
        postsRef
            .get()
            .then((posts) => {
                let uniqueAuthors = []
                let allPosts = []
                posts.forEach((post) => {
                    const data = post.data()
                    if (!uniqueAuthors.includes(data.author)){
                        uniqueAuthors.push(data.author)
                    }
                    allPosts.push({id: post.id, ...data})
                })
                setBlogPosts(allPosts)
            })
    }, [])

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
                            title={post.title}
                            content={post.content.substring(0, 200)+"..."}
                            author={post.author}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PostContainer;