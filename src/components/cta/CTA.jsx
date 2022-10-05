import React from 'react'
import FANS from '../../assets/FANS.svg';
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
        <div className='cta-text'>
          <h1>FOR FANS</h1>
          <h2>WE ARE LOOKING FOR PASSIONATE TRAILBLAZERS TO JOIN OUR<br></br>MOVEMENT IN REDEFINING THE PURPOSE OF NFTS</h2>
          <div className='cta-btn'>
            <div className='btn1'><button>JOIN DISCORD</button></div>
            <div className='btn2'><button>EXPLORE-MARKETPLACE</button></div>
          </div>
        </div>
        <div className='cta-image'>
          <img src={FANS} alt='cta' />
        </div>
    </div>
  )
}

export default CTA