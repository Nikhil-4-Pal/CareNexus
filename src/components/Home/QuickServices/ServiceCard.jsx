import React from 'react'
import Primarybutton from './Button'

function ServiceCard({cardtitle  , cardcontent , btnContent}) {
  return (
    <div className=' m-4 flex flex-col justify-center items-center gap-4 rounded-[1.75rem] text-center bg-teal-200 min-w-[23%] max-h-max p-10 font-Raleway ' >
      <h1 className='text-2xl' >{cardtitle}</h1>
      <p className='  font-sans font-semibold ' >{cardcontent}</p>
      <Primarybutton btnName={btnContent} />
    </div>
  )
}

export default ServiceCard