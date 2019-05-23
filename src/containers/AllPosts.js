import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { getPosts } from '../selectors/postSelectors';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

export default connect(
  mapStateToProps,
  null
)(Posts);
