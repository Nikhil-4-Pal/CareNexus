import React from 'react'
import Blob from './Blob'
import Content from './Content'
import Background from './Background'

function Hero() {
  return (
    <div className='  z-50 overflow-y-none top-[10%]  w-[80%]  '>
      <Background/>
      <Content/>
      
      
    </div>
  )
}

export default Hero