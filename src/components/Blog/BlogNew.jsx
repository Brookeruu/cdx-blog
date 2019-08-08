import React from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebaseConfig';
import Button from '../Button.jsx';
import Date from './Date.jsx';
import './index.css';

export class NewBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  closeModal() {
    this.props.closeModal;
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDate(input) {
    this.setState({ date: input });
  }

  handleSubmit(event) {
    event.preventDefault();
    const blogRef = firebase.database().ref('blog/');
    const blog = {
      title: this.state.title,
      body: this.state.body,
      date: this.state.date,
    };
    blogRef.push(blog);
    this.setState({
      title: '',
      body: '',
      date: '',
    });
  }

  render() {
    return (
      <React.Fragment>
      <div className="modal-main">
        <form
          className="form"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Blog Title"
            onChange={this.handleChange}
            value={this.state.title}
            required
          /><br/>
          <Date onDate={this.handleDate} />
          <textarea
            type="text"
            name="body"
            placeholder="Text area ..."
            onChange={this.handleChange}
            value={this.state.body}
            required
            className="text-area"
          ></textarea><br/>
          <Button edit>Add New</Button>
          <Button>close</Button>
          <button type="submit" onClick={this.props.closeModal}>Add New Blog</button>
          <button type="button" onClick={this.props.closeModal} >close</button>
        </form>
        </div>
      </React.Fragment>
    );
  }
}

NewBlog.propTypes = {
  closeModal: PropTypes.func,
};
export default NewBlog;
