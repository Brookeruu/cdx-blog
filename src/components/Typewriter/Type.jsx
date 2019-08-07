import React, { useState, useEffect } from 'react';

export const Typewriter = (props) => {

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(5000);

  const handleType = () => {
    const { dataText } = props;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    const textFunc = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    // const speed = isDeleting ? 3000 : 5000
    setText(textFunc);
    // setTypingSpeed(speed);

    if (!isDeleting && text === fullText) {
      setInterval(() => setIsDeleting(true), 3000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
    // setTimeout(()=>handleType(), typingSpeed);
  };


  return (
    <div>
    <p>{ props.heading }&nbsp;
        <span>{ text }</span>
        <span id="cursor"></span>
      </p>
    </div>
  );
};

export default Typewriter;
