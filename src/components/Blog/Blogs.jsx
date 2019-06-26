import Card from '../Card/index.jsx';
import firebase from '../../firebaseConfig';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const Blogs = props => {
  
// const database = firebase.database().ref('blog/');


const [blogList, setBlogList] = useState()
  let list;

useEffect(() => {
  const database = firebase.database().ref('blog/');
  let ref = firebase.database().ref('blog/')
  ref.on('value', (snap) => {
      list = Object.assign({}, snap.val());
        console.log("2",list, blogList)
        // console.log(list, blogList)
    });
  setBlogList(list)
  console.log(setBlogList(list))
  console.log("3",list)
}, []);

const getBlogs = () => {
    let list;
    let ref = firebase.database().ref('blog/')
    ref.on('value', (snap) => {
      list = Object.assign({}, snap.val());
      setBlogList(list)
    });
    console.log(list)
    return list
}
  return(
    <div>
    { 
      Object.keys(list).map(index =>
      <Card 
        title={list[index].title}
        body={list[index].body}
        key={index}
        id={index + 1}
      />
      )
    }
    </div>
  );
};

export default Blog;