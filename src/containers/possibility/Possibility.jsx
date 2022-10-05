import React from 'react'
import BRANDS from '../../assets/BRANDS.svg'
import './possibility.css'
const Possibility = () => {
  return (
    <div className='possibility'>
        <div className='possibility-text'>
          <h1>FOR BRANDS</h1>
          <h2>BE AT THE FOREFRONT OF TECHNOLOGICAL MOVEMENT<br></br>ENGAGE THE NEXT GENERATION OF CONSUMERS BY RIDING<br></br>THE WEB3 WAVE TODAY</h2>
          <div className='possibility-btn'>
            <div className='btn1'><button>JOIN US NOW</button></div>
          </div>
        </div>
        <div className='possibility-image'>
          <img src={BRANDS} alt='possibility' />
        </div>
    </div>
  )
}

export default Possibility