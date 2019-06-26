import firebase from '../../firebaseConfig';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

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
    })
  }


  render(){
    console.log("statet",this.state)
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Blog Title" onChange={this.handleChange} value={this.state.title} /><br/>
          <input type="text" name="date" placeholder="Date" onChange={this.handleChange} value={this.state.date} /><br/>
          <textarea type="text" name="body" placeholder="Write content here" onChange={this.handleChange} value={this.state.body}></textarea>
        <button type="submit">Submit</button>
        </form>
        <p>title: {this.state.title} </p>
         <p>body: {this.state.body} </p>
          <p>date: {this.state.date} </p>
      </React.Fragment>
    )
  }
}
export default NewBlog;


// Trying to learn for hooks below. Saved to apply to later component:
  // const initialState = {
  //   title: '',
  //   body: '',
  //   date: '',
  // }

  // const [state, setState] = useState(initialState);

  // const [title, setTitle] = useState();
  // const [body, setBody] = useState();
  // const [date, setDate] = useState();

  // function handleChange(event) {
    // let newValue = event.target.value;
    // event.persist();
    // setState(state => ({...state, [event.target.name]: event.target.value}));
  //   console.log(state)
  // }