import React from 'react';
import firebase from '../../firebaseConfig';
import './index.css';
import Button from '../Button.jsx';

export class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteButton: true,
      showConfirmButton: false,
      id: this.props.id,
    };
    this.hideDeleteButton = this.hideDeleteButton.bind(this);
    this.showDeleteButton = this.showDeleteButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hideDeleteButton() {
    this.setState({ showDeleteButton: false, showConfirmButton: true });
  }

  showDeleteButton() {
    this.setState({ showDeleteButton: true, showConfirmButton: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase.database().ref(`blog/${this.props.id}`).remove();
  }

  render() {
    return (
      <React.Fragment>
        <Button
          delete
          className={this.state.showDeleteButton ? '' : 'display-none'}
          onClick={this.hideDeleteButton}
        >Delete Entry</Button>
        <div
        className={this.state.showConfirmButton ? 'confirm' : 'display-none'}>
        <p>Are you sure you want to delete this Blawg?</p>
          <form onSubmit={this.handleSubmit}>
            <Button
              onClick={this.showDeleteButton}
              type="button"
            >Cancel</Button>
             <Button
              delete
              type="submit"
              onClick={this.showDeleteButton}
            >Yes, delete! </Button>
        </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Delete;
