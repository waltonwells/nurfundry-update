import React, {useState} from 'react'
import logo from '../../assets/LOGO.svg'
import navicon from '../../assets/navicon.png'
import LINKEDIN from '../../assets/LINKEDIN.png'
import TWITTER from '../../assets/TWITTER.png'
import INSTAGRAM from '../../assets/INSTAGRAM.png'
import FACEBOOK from '../../assets/FACEBOOK.png'
import DISCORD from '../../assets/DISCORD.png'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom'
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
            <p><a href="creatorPage">Creator page</a></p>
            <p><a href="fanspage">Fans page</a></p>

          </div>
        </div>
        )}

      </div>


   <div>

   </div>
   <div className='navlogo'>
<NavLink to='/'><img src={logo} alt="hoobank" className="logoheader" style={{objectFit: 'contain', height: '80px', width:'300px'}} /></NavLink>

</div>
          <div className='social-icons'>
            <div className='linkedin'>
             <a href='https://www.linkedin.com/company/nufoundry/'> <img src={LINKEDIN} alt='linkedin' /></a>
            </div>
    <div className='twitter'>
    <a href='https://twitter.com/Nufoundry'> <img src={TWITTER} alt='twitter' /></a>
            </div>
            <div className='instagram'>
              <a href='https://www.instagram.com/nufoundry/'> <img src={INSTAGRAM} alt='instagram' /></a>
            </div>
            <div className='facebook'>
              <a href='https://www.facebook.com/profile.php?'><img src={FACEBOOK} alt='facebook' /></a>
            </div>
            <div className='discord'>
             <a href='https://discord.gg/5WGgNsyR'> <img src={DISCORD} alt='discord' /></a>
            </div>
          </div>

    </nav>
  )
}

export default Navbar