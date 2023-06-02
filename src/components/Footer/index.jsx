import './index.scss';

import React from 'react';
import gtag from 'ga-gtag';

const Footer = () => {
  return (
    <div className='footer-container'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/idriss-berchil/'
        onClick={() => gtag("event","Footer_Clicked")}
      >
        <p className='footer-contents'>
          <span className='icon'>&copy; 2022</span> Berchil Idriss
        </p>
      </a>
    </div>
  );
};

export default Footer;
