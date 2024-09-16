import React from 'react'
import { FaSearch } from 'react-icons/fa'
import BillingTable from './BillingTable'

function BillingWindow() {
  return (
    <div className='  w-full h-[84vh]  ' >
        <div className=' w-full h-[6%]  ' >
            <div className=' pr-4 flex  h-full w-full items-stretch justify-end ' >
                <button className=' active:border-x-2 active:border-y-2 active:border-black text-xl bg-white border-r-2 border-gray-300 px-6 ' >Search</button>
                <input 
                className=' focus:outline-none px-4 text-xl w-[50%]  '
                type="text"
                placeholder='Search Billing Records By Patient Name/Id'
                />
            </div>
        </div>
        <div className=' w-full  h-[94%] ' ><BillingTable/></div>
    </div>
  )
}

export default BillingWindow  