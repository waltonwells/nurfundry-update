import React,{useState,useRef} from 'react'


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

  // const [isMoved, setIsMoved] = useState(false);
  // const [slideNumber, setSlideNumber] = useState(0);

  // const listRef = useRef();

  // const handleClick = (direction) => {
  //   setIsMoved(true);
  //   let distance = listRef.current.getBoundingClientRect().x - 50;
  //   if (direction === "left" && slideNumber > 0) {
  //     setSlideNumber(slideNumber - 1);
  //     listRef.current.style.transform = `translateX(${230 + distance}px)`;
  //   }
  //   if (direction === "right" && slideNumber < 5) {
  //     setSlideNumber(slideNumber + 1);
  //     listRef.current.style.transform = `translateX(${-230 + distance}px)`;
  //   }
  // };

  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
      </div>
      <div className='pagebody'>
        <img src={PAGEBODY} alt='pagebody' />
        <div className='class'><h1>CLASS: BRANDS</h1></div>
        <div className='collection'>

          <img src={BRANDLEFT} alt='brandleft' className='left' />
          <img src={BRANDRIGHT} alt='brandright' className='front'/>
          <img src={BRANDRIGHT} alt='brandright' className='right' />
          

        


        </div>
{/* <div className='sliderwrapper'>
  <div className='sliderImages'>

          <img src={BRANDRIGHT} alt='brandright' className=' galary-item galary-item1'/>
          <img src={BRANDRIGHT} alt='brandright' className='galary-item  galary-item2' />
          <img src={BRANDRIGHT} alt='brandright' className='galary-item  galary-item3' />

  </div>
  <div className='galary-control'></div>
</div> */}


        <div className='icons'>
          <div className='lefticon'><img src={LEFTICON} alt='lefticon' /></div>
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