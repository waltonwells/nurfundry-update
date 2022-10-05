import React from 'react'
import ROADMAP from '../../assets/ROADMAP.svg';
import DAO from '../../assets/DAO.svg';
import ABOUT from '../../assets/ABOUT.svg';
import './blog.css'
const Blog = () => {
  return (
    <div className='blog'>
        <div className='roadmap'>
          <img src={ROADMAP} alt='roadmap' />
        </div>
        <div className='dao'>
          <img src={DAO} alt='dao' />
        </div>
        <div className='about'>
          <img src={ABOUT} alt='about' />
        </div>
    </div>
  )
}

export default Blog