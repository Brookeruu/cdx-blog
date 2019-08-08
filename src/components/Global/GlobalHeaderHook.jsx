import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewBlog from '../Blog/BlogNew.jsx';
import blogImage from '../../../public/images/pineapple-resize.png';
import NewBlogHook from '../Blog/BlogNewHook.jsx';
import githubIcon from '../../../public/images/github-icon.png';
import linkedinIcon from '../../../public/images/linkedin-icon.png';
import pencilIcon from '../../../public/images/pencil-icon.png';
import paperPlaneIcon from '../../../public/images/paper-plane-icon.png';
import Typewriter from '../Typewriter/Typewriter.jsx';
import './index.css';

const GlobalHeaderHook = () => {
  const [showModal, setShowModal] = useState(false);
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     const isTop = window.scrollY < 500;
  //     if (isTop !== true) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener('scroll');
  //   };
  // }, []);

  const isModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
        <img
          alt={'laptop'}
          className="image"
          src={blogImage}
        ></img>

        <div className='global-header'>
         <div className="typewriter">
           <Typewriter />
        </div>
          <div className="links">
            <img
              className="add-new"
              onClick={isModal}
              src={pencilIcon} alt="github"
              className="icons"
            ></img>

            <a href="https://console.firebase.google.com/u/0/project/my-blog-677b8/overview" target="_blank">
              <img
              src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="firebase"
              className="icons"
              ></img>
            </a>
            <img
              className="icons"
              src={paperPlaneIcon} alt="email icon"
            ></img>

            <a href="https://www.linkedin.com/in/perry-brooke/" target="_blank">
              <img
              src={linkedinIcon} alt="linkedin"
              className="icons"
              ></img>
            </a>

            <a href="https://github.com/Brookeruu" target="_blank">
              <img
              src={githubIcon} alt="github"
              className="icons"
              ></img>
            </a>
          </div>
          <div className={showModal ? 'modal display-block' : 'modal display-none'} >
            <NewBlogHook closeModal={hideModal}/>
          </div>

           </div>
      </div>
  );

};

export default GlobalHeaderHook;
