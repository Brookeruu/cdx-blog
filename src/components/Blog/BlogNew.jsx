import firebase from '../../firebaseConfig';
// import moment from 'react-moment';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import './index.css';

export class NewBlog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      date: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  closeModal() {
    this.props.closeModal
    console.log("closemodal")
  }

  componentWillUnMount(){
    this._isMounted = false;
  }
    
  handleChange(e){
    this.setState({
      [event.target.name]: e.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const blogRef = firebase.database().ref('blog/' )
    const blog = {
      title: this.state.title,
      body: this.state.body,
      date: this.state.date
    }
    blogRef.push(blog);
    this.setState({
      title: '',
      body: '',
      date: ''
    });
  }

 


  render(){
  
    return(
      <React.Fragment>
      <div className="modal-main">
        <form 
          onSubmit={this.handleSubmit}
          noValidate
        >
          <input 
            type="text" 
            name="title" 
            placeholder="Blog Title" 
            onChange={this.handleChange} 
            value={this.state.title} 
            required
          /><br/>
          <input 
            type="text" 
            name="date"          
            placeholder="Date"
            onChange={this.handleChange} 
            value={this.state.date}
            required  
          /><br/>
          <textarea 
            type="text" 
            name="body" 
            placeholder="Blog goes here"
            onChange={this.handleChange} 
            value={this.state.body}
            required
            className="text-area"

          ></textarea><br/>
        <button type="submit" onClick={this.props.closeModal}>Add New Blog</button> 
        <button type="button" onClick={this.props.closeModal} >close</button>
        </form>
        </div>
      </React.Fragment>
    )
  }
}
export default NewBlog;
