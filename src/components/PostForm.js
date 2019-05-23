import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, body } = this.state;
    this.props.onSubmit(title, body);
    this.setState({ title: '', body: '' });
  }
  
  render(){
    const { title, body } = this.state;
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={title} placeholder="Title here" onChange={this.handleChange}></input>
        <textarea name="body" value={body} placeholder="Title here" onChange={this.handleChange}></textarea>
        <button>Submit Post</button>
      </form>
    </>
    );
  }
}
