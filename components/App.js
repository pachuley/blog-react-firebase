import React from "react";
import PostContainer from "./PostContainer/PostContainer"
import PostDetail from "./PostDetail/PostDetail"
import PostCreatorForm from "./PostCreatorForm/PostCreatorForm"
import SideNavbar from "./SideNavbar/SideNavbar"
import { Route, Switch } from "react-router-dom"

function App() {
    return (
      <>
      <SideNavbar />
      <div className="mainSwitch"> 
        <Switch>
          <Route path="/" exact render={() => <PostContainer />} />
          <Route path="/post/:id" render={({ match }) => <PostDetail match={match}/>} />
          <Route path="/createpost/" exact render={() => <PostCreatorForm />} />
        </Switch>
      </div>
      </>
    );
  }
  export default App;