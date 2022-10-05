import React from 'react'
import BRANDFRONT from '../../assets/BRANDFRONT.svg';
import BRANDLEFT from '../../assets/BRANDLEFT.svg';
import BRANDRIGHT from '../../assets/BRANDRIGHT.svg';
import LEFTICON from '../../assets/LEFTICON.svg';
import RIGHTICON from '../../assets/RIGHTICON.svg';

import './collection.css'
const Collection = () => {
  return (
    <div className='collection'>
      <div className='class'><h1>CLASS: BRANDS</h1></div>
      <div className='showcase'>
        <img src={BRANDFRONT} alt='brandfront' />
        <img src={BRANDLEFT} alt='brandleft' />
        <img src={BRANDRIGHT} alt='brandright' />
        <img src={LEFTICON} alt='lefticon' />
        <img src={RIGHTICON} alt='righticon' />
      </div>
      <div className='price'>$5000</div>
      <div className='description'>
        <h3>The brand class is a celebration of pioneering brands who will work closely with<br></br>the team to build stronger brand equity - through purpose alignment and<br></br>exploration of WEB 3.0 solutions to scale businesses & support causes more<br></br>effectively.</h3>
      </div>
      <div className='utilities'>
        <h2>UTILITIES</h2>
        <div className='utilities1'><h3>COMING SOON<br>COMING SOON<br>COMING SOON<br>COMING SOON</br></br></br></h3></div>
        <div className='utilities1'><h3>COMING SOON<br>COMING SOON<br>COMING SOON<br>COMING SOON</br></br></br></h3></div>
      </div>
      <div className='utilities-btns'>
        <div className='utilities-btn1'><button>CONNECT WALLET</button></div>
        <div className='utilities-btn2'><button>MINT NOW</button></div>
      </div>
      <div className='countdown'><h2>33  08  08<br></br>DAYS  HOURS  MINS</h2></div>
    </div>
  )
}

export default Collection