import React from 'react';
import {
  CardHeading,
  CardSubheading,
  CardBody,
  CardWrapper,
} from '../Card/Card.jsx';

const Comment = (props) => {
  const {
    botanic,
    comment,
    date,
    name,
    commentList,
    ...rest
  } = props;

  return (
 <div>
   <CardWrapper comment>
   <div style={{ display: 'flex', alignItems: 'baseline' }}>
     <img src={botanic} className="botanic-icon"></img>
   <div>
      <CardHeading style={{ textTransform: 'capitalize' }}comment>{name}</CardHeading>
      <CardSubheading comment>{date}</CardSubheading>
      <CardBody comment>{comment}</CardBody>
     </div>
   </div>
   </CardWrapper>
 </div>
  );
};

export default Comment;
