import React from 'react';
import me from '../../../public/images/Brooke.png';
import Project from './Project.jsx';
import Timeline from './Timeline.jsx';
import foodsavor1 from '../../../public/images/food-savor.png';
import charityfrog from '../../../public/images/charityfrog.png';
import CharityFrogger from '../../../public/images/charity-frog.png';
import './index.css';


export const Portfolio = () => {
  const projects = [
    {
      title: 'Food Savor',
      techs: 'Angular, Firebase',
      description: 'Reduce your food waste by searching for recipes with ingredients you already have.',
      image: foodsavor1,
    },
    {
      title: 'Charity Frog',
      techs: 'Ruby, Rails',
      description: 'An e-commerce app that enables you to donate to local non-profits.',
      image: CharityFrogger,
    },
    {
      title: 'Project Minotaur',
      techs: 'React',
      description: 'Internship project - custom CMS using React.',
      image: charityfrog,
    },
    {
      title: 'My Blog',
      techs: 'React',
      description: 'An e-commerce app that enables you to donate to local non-profits.',
      image: charityfrog,
    },
    {
      title: 'Woofer',
      techs: 'React, Firebase',
      description: 'Manage your pups medical documents and medication.',
      image: charityfrog,
    },
    {
      title: 'Room Booker',
      techs: 'React, Rails',
      description: 'An e-commerce app that enables you to donate to local non-profits.',
      image: charityfrog,
    },
  ];

  return (
    <div style={{ margin: '2rem' }}>
      <div className="about-me">
        <div className='column-1'>
          <img src={me} className="portfolio-image"></img>
          <p className='about-me-text'>Currently in pursuit of translating my passion for foreign languages into a newfound passion for coding languages. After spending 6 years working in education administration, the most recent three of which at an international French immersion school, I decided to redirect my career into web development and code. </p>
        </div>
        <div className="about-text">
          <Timeline />
        </div>
      </div>
       <div className='project-section'>
        {
          projects.map((project, index) => <Project className='project' key={index} title={project.title} techs={project.techs} image={project.image} description={project.description} />)
        }
        </div>
    </div>
  );
};

export default Portfolio;
