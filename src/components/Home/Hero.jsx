import React from 'react'
import Blob from './Blob'
import Content from './Content'
import Background from './Background'

function Hero() {
  return (
    <div>
      <div className=' z-50 overflow-y-none overflow-x-none top-[10%]  w-[100%]  '>
        <Background/>  
        <Content/>
      </div>
      
    </div>
    
  )
}

export default Hero