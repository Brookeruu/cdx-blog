import React from 'react';
import firebase from '../../firebaseConfig';
import './index.css';
import Button from '../Button.jsx';
import Date from '../Blog/Date.jsx';
import Input from '../Input.jsx';
import TextArea from '../TextArea.jsx';


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      date: this.props.date,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase.database().ref(`blog/${this.props.id}`).set({
      title: this.state.title,
      body: this.state.body,
      date: this.state.date,
    });
    this.setState({ showModal: false });
  }

  render() {
    return (
      <React.Fragment>
        <Button 
        edit
        onClick={e => this.handleClick(e)}
        type="button"
        >Edit Blog</Button>

      <div className={this.state.showModal ? 'modal display-block' : 'modal display-none'}>
        <div className="modal-main">
          <form
            onSubmit={this.handleSubmit}
            noValidate
          >
           <Date
              type="text"
              name="date"
              className="date"
              onChange={this.handleChange}
              defaultValue={this.props.date}
              required
            />
            <Input
              type="text"
              name="title"
              onChange={this.handleChange}
              defaultValue={this.props.title}
              required
            />
            <TextArea
              type="text"
              name="body"
              onChange={this.handleChange}
              defaultValue={this.props.body}
              required
              className="text-area"

            ></TextArea>
          <Button type="submit">Update</Button>
          <Button delete type="button" onClick={this.closeModal}>Cancel</Button>
          </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit;
