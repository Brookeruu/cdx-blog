import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/index.jsx';

const Blog = props => {

  useEffect(() => {
    console.log("working useEffect")
    //do something here; can use blogList, is like componentDidMount/componentDidUpdate/
    //there we'd probably pull stored blogs from server ??
  });

  return(
    <div>
    { 
      props.blogs.map((item, index) =>
      <Card 
        title={item.title}
        body={item.body}
        key={index}
        id={index + 1}
      />
      )
    }
    </div>
  );
};

export default Blog;