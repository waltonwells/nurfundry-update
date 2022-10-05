import React from 'react'


import PAGEBODY from '../src/assets/PAGEBODY.svg';
import BRANDLEFT from '../src/assets/BRANDLEFT.svg';
import BRANDFRONT from '../src/assets/BRANDFRONT.svg';
import BRANDRIGHT from '../src/assets/BRANDRIGHT.svg';
import RIGHTICON from '../src/assets/RIGHTICON.svg';
import LEFTICON from '../src/assets/LEFTICON.svg';
import CONNECTWALLET from '../src/assets/CONNECTWALLET.svg';
import MINTNOW from '../src/assets/MINTNOW.svg';
import './Creatorpage.css';
import { Footer } from './containers';
import { Navbar } from './components';
const Creatorpage = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
       </div>
      <div className='pagebody'>
        <img src={PAGEBODY} alt='pagebody' />
        <div className='class'><h1>CLASS: CREATORS</h1></div>
        <div className='collection'>
          <div className='brandright'><img src={BRANDRIGHT} alt='brandright' /></div>
          <div className='brandleft'><img src={BRANDLEFT} alt='brandleft' /></div>
          <div className='brandfront'><img src={BRANDFRONT} alt='brandfront' /></div>
        </div>
        <div className='icons'>
          <div className='lefticon'><img src={LEFTICON} alt='lefticon' /></div>
          <div className='righticon'><img src={RIGHTICON} alt='righticon' /></div>
        </div>
        <div className='price'><h3>????/????</h3></div>
        <div className='description'>
          <h3>Creators put a face to NFTs, a visual that speaks a thousand words. They seek<br></br>the most profound form of connection with every stroke, note and pixel.<br></br>Creators are the critical race that keeps the Nufoundry heart beating.   

                <br></br><br></br><br></br>Your work as a creator will lay the foundation to influence change, through a<br></br>cause or a brand that exists for a higher purpose. Join us as we provide a<br></br>conducive and meaningful bridge onto WEB 3.0 through a digital canvas.</h3>
        </div>
        <div className='utilities'>
          <h2>UTILITIES</h2>
        </div>
        <div className='coming'><div className='coming1'><h3>Free to trade (buy/sell) on the Marketplace
Invitation to Exclusive community events
Fireside alpha chat with project partners
DAO voting rights</h3></div><div className='coming2'><h3>Verified creator badge on Marketplace
Priority access for NFT launch pad 
Creator scholarship program
Creator toolkit sponsorship</h3></div></div>
        <div className='pgbtns'>
          <div className='connectwallet'><img src={CONNECTWALLET} alt='connectwallet' /></div>
          <div className='mintnow'><img src={MINTNOW} alt='mintnow' /></div>
        </div>
        <div className='countdown'>
        <h2>33  08  08<br></br>DAYS  HOURS  MINS</h2>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Creatorpage