import React from "react";
import PostContainer from "./PostContainer/PostContainer"
import PostDetail from "./PostDetail/PostDetail"
import PostCreatorForm from "./PostCreatorForm/PostCreatorForm"
import PostEditForm from "./PostEditForm/PostEditForm"
import SideNavbar from "./SideNavbar/SideNavbar"
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
        </Switch>
      </div>
      </>
    );
  }
  export default App;