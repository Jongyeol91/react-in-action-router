import React from 'react';
import Router from "./router/Router";
import Route from "./router/Route"
import Parent from "./components/Parent";
import SinglePost from "./components/SinglePost";

function App() {
  return(
      <Router location="/">
        <Route path="/" component={Parent}>
          <Route path="/posts/:postId" component={SinglePost}/>
        </Route>
      </Router>
  )
}

export default App
