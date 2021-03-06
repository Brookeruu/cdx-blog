import React, { useState }from 'react';


import './projects.css';

export const Projects = (props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    console.log('enter')
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className='project' style={{ backgroundImage: `url(${props.image})` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={hover ? 'display' : 'hide-project-info'}>
        <h3>{props.title}</h3>
        <h5>{props.techs}</h5>
        <h5>{props.description}</h5>
        <a className='project-link' href={props.github} target="blank">Github</a><br></br>
        {
          props.deployed ? <a className='project-link' href={props.deployed} target="blank">Live Site</a> : null
        }
      </div>
    </div>
  );
};

export default Projects;
