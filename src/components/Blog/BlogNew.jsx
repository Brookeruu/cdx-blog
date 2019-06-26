import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NewBlog = props => {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [date, setDate] = useState();

  function onSubmit(e){
    e.preventDefault();
    titleHandler
  }

  const titleHandler = event => {
    const title = event.target.value;
    setTitle(title);
    console.log("titleHandler:", titleHandler);
  };




  return(
    <React.Fragment>
      <form >
      <input 
        type="text"
        // onChange={titleHandler}
      ></input>
      <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  )
}
export default NewBlog;