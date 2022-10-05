import React from 'react'
import './brand.css'
import BRAND from '../../assets/BRAND.svg';

const Brand = () => {
  return (
    <div className='brand'>
        <img src={BRAND} alt='brand' />
    </div>
  )
}

export default Brand