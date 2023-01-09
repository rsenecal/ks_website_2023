import React from 'react'
import './hero.css'
import meditating from '../../assets/meditating.png'
const Hero = () => {
  return (
    <div className='ks__haeder section__padding ' id ='home'>
     <div ks__header-content>
      <h1 className='gradient__text'>
      Getting overwhelmed? Get Karmasoft instead!
      </h1>
      <p>Multi-functional business management software solution to simplify studio management. From now on, you can focus on what you really love - teaching yoga and fitness.
          Staff management, sales, booking & scheduling, virtual classes </p>
      <div className='ks__header-content__input'>
        <input type='email' placeholder='Start your free trial today!' />
        <button type='button'>Get Demo</button>
      </div>
      <div className='ks__header-image'>
        <img src={meditating} alt='Boy meditating' />
      </div>
     </div>
    </div>
  )
}

export default Hero