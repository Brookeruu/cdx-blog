import React from 'react';
import firebase from '../../firebaseConfig';
import './index.css';

//get data by id# to edit - on a click - and when the component updates


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      id: this.props.id,
      title: this.props.title,
      body: this.props.body
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

   handleClick(e) {
    e.preventDefault();
   this.setState({ showModal: true});
  }

  closeModal(){
    this.setState({ showModal: false });
  };

  handleChange(e){
    this.setState({
      [event.target.name]: e.target.value
    })
  }

  handleSubmit(edit){
    event.preventDefault();
    // let id = this.state.id
    const blogRef = firebase.database().ref('blog/' + this.props.id ).set({
      title: this.state.title,
      body: this.state.body
    });
    this.setState({ showModal: false });
    console.log("submit state",this.props)
  };

  render(){
    return(
      <React.Fragment>
        <button 
          className="edit"
          onClick={(e) => this.handleClick(e)}
          type="button" 
        >Edit Blog</button>

      <div className={this.state.showModal ? "modal display-block" : "modal display-none"}>
        <div className="modal-main">
          <form 
            onSubmit={this.handleSubmit}
            noValidate
          >
            <input 
              type="text" 
              name="title"
              onChange={this.handleChange} 
              defaultValue={this.props.title} 
              required
            /><br/>
            <input 
              type="text" 
              name="date"          
              onChange={this.handleChange} 
              defaultValue={this.props.date}
              required  
            /><br/>
            <textarea 
              type="text" 
              name="body" 
              onChange={this.handleChange} 
              defaultValue={this.props.body}
              required
              className="text-area"

            ></textarea><br/>
          <button type="submit">Update</button> 
          <button type="button" onClick={this.closeModal} >Cancel</button>
          </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Edit;