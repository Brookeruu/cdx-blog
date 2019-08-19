import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import array from './components/BotanicArray.jsx';
import Button from './components/Button.jsx';
import './App.css';

export const Error404 = () => {
  const [botanic, setBotanic] = useState(() => {
    const BotanicArray = array;
    const random = Math.floor(Math.random() * BotanicArray.length);
    return BotanicArray[random];
  });

  const handleReturnHome = (e) => {
    console.log("home")
    return <Route path='/' />;
  };

  return (
    <div className='error'>
        <div style={{display: 'block'}}>Uh oh. Something went wrong.
          <Link to='/'>
            <Button className='error-button'>Return to Blog</Button>
          </Link>
        </div>
      <img src={botanic} className='error-image'></img>
    </div>
  );
};

export default Error404;
