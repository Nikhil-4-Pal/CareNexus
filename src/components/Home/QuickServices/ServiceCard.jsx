import React from 'react'
import Primarybutton from './Button'

function ServiceCard({cardtitle  , cardcontent , btnContent}) {
  return (
    <div className=' border-x-2 border-x-black border-y-2 border-y-black text-wrap m-4  flex flex-col justify-center items-center gap-4 rounded-[1.75rem] text-center bg-white min-w-[15%] max-h-max p-10 font-Raleway ' >
      <h1 className='text-2xl' >{cardtitle}</h1>
      <p className='  font-sans font-semibold ' >{cardcontent}</p>
      <Primarybutton btnName={btnContent} />
    </div>
  )
}

export default ServiceCard