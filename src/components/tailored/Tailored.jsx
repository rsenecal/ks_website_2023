import React from 'react'
import { Businesstype } from '../../components'
import './tailored.css'
import tailored from '../../assets/tailored.png'

const Tailored = () => {
  return (
    <div className='ks__tailored section__margin'>
        <div className='ks__tailored-content'>
            {/* <div className='ks__tailored-image'>
                <img src={tailored} alt='Lady Sitting in hero pose by water front' />
            </div> */}
            <div className='ks__tailored-heading'>
            <div className='ks__tailored-image'>
                <img src={tailored} alt='Lady Sitting in hero pose by water front' />
            </div>
            <div className='ks__tailored-type'>
            <Businesstype title='Solution tailored to you business' text='Say something about how Karmasotf Solution is tailored to you business'/>
        </div>
            </div>
        </div>
        {/* <div className='ks__tailored-type'>
            <Businesstype title='Solution tailored to you business' text='Say something about how Karmasotf Solution is tailored to you business'/>
        </div> */}
        {/* <div className='ks__tailored-heading'>
            <h1 className='gradient__text'>
            Solution tailored to you business
            </h1>
        </div> */}
        <div className='ks__tailored-container'>
            <Businesstype title='YOGA STUDIOS' text='Keep track of clients easily. Increase staff and customer retention with our easy-to-use yoga studio management toolkit.'/>
            <Businesstype title='FITNESS STUDIOS' text='Streamline your operations, launch and promote your online fitness course, and much more - all within one system for fitness studios.'/>
            <Businesstype title='GYMS' text='Keep track of your gym performance: identify best-performing couches and services to grow faster and effectively with our gym management software solutions.'/>
        </div>
  </div>
  )
}

export default Tailored