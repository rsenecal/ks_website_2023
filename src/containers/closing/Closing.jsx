import React from 'react'
import { Finalcta, Reviews } from '../../components'
import './Closing'

const Closing = () => {
  return (
    // Closing container should have Reviews, Our Visions and Final CTA
    <div className='Closing'>
    <h2> Closing section</h2>
    <Reviews />
    <Finalcta />
    </div>
  )
}

export default Closing