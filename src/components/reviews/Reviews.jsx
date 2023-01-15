import React from 'react'
import './reviews.css'
import {
    capterra,
    crowd,
    getapp,
    sa,
    trustpilot
} from './imports'

const Reviews = () => {
  return (

    <div className='ks__review-badge_container'>
      <div className='ks__review section__padding'>
        <div>
          <img src={crowd} alt='Crowd Rating' />
        </div>
        <div>
          <img src={capterra} alt='Capterra Rating' />
        </div>
        <div>
          <img src={getapp} alt='GetApp Rating' />
        </div>
        <div>
          <img src={trustpilot} alt='Trust Pilot Rating' />
        </div>
        <div>
          <img src={sa} alt='Software dvice Rating' />
        </div>
      </div>
  </div>
  )
}

export default Reviews