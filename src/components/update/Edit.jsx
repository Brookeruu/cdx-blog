import React, { useState, useRef, useEffect } from 'react';
import firebase from '../Firebase/firebaseConfig.js';
import Button from '../Button.jsx';
import Date from '../Blog/Date.jsx';
import Input from '../Input.jsx';
import TextArea from '../TextArea.jsx';
import moment from 'moment';
import './index.css';

const Edit = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [date, setDate] = useState(props.date);
  const node = useRef();

  const toggleShowModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleDate = (input) => {
    setDate(input);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.database().ref(`blog/${id}`).set({
      title,
      body,
      date,
    });
    setShowModal(false);
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowModal(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <React.Fragment>
      <Button 
      edit
      onClick={e => toggleShowModal(e)}
      type="button"
      >Edit Blog</Button>
      <div className={showModal ? 'modal display-block' : 'modal display-none'}>
        <div className="modal-main" ref={node}>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            noValidate
          >
           <Date
              onDate={handleDate}
              type="text"
              name="date"
              className="date"
              onChange={handleDate}
              selected={date}
              required
            />
            <Input
              type="text"
              name="title"
              onChange={handleTitle}
              defaultValue={props.title}
              required
            />
            <TextArea
              type="text"
              name="body"
              onChange={handleBody}
              defaultValue={props.body}
              required
              className="text-area"
            ></TextArea>
            <Button type="submit">Update</Button>
            <Button delete type="button" onClick={toggleShowModal}>Cancel</Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Edit;
