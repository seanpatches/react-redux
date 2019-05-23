import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ConnectPosts from '../containers/ConnectHome';
export default function App(){
  return (
  <>
    <Router>
      <Switch>
        <Route path="/" component={ConnectPosts} />
        {/* <Route path="/comments/:{} component={CreatePost} /> */}
      </Switch>
    </Router>
  </>
  );
}
