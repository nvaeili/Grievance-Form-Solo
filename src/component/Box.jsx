import React from 'react';

function Box(props) {
  return (
    <div className='s-box'>
        <div className='s-b-img'>
            <img src={props.image} alt={props.alte}/>
        </div>
        <div className='s-b-text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor, natus assumenda quo iste temporibus nihil cum et facere 
            consequuntur nulla maxime tenetur quasi ad, numquam obcaecati, 
            ducimus esse error ab!</p>
            <a href='#' className='cv-btn'>{props.button}</a>
        </div>

    </div>
  )
}

export default Box;