<<<<<<< HEAD
import React, { useMemo, useState } from 'react'
import PatientDetailedBilling from './PatientDetailedBilling'
import PatientInfo from '../../Profile/mock data/PatientInfo.json'

function BillingCard({}) {

  const [billing , setBilling] = useState(false)

  const handleBillingDetails = ()=>{
    setBilling((prev)=>(!prev))
  }
  

  return (
    <div className=' w-[100%] ' >
         { PatientInfo.map((element)=>{
          return(
            <div  onClick={handleBillingDetails} className='  h-max w-[100%] bg-white border-b-2 hover:border-gray-200  hover:scale-[1.005] shadow-black ' >
            <div className=' flex justify-evenly text-md font-mono font-bold  displayedbilling ' >
              <div className='  text-left flex flex-col gap-5 ' >
                <h1>Patient Id :{element.Patient_Id} </h1>
                <h1>Patient Name : {element.full_Name} </h1>
                <h1>Date of Admission :  </h1>
              </div>
              <div className='  text-left flex flex-col gap-5 ' >
                <h1>Ward :  </h1>
                <h1>Bed No. : {element.Bed_No} </h1>
                <h1>Total Payable Amount :  </h1>
              </div>
            </div>
            { billing ? <div className=' hiddenbilling  ' >
              <PatientDetailedBilling />
            </div> : null }
        </div> 
          )
         })
            
         }

    </div>
         
    
=======
import React from 'react'

function BillingCard() {
  return (
    <div className='  h-[30%] w-[95%] bg-white border-b-2 hover:border-gray-200  hover:scale-[1.005] shadow-black ' >
        
    </div>
>>>>>>> origin/master
  )
}

export default BillingCard