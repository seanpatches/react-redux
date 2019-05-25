import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ConnectPosts from '../containers/ConnectHome';
import PostById from '../containers/PostById';
export default function App(){
  return (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={ConnectPosts} />
        <Route path="/comments/:postId" component={PostById} />
      </Switch>
    </Router>
  </>
  );
}
