import React, { useEffect, useState } from "react";
import db from "../../../firebase"
import _ from "lodash"
import "./WritersDropdown.css"
import { NavLink } from "react-router-dom"

function WritersDropdown(props) {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        let authorsRef = db.collection("blogPosts")
        const unsubscribe = authorsRef
            .onSnapshot(posts => {
            let allAuthorsArray = []
            posts.forEach(post => {
                let data = post.data()
                let {author} = data
                let payload = {
                    author,
                }
                allAuthorsArray.push(payload)
            })
            let onlyAuthorsArray = allAuthorsArray.map(a => a.author);
            let authorsSet = new Set(onlyAuthorsArray)
            let uniqueAuthorsArray = [...authorsSet]
            setAuthors(uniqueAuthorsArray)
        }) 
        return () => unsubscribe()
    }, [])

    return(
        <div className="authorsContainer">
            <div className="headerContainer">
                <h1>Our Writers</h1>
                <hr className="headerHr"/>
            </div>
            <div className="authorButtonContainer">
                {_.map(authors, (author) => (
                    <div className="myAuthors" key={author}>
                        <NavLink to={`/author_posts/${author}`}>
                            <button size="large" className="authorButton">{author}</button>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default WritersDropdown;