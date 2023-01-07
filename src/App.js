import React from 'react'

import { Header, Pitch, Toolkit, Closing, Footer } from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
        <Header />

        </div>
        <Pitch />
        <Toolkit />
        <Closing />
        <Footer />

    </div>
  )
}

export default App