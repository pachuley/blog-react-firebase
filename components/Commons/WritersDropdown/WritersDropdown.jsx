import React, { useEffect, useState } from "react";
import db from "../../../firebase"
import _ from "lodash"
import "./WritersDropdown.css"

function WritersDropdown(props) {

    const [writers, setWriters] = useState([])
    //let userId = props?.user.uid ? props.user.uid : props.match.params.uid

    useEffect(() => {

        db.collection("sports").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
        


        /*const fetchUsers = async() => {
            let response = db.collection("users");
            let data = await response.listDocuments()
            console.log("data", data)
            console.log("data.docs", data.docs)
        }*/


        /*let response = db.collection("users");
        let data = await response.get()
        console.log("data", data)
        console.log("data.docs", data.docs)
        const unsubscribe = usersRef
            .onSnapshot(users => {
                console.log("aqui esta users del onsnapchot", users)
            let usersArray = []
            users.forEach(user => {
                console.log("user en el foreach",user)
                let data = user.data()
                console.log(data)
                let { uid } = user
                let payload = {
                    uid,
                    ...data
                }
                usersArray.push(payload)
            })
            setWriters(usersArray)
        }) 
        return () => unsubscribe()*/
    }, [/*userId*/])

    return(
        <div className="postContainer">
            {/*<div className="headerContainer">
                <h1>Our Writers</h1>
                <hr className="headerHr"/>
            </div>
            <div className="postContentContainer">
                {_.map(writers, (user) => (
                    <div className="individualPosts" key={user.uid}>
                        <h6>{user.email}</h6>
                    </div>
                ))}
                </div>*/}
        </div>
    )
}
export default WritersDropdown;