import React from 'react'
import { Democta, Logoclouds } from '../../components'
import './pitch.css'

const Pitch = () => {
  return (
    // The pitch conatiner should have the Logo Clouds and Demo CTA
    <div className='pitch-section'>
    <h2> Pitch Section </h2>
    <Logoclouds />
    <Democta />
    </div>
  )
}

export default Pitch