import React from 'react';

import { useNavigate } from 'react-router-dom';

import './nav.css';

const Nav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/abt');
  };

  return (
    <div className='nav-cnt'>
      <h1 className='nav-txt'>blog !</h1>
      <button onClick={handleClick} className='about-btn'>
        {' '}
        About Me
      </button>
    </div>
  );
};

export default Nav;
