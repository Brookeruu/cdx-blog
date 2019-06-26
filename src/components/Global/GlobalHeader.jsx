import React from 'react';
import PropTypes from 'prop-types';
// import './Global.css';

class GlobalHeader extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isActive: false
    }
  }

  render(){
    return(
     
        <div 
          style={{ backgroundColor: 'black', 
                    color: 'white',
                    height: '4rem',
                    position: 'relative',
                    margin: 'auto',
                    paddingLeft: '2rem',
                    display: 'flex',
                    alignItems: 'center'}}
        >
          Blogg Blawg Blog
      </div>
    )
  }
}

export default GlobalHeader;
