import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardSubheading,
} from './Card.jsx';
import NewComment from '../Comment/NewComment.jsx';
import Delete from '../Update/Delete.jsx';
import Edit from '../Update/Edit.jsx';
import FirebaseContext from '../Firebase/FirebaseContext.jsx';

function Card(props) {
  const [expand, setExpand] = useState(false);
  const context = useContext(FirebaseContext);
  const loggedIn = context.admin;
  return (
    <div>
      <CardWrapper>
        <CardHeader>
          <CardHeading>{props.title}</CardHeading>
          <CardSubheading>{props.date}</CardSubheading>
        </CardHeader>
        <CardBody> {props.body}</CardBody>
        {loggedIn ? <Edit body={props.body} date={props.date} id={props.id} title={props.title} />
          : null}
        {loggedIn ? <Delete id={props.id}/> : null}
        <NewComment id={props.id} />
      </CardWrapper>
    </div>
  );
}

Card.defaultProps = {
  title: 'Blog Title',
  body: 'Blog Body',
  date: 'today',
};

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
};

export default Card;
