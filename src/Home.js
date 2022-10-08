import React from 'react'
import { Blog, Possibility, Features, Logo, Hero } from './containers';
import { CTA, Brand, Navbar, } from './components';
import BIGBODY from '../src/assets/BIGBODY.svg';
import NEWBODY from '../src/assets/NEWBODY.svg';
import { Footer } from './containers';
import './home.css'
export const Home = () => {
  return (
    <div className='App'>
       <div className='gradient_bg'>
        <Navbar />
       </div>
       <div className='hero'>
      <Hero />
      </div>
      <div className='bigbody'>
        <img src={BIGBODY} alt='bigbody' />
        <div className='brand'>
      <Brand />
      </div>

      <div className='logo'>
      <Logo />
      </div>

      <div className='feature'>
      <Features />
      </div>

      <div className='possib'>
      <Possibility />
      </div>

      <CTA />
      </div>

      <div className='newbody'>
        <img src={NEWBODY} alt='newbody' />
        <Blog />
      </div>

      <div className='footer'>
        <Footer/>
        </div>
    </div>
  )
}
