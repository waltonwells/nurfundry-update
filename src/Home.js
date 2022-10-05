import React from 'react'
import { Blog, Possibility, Features, Logo, Hero } from './containers';
import { CTA, Brand, Navbar, } from './components';
import BIGBODY from '../src/assets/BIGBODY.svg';
import NEWBODY from '../src/assets/NEWBODY.svg';
import { Footer } from './containers';

export const Home = () => {
  return (
    <div>
       <div className='gradient_bg'>
        <Navbar />
       </div> 
      <Hero />
      <div className='bigbody'>
        <img src={BIGBODY} alt='bigbody' />
      <Brand />
      <Logo />
      <Features />
      <Possibility />
      <CTA />
      </div>
      <div className='newbody'>
        <img src={NEWBODY} alt='newbody' />
        <Blog />
      </div>
      <Footer />
    </div>
  )
}
