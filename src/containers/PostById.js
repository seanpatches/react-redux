import { connect } from 'react-redux';
import { getPost } from '../selectors/postSelectors';
import PostDetails from '../components/posts/PostDetails';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.postId)
});

export default connect(
  mapStateToProps
)(PostDetails);
