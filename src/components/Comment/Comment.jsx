import React from 'react';
import { CardHeading, CardSubheading, CardBody, CardWrapper } from '../Card/Card.jsx';

const Comment = (props) => {
  const {
    comment,
    date,
    name,
   commentList,
    ...rest
  } = props;
  console.log("PROPS: ", props)

  return (
 <div>
   <CardWrapper comment>
     <CardHeading style={{textTransform: 'capitalize'}}comment>{name}</CardHeading>
     <CardSubheading comment>{date}</CardSubheading>
     <CardBody comment>{comment}</CardBody>
   </CardWrapper>
 </div>
  );
};

export default Comment;
