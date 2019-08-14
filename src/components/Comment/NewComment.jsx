import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Button from '../Button.jsx';
import Comment from './Comment.jsx';
import firebase from '../Firebase/firebaseConfig.js';
import Input from '../Input.jsx';
import TextArea from '../TextArea.jsx';
import Botanic1 from '../../../public/images/botanic1.png';
import Botanic2 from '../../../public/images/botanic2.png';
import Botanic3 from '../../../public/images/botanic3.png';
import Botanic4 from '../../../public/images/botanic4.png';
import Botanic5 from '../../../public/images/botanic5.png';
import Botanic6 from '../../../public/images/botanic6.png';
import Botanic10 from '../../../public/images/botanic10.png';
import Botanic11 from '../../../public/images/botanic11.png';
import Botanic12 from '../../../public/images/botanic12.png';
import Botanic13 from '../../../public/images/botanic13.png';
import Botanic14 from '../../../public/images/botanic14.png';
import Botanic15 from '../../../public/images/botanic15.png';
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
  const [botanic, setBotanic] = useState();

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

  const handleSetBotanicIcon = () => {
    const botanicArray = [Botanic1, Botanic2, Botanic3, Botanic4, Botanic5, Botanic6, Botanic10, Botanic11, Botanic12, Botanic13, Botanic14, Botanic15];
    const random = Math.floor(Math.random() * botanicArray.length);
    const selectBotanic = botanicArray[random];
    setBotanic(selectBotanic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleSetBotanicIcon();
    const commentRef = firebase.database().ref(`blog/${id}/comments`);
    const newComment = {
      date,
      name,
      comment,
      botanic,
    };
    commentRef.push(newComment);
    setShowTextArea(false);
    setName('');
    setComment('');
    // setBotanic(null);
  };

  useEffect(() => {
    getData();
    return console.log('unmounting comments');
  }, []);

  useEffect(() => {
    const botanicArray = [Botanic1, Botanic2, Botanic3, Botanic4, Botanic5, Botanic6, Botanic10, Botanic11, Botanic12, Botanic13, Botanic14, Botanic15];
    const random = Math.floor(Math.random() * botanicArray.length);
    const selectBotanic = botanicArray[random];
    handleSetBotanicIcon(selectBotanic);
   
  });

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

  return (
    <div>
    { commentList !== {} ? displayComments : null }
      { showComments
        ? Object.keys(commentList).map(index => <Comment
          botanic={commentList[index].botanic}
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
