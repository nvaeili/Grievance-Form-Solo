import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/Logoandtitlewhite.png';

function Footer() {
  return (
    <div id='footer'>
      <div className='footer-logo'>
        <Link to='main' className ='logo' smooth={true} duration={1000}>
              <img src={logo} alt='logo/'></img>
            </Link>
      </div>
      <div className='footer-text'>
        <h2>All rights reserved ©</h2>
        <a href='/login'>login</a>
      </div>
    </div>
  )
}

export default Footer;