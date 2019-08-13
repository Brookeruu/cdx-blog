import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebaseConfig.js';
import './index.css';
import Button from '../Button.jsx';

const Delete = (props) => {
  const [deleteButton, setDeleteButton] = useState(true);
  const [confirmButton, setConfirmButton] = useState(false);
  const id = props.id;

  const toggleDeleteButton = () => {
    setDeleteButton(!deleteButton);
    setConfirmButton(!confirmButton);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.database().ref(`blog/${props.id}`).remove();
  };

  return(
    <React.Fragment>
      <Button
        delete
        className={deleteButton ? '' : 'display-none'}
        onClick={toggleDeleteButton}
      >Delete Entry</Button>
       <div
        className={confirmButton ? 'confirm' : 'display-none'}>
        <p>Are you sure you want to delete this blog?</p>
          <form onSubmit={handleSubmit}>
            <Button
              onClick={toggleDeleteButton}
              type="button"
            >Cancel</Button>
             <Button
              delete
              type="submit"
              onClick={toggleDeleteButton}
            >Yes, delete! </Button>
        </form>
        </div>
    </React.Fragment>
  );
};

export default Delete;
