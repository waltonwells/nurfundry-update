import React from 'react'
import CREATORS from '../../assets/CREATORS.svg';

import './features.css'
const Features = () => {
  return (
    <div className='features'>
      <div className='features-text'>
          <h1>FOR CREATORS</h1>
          <h2>MAKE A BIG STATEMENT WITH YOUR ART<br></br>SUPPORT YOUR PREFERRED CAUSE IN PERPETUITY WITH YOUR NFTS</h2>
          <div className='features-btn'>
            <div className='btn1'><button>APPLY NOW</button></div>
            <div className='btn2'><button>JOIN DISCORD</button></div>
          </div>
        </div>
        <div className='features-image'>
          <img src={CREATORS} alt='creators' />
        </div>
    </div>
  )
}

export default Features