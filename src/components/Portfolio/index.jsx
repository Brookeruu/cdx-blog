import React from 'react';
import me from '../../../public/images/Brooke.png';
import Project from './Project.jsx';
import Timeline from './Timeline.jsx';
import foodsavor1 from '../../../public/images/food-savor.png';
import charityfrog from '../../../public/images/charityfrog.png';
import CharityFrogger from '../../../public/images/charity-frog.png';
import blogImage from '../../../public/images/blog-screenshot.png';
import projectMinotaur from '../../../public/images/project-minotaur.png';
import botanic11 from '../../../public/images/botanic11.png';
import botanic13 from '../../../public/images/botanic13.png';

import './index.css';


export const Portfolio = () => {
  const projects = [
    {
      title: 'Food Savor',
      techs: 'Angular, Firebase',
      description: 'Reduce your food waste by searching for recipes with ingredients you already have.',
      image: foodsavor1,
      github: 'https://github.com/Brookeruu/Food-Savor',
      deployed: 'https://foodsavorapp-b49fd.firebaseapp.com',
    },
    {
      title: 'Charity Frog',
      techs: 'Ruby, Rails',
      description: 'An e-commerce app that enables you to donate to local non-profits.',
      image: CharityFrogger,
      github: 'https://github.com/Brookeruu/Charity-Frog',
      deployed: 'https://charity-frog.herokuapp.com/'
    },
    {
      title: 'Project Minotaur',
      techs: 'React',
      description: 'Software Engineering Internship at Connective DX - contribute to custom built CMS.',
      image: projectMinotaur,
      github: 'https://github.com/CSKingMartin/project-minotaur',
    },
    {
      title: 'Blog & Portfolio',
      techs: 'React, Firebase, CICD w/ Azure DevOps',
      description: 'My blog and portfolio. You\'re alreaady here!',
      image: blogImage,
      github: 'https://github.com/Brookeruu/cdx-blog',
      deployed: 'https://my-blog-677b8.firebaseapp.com/#/',
    },
    {
      title: 'Woofer',
      techs: 'React, Firebase',
      description: 'Manage your pups medical documents and medication.',
      image: botanic11,
      github: 'https://github.com/Brookeruu/woofer',
    },
    {
      title: 'Room Booker',
      techs: 'React, Rails',
      description: 'An app built for a company to manage and schedule meeting rooms.',
      image: botanic13,
      github: 'https://github.com/Brookeruu',
    },
  ];

  return (
    <div style={{ margin: '2rem' }}>
      <div className="about-me">
        <div className='column-1'>
          <img src={me} className="portfolio-image"></img>
          <h3>About me...</h3>
          <p className='about-me-text'>Currently translating my passion for foreign languages into my passion for coding languages. After spending 6 years working in education administration, the most recent three of which at an international French immersion school, I decided to redirect my career into web development and code. </p>
        </div>
        <div className="about-text">
          <Timeline />
        </div>
      </div>
       <div className='project-section'>
        {
          projects.map((project, index) => <Project className='project' key={index} title={project.title} techs={project.techs} image={project.image} description={project.description} github={project.github} deployed={project.deployed} />)
        }
        </div>
    </div>
  );
};

export default Portfolio;
