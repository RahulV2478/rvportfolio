import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>

        <ul className='footer__list'>
          <li>
            <a href='#home' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a href='https://www.facebook.com/' className='footer__social-link'>
            <i className='bx bxl-facebook'></i>
          </a>

          <a href='https://www.instagram.com/' className='footer__social-link'>
            <i className='bx bxl-instagram'></i>
          </a>

          <a href='https://twitter.com/' className='footer__social-link'>
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
