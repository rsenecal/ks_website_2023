import React from 'react'
import { Democta, Logoclouds,Tailored } from '../../components'
import './pitch.css'

const Pitch = () => {
  return (
    // The pitch conatiner should have the Logo Clouds and Demo CTA
    <div className='pitch-section'>
    <h2> Pitch Section </h2>
    <Tailored />
    <Democta />
    <Logoclouds />
    </div>
  )
}

export default Pitch