import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Button from '../Button.jsx';
import Comment from './Comment.jsx';
import firebase from '../Firebase/firebaseConfig.js';
import Input from '../Input.jsx';
import TextArea from '../TextArea.jsx';
import './index.css';

const NewComment = (props) => {
  const {
    children,
    id,
    ...rest
  } = props;

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState({});
  const [name, setName] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [date, setDate] = useState(() => {
    const newDate = moment(new Date()).format('LL');
    return newDate;
  });

  const toggleShowTextArea = (e) => {
    e.preventDefault();
    setShowTextArea(!showTextArea);
  };

  const getData = () => {
    const ref = firebase.database().ref(`blog/${id}/comments/`);
    ref.on('value', (snap) => {
      const newList = Object.assign({}, snap.val());
      setCommentList(newList);
    });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleShowComments = (e) => {
    e.preventDefault();
    setShowComments(!showComments);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentRef = firebase.database().ref(`blog/${id}/comments`);
    const newComment = {
      date,
      name,
      comment,
    };
    commentRef.push(newComment);
    setShowTextArea(false);
    setName('');
    setComment('');
  };

  useEffect(() => {
    getData();
    return console.log('unmout comments');
  }, []);

  const commentText = (
    <TextArea
      type="text"
      name="comment"
      placeholder="Comment here..."
      onChange={handleComment}
      value={comment}
      required
      comment
    />
  );

  const commentName = (
    <Input onChange={handleName} comment placeholder="Your display name..." />
  );

  const displayComments = (
    <p onClick={handleShowComments} className="show-comments">{showComments ? 'Hide Comments' : 'Display Comments'}</p>
  );

  console.log('COMMENT', commentList);
  return (
    <div>
    { commentList !== {} ? displayComments : null }
      { showComments
        ? Object.keys(commentList).map(index => <Comment
          comment={commentList[index].comment}
          name={commentList[index].name}
          date={commentList[index].date}
          key={index} />)
        : null
      }
      <Button comment onClick={toggleShowTextArea} edit>Leave a comment</Button>
      <div>
        { showTextArea ? commentName : null }
        { showTextArea ? commentText : null }
      </div>
        { showTextArea ? <Button comment type="submit" onClick={handleSubmit}>Submit</Button> : null }
    </div>
  );
};

export default NewComment;
