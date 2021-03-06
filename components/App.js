import React from "react";
import PostContainer from "./PostViews/PostContainer/PostContainer"
import PostDetail from "./PostViews/PostDetail/PostDetail"
import PostCreatorForm from "./PostViews/PostCreatorForm/PostCreatorForm"
import PostEditForm from "./PostViews/PostEditForm/PostEditForm"
import SideNavbar from "./Commons/SideNavbar/SideNavbar"
import SignUp from "./AccountManagement/SignUp/SignUp"
import { Route, Switch } from "react-router-dom"

function App() {
    return (
      <>
      <SideNavbar />
      <div className="mainSwitch"> 
        <Switch>
          <Route path="/" exact render={() => <PostContainer />} />
          <Route path="/create_post/" exact render={() => <PostCreatorForm />} />
          <Route path="/post/:id" render={({ match }) => <PostDetail match={match}/>} />
          <Route path="/edit_post/:id" render={({ match }) => <PostEditForm match={match}/>} />
          <Route path="/signup/" exact render={() => <SignUp />} />        
        </Switch>
      </div>
      </>
    );
  }
  export default App;