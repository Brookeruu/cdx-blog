import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebaseConfig';
import Button from '../Button.jsx';
import Input from '../Input.jsx';
import Date from './Date.jsx';
import TextArea from '../TextArea.jsx';

import './index.css';

const NewBlogHook = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  // const [isActive, setIsActive] = useState(false);
  const node = useRef();

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

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    props.closeModal();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="modal-main" ref={node}>
        <form
          className="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <Date onDate={handleDate} className="date"/>
          <Input
            type="text"
            name="title"
            placeholder="Blog Title"
            onChange={handleTitle}
            value={title}
            required
          />
          <TextArea
            type="text"
            name="body"
            placeholder="Text area ..."
            onChange={handleBody}
            value={body}
            required
            className="text-area" />
          <Button type="submit" onClick={props.closeModal}>Add New</Button>
          <Button delete type="button" onClick={props.closeModal}>Cancel</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

NewBlogHook.propTypes = {
  closeModal: PropTypes.func,
};

export default NewBlogHook;
