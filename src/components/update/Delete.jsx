import React from 'react';
import firebase from '../../firebaseConfig';
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
  }
  
  hideDeleteButton(){
    this.setState({showDeleteButton: false, showConfirmButton: true})
  }

  showDeleteButton(){
    this.setState({showDeleteButton: true, showConfirmButton: false})
  }

  handleDelete(e){
    event.preventDefault();
    // let id = this.props.id
    const blogRef = firebase.database().ref('blog/' + this.state.id ).remove();
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
        Are you sure you want to delete this Blawg?
        <form onSubmit={this.handleDelete}>
        <button 
          type="submit"
          className="buttons" 
          
        >Yes, delete! </button></form>
        <button 
          className="buttons"
          onClick={this.showDeleteButton}
        >Cancel</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Delete;