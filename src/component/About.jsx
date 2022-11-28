import React from 'react';
import aboutimage from '../images/logos.png'

function About() {
  return (
    <div id ='about'>
        <div className='about-model'>
            <img src={aboutimage} alt='about-image'/>
        </div>
        <div className='about-text'>
            <h2>About</h2>
            <h3>Lorem<span> Ipsum</span> dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Architecto, eligendi? Voluptates minima ea iusto rerum quo. Dolores et necessitatibus 
            similique atque deleniti ea eaque excepturi. Facilis dolorum vel atque fuga.</p>
            <button>Learn More</button>
        </div>
    
    </div>
  )
}

export default About;