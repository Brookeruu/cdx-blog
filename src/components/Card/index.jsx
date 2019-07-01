import React from 'react';
import PropTypes from 'prop-types';
import Edit from '../update/Edit.jsx';
// import css from './index.css';

import  {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardInput
} from "./Card.jsx";

function Card(props) {
  return(
    <div>
      <CardWrapper>
        <CardHeader>
          <CardHeading>{props.title}</CardHeading>
        </CardHeader>
        <CardBody> {props.body}
          {/* <CardInput>
            {props.body}
          </CardInput> */}
        </CardBody>
      <Edit 
        body={props.body}
        date={props.date}
        id={props.id}
        title={props.title}

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