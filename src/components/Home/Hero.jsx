import React from 'react'
import Blob from './Blob'
import Content from './Content'
import Background from './Background'

function Hero() {
  return (
    <div className=' overflow-y-none top-[10%]  w-full  '>
      <Background/>
      <Blob/>
      <Content/>
      
      
    </div>
  )
}

export default Hero