import React from 'react';
import { CardHeading, CardSubheading, CardBody, CardWrapper } from '../Card/Card.jsx';
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


const Comment = (props) => {
  const {
    comment,
    date,
    name,
   commentList,
    ...rest
  } = props;

  const botanicArray = [Botanic1, Botanic2, Botanic3, Botanic4, Botanic5, Botanic6, Botanic10, Botanic11, Botanic13, Botanic14, Botanic15];
  const random = Math.floor(Math.random() * botanicArray.length);
  const botanic = botanicArray[random];
  console.log(botanic)

  return (
 <div>
   <CardWrapper comment>
   <div style={{display: 'flex', alignItems: 'baseline'}}>
     <img src={botanic} className="botanic-icon"></img>
   <div>
      <CardHeading style={{textTransform: 'capitalize'}}comment>{name}</CardHeading>
      <CardSubheading comment>{date}</CardSubheading>
      <CardBody comment>{comment}</CardBody>
     </div>
   </div>
   </CardWrapper>
 </div>
  );
};

export default Comment;
