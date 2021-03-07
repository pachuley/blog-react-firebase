import React, {useState} from "react";
import { Route, Switch } from "react-router-dom"
import {auth} from "../firebase"
import PostContainer from "./PostViews/PostContainer/PostContainer"
import PostDetail from "./PostViews/PostDetail/PostDetail"
import PostCreatorForm from "./PostViews/PostCreatorForm/PostCreatorForm"
import PostEditForm from "./PostViews/PostEditForm/PostEditForm"
import SideNavbar from "./Commons/SideNavbar/SideNavbar"
import SignUp from "./AccountManagement/SignUp/SignUp"
import LogIn from "./AccountManagement/LogIn/LogIn"


function App() {

  const [user, setUser] = useState(false)

  auth.onAuthStateChanged(function (user) {
    if(user) {
      setUser(true)
    } else {
      setUser(false)
    }
  })

  return (
    <>
      <SideNavbar user={user}/>
      <div className="mainSwitch"> 
        <Switch>
          <Route path="/" exact render={() => <PostContainer />} />
          <Route path="/create_post/" exact render={() => <PostCreatorForm />} />
          <Route path="/post/:id" render={({ match }) => <PostDetail match={match} user={user}/>} />
          <Route path="/edit_post/:id" render={({ match }) => <PostEditForm match={match}/>} />
          <Route path="/sign_up/" exact render={() => <SignUp />} />      
          <Route path="/log_in/" exact render={() => <LogIn />} />    
        </Switch>
      </div>
    </>
  );
}

export default App;