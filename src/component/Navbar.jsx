import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/Logo and Title.png';


function Navbar() {
  return (
    <div>
        <nav>
          <Link to='main' className ='logo' smooth={true} duration={2000}>
              <img src={logo} alt='logo/'></img>
          </Link>
          <input className='menu-btn' type='checkbox' id='menu-btn'/>
          <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
          </label>
          <ul className='menu'>
            <li><Link to='main'smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='about'smooth={true} duration={1000}>About</Link></li>
            <li><Link to='team'smooth={true} duration={1000}>Team</Link></li>
          </ul>

        </nav>
    </div>
  )
}

export default Navbar;