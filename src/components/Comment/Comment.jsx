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
   <div style={{display: 'flex'}}> 
     <CardHeading comment>{name}</CardHeading>
     <CardSubheading>{date}</CardSubheading>
     </div>
     <CardBody comment>{comment}</CardBody>
   </CardWrapper>
 </div>
  );
};

export default Comment;
