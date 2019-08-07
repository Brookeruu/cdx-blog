import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function Typewriter() {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(130);

  useInterval(() => {
    const dataText = ['  Hi, I\'m Brooke. Welcome to my blawg.'];
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    setText(isDeleting ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1));

    if (!isDeleting && text === fullText) {
      setTypingSpeed(50);
      setInterval(() => (setIsDeleting(true)), typingSpeed);
    } else if (isDeleting && text === '') {
      setLoopNum(loopNum + 1);
      setIsDeleting(false);
    }
  }, typingSpeed);
  return (<span>{text}<span id="cursor"></span></span>);
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // func that holds the value of current ref
      savedCallback.current();
    }
    if (delay === 130) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Typewriter;
