import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { comment } = this.state;
    this.props.onSubmit(comment);
    this.setState({ comment: '' });
  }
  
  render(){
    const { comment } = this.state;
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <input name="comment" value={comment} placeholder="Comment here" onChange={this.handleChange}></input>
        <button>Submit Comment</button>
      </form>
    </>
    );
  }
}
