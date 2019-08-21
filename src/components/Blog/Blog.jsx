import React, { useState, useEffect } from 'react';
import Card from '../Card/index.jsx';
import firebase from '../Firebase/firebaseConfig.js';
import Typewriter from '../Typewriter/Typewriter.jsx';
import Type from '../Typewriter/Type.jsx';


const Blog = (props) => {
  const [list, setList] = useState({});

  const getData = () => {
    const ref = firebase.database().ref('/blog');
    ref.on('value', (snap) => {
      const newList = Object.assign({}, snap.val());
      setList(newList);
    }, (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line no-console
    console.log('list: ', list);
  }, []);

  return (
    <div>
      {
        Object.keys(list).map(index => <Card
          title={list[index].title}
          body={list[index].body}
          date={list[index].date}
          key={index}
          id={index}
        />)
      }
    </div>
  );
};

export default Blog;
