import React from "react";
import PostContainer from "./PostContainer/PostContainer"
import PostDetail from "./PostDetail/PostDetail"
import PostCreatorForm from "./PostCreatorForm/PostCreatorForm"
import { Route, Switch } from "react-router-dom"

function App() {
    return (
      <>
      <Switch>
        <Route path="/" exact render={() => <PostContainer />} />
        <Route path="/post/:id" render={({ match }) => <PostDetail match={match}/>} />
        <Route path="/createpost/" exact render={() => <PostCreatorForm />} />
      </Switch>
      </>
    );
  }
  export default App;