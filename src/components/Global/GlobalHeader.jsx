import Modal from '../Modal/Modal.jsx';
import NewBlog from '../Blog/BlogNew.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

class GlobalHeader extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isActive: false,
      showModal: false
    }
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

    componentDidMount() {
    this._isMounted = true;
  }

  showModal(){
    this.setState({ showModal: true })
  }

  hideModal(){
    this.setState({ showModal: false })
    console.log("global - closeModal")
  }

  // componentDidUpdate(prevState){
  //   if(this.state.showModal !== prevState.showModal){
  //     this.setState({showModal: false })
  //   }
  // }

  componentWillUnMount(){
    this._isMounted = false;
  }
  render(){
    return(
     <div>
      <img 
        alt={"laptop"} 
        className="image"
        src={require("/Users/brookeperry/Dev/connective/my-blog/public/images/laptop5.png")}
      ></img>
    
        <div className="global-header">
          <p className="blawg"> Blawg </p>

          <p 
            className="add-new" 
            onClick={this.showModal}
          > New Entry
          </p>
          
          <a href="https://console.firebase.google.com/u/0/project/my-blog-677b8/overview" target="_blank">
            <img 
            src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="firebase"
            style={{
              maxHeight: '2.75em',
              marginRight: '2rem'
            }}></img>
          </a>

          <div className={this.state.showModal ? "modal display-block" : "modal display-none"} >
            <NewBlog closeModal={this.hideModal}/>
          </div>

           </div>
      </div>
    )
  }
}

export default GlobalHeader;
