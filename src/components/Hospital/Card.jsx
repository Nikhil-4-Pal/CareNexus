import React from 'react'
import { Link } from 'react-router-dom'

function Card({Name , Bedstatus ,emergenciesstatus ,appointmentstatus , bgcolor  }) {
  return (
        <div className={`z-20  p-6 w-[95%] h-[10%] bg-${bgcolor} bg-lime-300 rounded-xl  `} >
          <h1 className='text-xl font-Raleway text-black text-center' >{Name}</h1>
          <div className='w-full h-full flex p-4 ' >
              <div className='w-[50%] ' >
                  <h1 className='text-xl font-Raleway text-black text-left' >Beds : {Bedstatus}</h1>
                  <h1 className='text-xl font-Raleway text-black text-left' >Emergencies : {emergenciesstatus}</h1>
                  <h1 className='text-xl font-Raleway text-black text-left' >OPD appointment : {appointmentstatus}</h1>

              </div>
              <div className='w-[50%] flex justify-evenly items-center gap-1  ' >
                  <Link to={Name} ><button className='  bg-blue-800 text-white  rounded-xl font-mono font-bold p-4' >Details</button></Link>
                  <Link to={`appointment/${Name}`} ><button className='  bg-blue-800 text-white  rounded-xl font-mono font-bold p-4' >Book an appointment</button></Link>
              </div>
          </div>
        </div>
    
  )
}

export default Card