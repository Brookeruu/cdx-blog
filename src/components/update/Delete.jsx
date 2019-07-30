import firebase from '../../firebaseConfig';
import React from 'react';
import './index.css';

export class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteButton: true,
      showConfirmButton: false,
      id: this.props.id
    }
    this.hideDeleteButton = this.hideDeleteButton.bind(this);
    this.showDeleteButton = this.showDeleteButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  hideDeleteButton(){
    this.setState({showDeleteButton: false, showConfirmButton: true})
  }

  showDeleteButton(){
    this.setState({showDeleteButton: true, showConfirmButton: false})
  }

  handleSubmit(e){
    event.preventDefault();
    const blogRef = firebase.database().ref(`blog/${this.props.id}`).remove();
  }

  render(){
    return(
      <React.Fragment>
        <button 
        className={this.state.showDeleteButton ? "delete" : "delete display-none"}
        onClick={this.hideDeleteButton}
        >Delete Entry</button>
        
        <div 
        className={this.state.showConfirmButton ? "confirm" : "display-none"}>
        <p>Are you sure you want to delete this Blawg?</p>
          <form onSubmit={this.handleSubmit}>
            <button 
              className="buttons cancel"
              onClick={this.showDeleteButton}
              type="button"
            >Cancel</button>
             <button 
              type="submit"
              className="buttons delete"
              onClick={this.showDeleteButton}  
            >Yes, delete! </button>
        </form>
         
        </div>
      </React.Fragment>
    )
  }
}

export default Delete;