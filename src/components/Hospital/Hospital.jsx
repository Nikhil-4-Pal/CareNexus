import React, { useRef } from 'react'

import Table from './Table'


function Hospital() {
  const ref = useRef()
  return (
    
   <div className=' Hospital w-screen h-max flex justify-center items-center bg-purple-300 ' >
      <Table/>
   </div> 
  )
}

export default Hospital