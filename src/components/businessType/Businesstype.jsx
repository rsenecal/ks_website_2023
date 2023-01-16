import React from 'react'

const Businesstype = ( { title, text }) => {
  return (
    <div className='ks__types-container__type '>
        <div className='ks__types-container__type-title '>
            <div />
                <h1>{title}</h1>
            </div>
        <div className='ks__types-container__type-text'>
            {text}
        </div>
    </div>
  )
}

export default Businesstype