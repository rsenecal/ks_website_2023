import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css'

const Menu = () => (
    <>
        <p> <a href='#businesstypes'> Business Types</a></p>
        <p> <a href='#features'> Features</a></p>
        <p> <a href='#pricing'> Pricing</a></p>
        <p> <a href='#resources'> Resources</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ks__navbar"> 
        <div className='ks__navbar-links'>
            <div className='ks__navbar-links_logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='ks__navbar-links_container'>
                {/* <Menu /> */}
            </div>
        </div>

        <div className='ks__navbar-sign'>
            {/* <p>Sign-Up</p> */}
                <button id='signin_btn' type='button'>Sign Up</button>
                <button id='demo_btn' type='button'>Demo</button>
        </div>

    <div className='ks__navbar-menu'>
       { toggleMenu 
        ? <RiCloseLine  color='#25282B' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line  color='#25282B' size={27} onClick={() => setToggleMenu(true)} />
       }
       {toggleMenu && (
        <div className='ks__navbar-menu_container scale-up-center'>
            <div className='ks_navbar-menu_container-links'>
            <Menu />
                <div className='ks__navbar-menu_container-links-sign'>
                    <button type='button'>Sign Up</button>
                    <button type='button'>Demo</button>
                </div>
            </div>
        </div>
            
       )}

    </div>

 </div>
  )
}

export default Navbar