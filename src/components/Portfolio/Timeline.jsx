import React from 'react';
import './index.css';

export const Timeline = () => {
  const timeline = [
    {
      title: 'Connective DX',
      date: '06.2019 - PRESENT',
      content: ' | Software Engineer Intern',
    },
    {
      title: 'Plus QA',
      date: '04.2019 - 05.2019',
      content: ' | Web Development Intern',
    },
    {
      title: 'Epicodus',
      date: '10.2018 - 03.2019',
      content: ' | 6 month • 1000+ hr • intensive coding bootcamp',
    },
    {
      title: 'French American School',
      date: '10.2015 - 09.2018',
      content: ' | Executive Assistant',
    },
    {
      title: 'PSU Business Affairs Office',
      date: '12.2012 - 09.2015',
      content: ' | Assistant to Refund Specialist',
    },
    {
      title: 'Portland State University',
      content: 'Bachelor in Art Practices & Bachelor in French',
    },
    {
      title: 'Université Catholique de l\'Ouest',
      content: 'French Language Immersion Program',
    },
  ];

  return (
    <div className='timeline'>
      {
        timeline.map((item, index) => 
        <dl className={'timeline--entry entry' + index} key={index}>
          <dt className='timeline--entry__title'>{item.title}</dt>
          <dd className='timeline--entry__detail'>
            <p className='entry__date'>{item.date} {item.content}</p>
          </dd>
        </dl>
        )
      }
    </div>
  );
};

export default Timeline;
