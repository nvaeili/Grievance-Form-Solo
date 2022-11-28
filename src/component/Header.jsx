import React from 'react';
import helpdesk from '../images/help desk.png'

function Header() {
  return (
    <div id ='main'>
        <div className='name'>
          <div className='name-img'>
            <img src={helpdesk} alt='help-desk'/>
          </div>
          <div classname='name-text'>
            <h1>WELCOME TO</h1>
            <h2>PLM STUDENT ASSISTANCE</h2>
            <h3>GRIEVANCE</h3>
            <h2>HELP DESK</h2>

            <div className='header-btns'>
              <a href="/form" className='cv-btn'>Submit a Form</a>
            </div>
          </div>
        </div>

        <div className='arrow'></div>

    </div>
  )
}

export default Header;