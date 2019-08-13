import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import blogImage from '../../../public/images/pineapple-resize.png';
import FirebaseContext from '../Firebase/FirebaseContext.jsx';
import githubIcon from '../../../public/images/github-icon.png';
import linkedinIcon from '../../../public/images/linkedin-icon.png';
import NewBlog from '../Blog/BlogNew.jsx';
import paperPlaneIcon from '../../../public/images/paper-plane-icon.png';
import pencilIcon from '../../../public/images/pencil-icon.png';
import Typewriter from '../Typewriter/Typewriter.jsx';
import './index.css';

const GlobalHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const context = useContext(FirebaseContext);
  const loggedIn = context.admin;

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     const isTop = window.scrollY < 500;
  //     console.log(scrollY)
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

  const displayPencil = (<img
      className="add-new"
      onClick={isModal}
      src={pencilIcon} alt="github"
      className="icons"
    ></img>);

  const displayFirebase = (<a
      href="https://console.firebase.google.com/u/0/project/my-blog-677b8/overview" target="_blank">
    <img
      src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="firebase"
      className="icons"
      ></img>
    </a>);

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
            {loggedIn ? displayPencil : null}
            {loggedIn ? displayFirebase : null}
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
            <NewBlog closeModal={hideModal} />
          </div>

           </div>
      </div>
  );
};

export default GlobalHeader;
