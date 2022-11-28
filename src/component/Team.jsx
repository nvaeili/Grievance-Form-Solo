import React from 'react';
import Box from './Box';
import bp from '../images/bprofile.png';


function Team() {
  return (
    <div id='team'>
        <div className='s-heading'>
            <h1>THE TEAM</h1>
            <p>SSC-STRAW OFFICERS</p>
        </div>
        <div className='b-container'>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
        </div>
        <div className='b-container'>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
            <Box image={bp} alte='bp' button='Learn More'/>
        </div>
    </div>
  )
}

export default Team;