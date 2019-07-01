import  {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardInput,
  CardSubheading
} from "./Card.jsx";
import Delete from '../Update/Delete.jsx';
import Edit from '../Update/Edit.jsx';
import PropTypes from 'prop-types';
import React from 'react';

function Card(props) {
  return(
    <div>
      <CardWrapper>
        <CardHeader>
          <CardHeading>{props.title}</CardHeading>
          <CardSubheading>{props.date}</CardSubheading>
        </CardHeader>
        <CardBody> {props.body}</CardBody>
      <Edit 
        body={props.body}
        date={props.date}
        id={props.id}
        title={props.title}
      />
      <Delete 
        id={props.id}
      />
      </CardWrapper>
    </div>
  )
};

Card.defaultProps = {
  title: "Blog Title",
  body: 'Blog Body',
  date: "today"
}

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string
}

export default Card;