import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
      <div className='custom-img'>
        <Hero heading='Contact Us' message='Submit the form below for connecting to us and  suggestions.' />
      </div>
      <Contact />
    </div>
  )
}

export default contact