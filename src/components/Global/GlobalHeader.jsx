import React from 'react';
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

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      showModal: false,
      scroll: false,
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== true) {
        this.setState({ scroll: true });
      } else {
        this.setState({ scroll: false });
      }
    });
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  componentWillUnMount() {
    this._isMounted = false;
    window.removeEventListener('scroll');
  }

  render() {
    return (
     <div>
        <img
          alt={'laptop'}
          className="image"
          src={blogImage}
        ></img>

        <div className={this.state.scroll ? 'global-header sticky' : 'global-header'}>
         <div className="typewriter">
           <Typewriter />
        </div>
          <div className="links">
            <img
              className="add-new"
              onClick={this.showModal}
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

          {/* <div className={this.state.showModal ? 'modal display-block' : 'modal display-none'} >
            <NewBlog closeModal={this.hideModal}/>
          </div> */}

          <div className={this.state.showModal ? 'modal display-block' : 'modal display-none'} >
            <NewBlogHook closeModal={this.hideModal}/>
          </div>

           </div>
      </div>
    );
  }
}

export default GlobalHeader;
