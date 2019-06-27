import firebase from '../../firebaseConfig'; 
import Blog from './Blog.jsx'
import NewBlog from './BlogNew.jsx';
import React from 'react';

const BlogList = props => {
  return(
    <React.Fragment>
      <Blog />
      {/* <NewBlog /> */}
    </React.Fragment>
  )
}

export default BlogList;