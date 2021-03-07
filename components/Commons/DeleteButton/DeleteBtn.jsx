import React from "react";
import { useHistory } from "react-router"
import db from "../../../firebase"
import "./DeleteBtn.css"

function DeleteBtn(props) {      

    let history = useHistory()

    const onDelete = (event => {
        let postRef = db.collection("blogPosts").doc(props.id);
        postRef.delete();
        history.push("/")
    })

    return (
        <div className="deleteContainer">       
            <h4 className="deletetLink" onClick={onDelete}>Delete</h4>
        </div>
    );
}

export default DeleteBtn;