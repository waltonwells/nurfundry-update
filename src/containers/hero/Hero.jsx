import React from 'react'
import './hero.css'
import  HEROBG  from '../../assets/HEROBG.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={HEROBG} alt='herobg' />
        <h1>Drive the value of your NFTs<br></br>with purpose,with nufoundry</h1>
        <p>Whether you’re a creator, a brand, or a fan, bring life to your NFTs by <br></br>supporting a cause</p>
        <div className='herobtn'>
          <div className='action1'><button type='action1'>EXPLORE MARKETPLACE</button></div>
          <div className='action2'><button type='action2'>NUFOUNDRY NFT SERIES</button></div>
        </div>
    </div>
  )
}

export default Hero