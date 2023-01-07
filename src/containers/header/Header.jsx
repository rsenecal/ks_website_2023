import React from 'react'
import { Hero, Navbar } from '../../components'
import './header.css'
const Header = () => {
  return (
    // Should have navBar + Hero section
    <div className='header'>
    <Navbar />
    <Hero />
    </div>
  )
}

export default Header