import React, {useState} from 'react'
import logo from '../../assets/logo.png'
import navicon from '../../assets/navicon.png'
import LINKEDIN from '../../assets/LINKEDIN.png'
import TWITTER from '../../assets/TWITTER.png'
import INSTAGRAM from '../../assets/INSTAGRAM.png'
import FACEBOOK from '../../assets/FACEBOOK.png'
import DISCORD from '../../assets/DISCORD.png'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

// BEM  Block Element Modifier
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
       <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="brandpage">Brand page</a></p>
            <p><a href="fanspage">Fans page</a></p>
            <p><a href="creatorpage">Creator page</a></p>
          </div>
        </div>
        )}

      </div>
<div className='ml-[3rem]'>
<img src={logo} alt="hoobank" className="w-[200px] h-[100px]" style={{objectFit: 'contain', height: '100px', width:'100px'}} />

</div>

   
          <div className='social-icons'>
            <div className='linkedin'>
              <img src={LINKEDIN} alt='linkedin' />
            </div>
            <div className='twitter'>
              <img src={TWITTER} alt='twitter' />
            </div>
            <div className='instagram'>
              <img src={INSTAGRAM} alt='instagram' />
            </div>
            <div className='facebook'>
              <img src={FACEBOOK} alt='facebook' />
            </div>
            <div className='discord'>
              <img src={DISCORD} alt='discord' />
            </div>
          </div>

    </nav>
  )
}

export default Navbar