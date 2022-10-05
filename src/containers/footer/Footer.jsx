import React from 'react'
import FOOTERLOGO from '../../assets/FOOTERLOGO.svg';
import LINE1 from '../../assets/LINE1.svg';
import LINE2 from '../../assets/LINE2.svg';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerflex'>
        <div className='footerlogo'><img src={FOOTERLOGO} alt='footerlogo' /></div>
        <div className='line1'><img src={LINE1} alt='line1' /></div>
        <div className='links1'>
          <ul>
            <li><a href='nufoundry.com' className=''>Home</a></li>
            <li><a href='nufoundry.com' className=''>Nufoundry</a></li>
            <li><a href='nufoundry.com' className=''>Marketplace</a></li>
            <li><a href='nufoundry.com' className=''>Partner With Us</a></li>
          </ul>
        </div>
        <div className='line2'><img src={LINE2} alt='line2' /></div>
        <div className='links2'>
        <ul>
            <li><a href='https://discord.gg/5WGgNsyR' className=''>Discord</a></li>
            <li><a href='https://twitter.com/Nufoundry' className=''>Twitter</a></li>
            <li><a href='https://www.facebook.com/profile.php?id=100085918821994' className=''>Facebook</a></li>
            <li><a href='https://www.instagram.com/nufoundry/' className=''>Instagram</a></li>
          </ul>
        </div>
        </div>
        <div className='copyright'><h4>Nufoundry © 2022</h4></div>
    </div>
  )
}

export default Footer