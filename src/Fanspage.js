import React,{useState} from 'react'


import PAGEBODY from '../src/assets/PAGEBODY.svg';
import BRANDLEFT from '../src/assets/BRANDLEFT.svg';
import BRANDFRONT from '../src/assets/BRANDFRONT.svg';
import BRANDRIGHT from '../src/assets/BRANDRIGHT.svg';
import RIGHTICON from '../src/assets/RIGHTICON.svg';
import LEFTICON from '../src/assets/LEFTICON.svg';
import CONNECTWALLET from '../src/assets/CONNECTWALLET.svg';
import MINTNOW from '../src/assets/MINTNOW.svg';
import './Fanspage.css';

import { Navbar } from './components';
import { Footer } from './containers';



const Fanspage = () => {
  

  return (
    <div className='App'>
<div className='gradient_bg'>
        <Navbar />
       </div>
      <div className='pagebody'>
        <img src={PAGEBODY} alt='pagebody' />
        <div className='class'><h1>CLASS: FANS</h1></div>
        <div className='collection'>

          <img src={BRANDLEFT} alt='brandleft' className='left' />
          <img src={BRANDRIGHT} alt='brandright' className='front'/>
          <img src={BRANDRIGHT} alt='brandright' className='right' />
        </div>
        <div className='icons'>
          <div className='lefticon'><img src={LEFTICON} alt='lefticon' /></div>
          <div className='righticon'><img src={RIGHTICON} alt='righticon' /></div>
        </div>
        <div className='price'><h3>????/????</h3></div>
        <div className='description'>
          <h3>Fans are the champions and soul behind every strong community. They are the<br></br>voice of every project and the catalyst between ecosystems that propagate<br></br>synergies around them. Their mission is to facilitate growth and drive a positive<br></br>brand narrative within the Nufoundry Ecosystem.</h3>
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

export default Fanspage