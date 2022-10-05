import React from 'react'

import { Footer } from './containers';
import { Navbar } from './components';

import PAGEBODY from '../src/assets/PAGEBODY.svg';
import BRANDLEFT from '../src/assets/BRANDLEFT.svg';
import BRANDFRONT from '../src/assets/BRANDFRONT.svg';
import BRANDRIGHT from '../src/assets/BRANDRIGHT.svg';
import RIGHTICON from '../src/assets/RIGHTICON.svg';
import LEFTICON from '../src/assets/LEFTICON.svg';
import CONNECTWALLET from '../src/assets/CONNECTWALLET.svg';
import MINTNOW from '../src/assets/MINTNOW.svg';
import './Brandpage.css';

const Brandpage = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
      </div>
      <div className='pagebody'>
        <img src={PAGEBODY} alt='pagebody' />
        <div className='class'><h1>CLASS: BRANDS</h1></div>
        <div className='collection'>
          <div className='brandleft'><img src={BRANDLEFT} alt='brandleft' /></div>
          <div className='brandfront'><img src={BRANDFRONT} alt='brandfront' /></div>
          <div className='brandright'><img src={BRANDRIGHT} alt='brandright' /></div>
        </div>
        <div className='icons'>
          <div className='lefticon'><img src={LEFTICON} alt='lefticon'  /></div>
          <div className='righticon'><img src={RIGHTICON} alt='righticon'  /></div>
        </div>
        <div className='price'><h3>$5000</h3></div>
        <div className='description'>
          <h3>The brand class is a celebration of pioneering brands who will work closely with<br></br>the team to build stronger brand equity - through purpose alignment and<br></br>exploration of WEB 3.0 solutions to scale businesses & support causes more<br></br>effectively.</h3>
        </div>
        <div className='utilities'>
          <h2>UTILITIES</h2>
        </div>
        <div className='coming'><div className='coming1'><h3>COMING SOON<br></br>COMING SOON<br></br>COMING SOON<br></br>COMING SOON</h3></div><div className='coming2'><h3>COMING SOON<br></br>COMING SOON<br></br>COMING SOON<br></br>COMING SOON</h3></div></div>
        <div className='pgbtns'>
          <div className='connectwallet'><img src={CONNECTWALLET} alt='connectwallet' /></div>
          <div className='mintnow'><img src={MINTNOW} alt='mintnow' /></div>
        </div>
        <div className='countdown'>
        <h2>33  08  08<br></br>DAYS  HOURS  MINS</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Brandpage