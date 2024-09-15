import React from 'react'
import BillingCard from './BillingCard'

function BillingTable() {
  return (
    <div className='no-scrollbar overflow-y-scroll relative w-full h-full  bg-black/20  ' > 
        <div className=' backdrop-blur-3xl backdrop-brightness-80 sticky top-0 text-center text-4xl font-Raleway  p-4  text-blue-900 h-max w-full  ' >Billing Details</div>
        <div className='  flex flex-col items-center  h-[95%]  w-full ' >
            <BillingCard/>
        </div>
    </div>
  )
}

export default BillingTable