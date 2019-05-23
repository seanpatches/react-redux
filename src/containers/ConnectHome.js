import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import { addPost } from '../actions/postActions';
import Home from '../components/Home.js';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body){
    dispatch(addPost(title, body));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
