import React from 'react';

import myPic from '../../images/pic.jpg';

const About = () => {
  return (
    <div>
      <div>
        <img src={myPic} alt='my pic' />
      </div>
      <div>
        <div className='abt-header-cnt'>
          <h1 className='abt-header-txt'>Hi I am Jyotirmoy Sinha Babu</h1>
        </div>
        <div className='abt-para-txt'>
          <p>
            I am a fresher ECE graduate with quick problem solving skill,
            looking for a job as a Front-end Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
