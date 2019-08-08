import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebaseConfig';
import Date from './Date.jsx';
import './index.css';

const NewBlogHook = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleDate = (input) => {
    setDate(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogRef = firebase.database().ref('blog/');
    const blog = {
      title,
      body,
      date,
    };
    blogRef.push(blog);
    setTitle('');
    setBody('');
    setDate('');
  };


  return (
    <React.Fragment>
      <div className="modal-main">
        <form
          className="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Blog Title"
            onChange={handleTitle}
            value={title}
            required
          /><br/>
          <Date onDate={handleDate} />
          <textarea
            type="text"
            name="body"
            placeholder="Text area ..."
            onChange={handleBody}
            value={body}
            required
            className="text-area"
          ></textarea><br/>
          <button type="submit" onClick={props.closeModal}>Add New Blog</button>
          <button type="button" onClick={props.closeModal} >close</button>
        </form>
      </div>
    </React.Fragment>
  );
};

NewBlogHook.propTypes = {
  closeModal: PropTypes.func,
};

export default NewBlogHook;
