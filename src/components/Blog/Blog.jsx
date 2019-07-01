import Card from '../Card/index.jsx';
import firebase from '../../firebaseConfig';
import PropTypes from 'prop-types';
import React from 'react';

export class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: {}
    }
  }

  getData(){
    let newList;
    let ref = firebase.database().ref('blog/')
    ref.on('value', (snap) => {
        newList = Object.assign({}, snap.val());
        this.setState({list: newList})
      });
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    return(
      <div>
      { 
        Object.keys(this.state.list).map(index =>
        <Card 
          title={this.state.list[index].title}
          body={this.state.list[index].body}
          date={this.state.list[index].date}
          key={index}
          id={index}
        />
        )
      }
      </div>
    )
  }
}

export default Blog;