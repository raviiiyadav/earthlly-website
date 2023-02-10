import React from 'react'
import Hero from '../components/Hero'
import ShopMore from '../components/ShopMore'

const work = () => {
  return (
    <div>
      <div className='custom-img2'>
        <Hero heading='My Cart' message='Your added to cart items appears here.' />
      </div>
      <ShopMore />
    </div>
  )
}

export default work