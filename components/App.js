import React, {useState} from "react";
import { Route, Switch } from "react-router-dom"
import { auth } from "../firebase"
import PostContainer from "./PostViews/PostContainer/PostContainer"
import PostDetail from "./PostViews/PostDetail/PostDetail"
import PostCreatorForm from "./PostViews/PostCreatorForm/PostCreatorForm"
import PostEditForm from "./PostViews/PostEditForm/PostEditForm"
import AuthorPosts from "./PostViews/AuthorPosts/AuthorPosts"
import SideNavbar from "./Commons/SideNavbar/SideNavbar"
import SignUp from "./AccountManagement/SignUp/SignUp"
import LogIn from "./AccountManagement/LogIn/LogIn"
import WritersDropdown from "./Commons/WritersDropdown/WritersDropdown"
//import ProfileForm from "./Commons/ProfileForm/ProfileForm"
import 'regenerator-runtime/runtime'

function App() {

  const [user, setUser] = useState(false)

  auth.onAuthStateChanged(function (user) {
    if(user) {
      setUser(user)
    } else {
      setUser(false)
    }
  })

  return (
    <>
      <SideNavbar user={user}/>
      <div className="mainSwitch"> 
        <Switch>
          <Route path="/" exact render={() => <PostContainer user={user}/>} />
          <Route path="/create_post/" exact render={() => <PostCreatorForm user={user}/>} />
          <Route path="/blogs/:author/post/:id" render={({ match }) => <PostDetail match={match} user={user}/>} />
          <Route path="/edit_post/:id" render={({ match }) => <PostEditForm match={match} user={user}/>} />
          <Route path="/author_posts/:email" exact render={({ match }) => <AuthorPosts match={match} user={user}/>} />
          <Route path="/sign_up/" exact render={() => <SignUp />} />
          <Route path="/log_in/" exact render={() => <LogIn />} />
          {/*<Route path="/profile" exact render={() => <ProfileForm user={user}/>} />*/}
          <Route path="/writers" exact render={() => <WritersDropdown />} />
        </Switch>
      </div>
    </>
  );
}

export default App;