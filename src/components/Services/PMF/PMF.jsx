import React from 'react'
import PatientInfo from '../../Profile/PatientInfo'
import PatientAvatar from '../../Profile/PatientAvatar'


function PMF() {
  return (
    <div className='h-screen w-full flex flex-col ' >
      <div className=' flex gap-4 p-4 justify-end items-center w-full h-[15%]  ' >
        <input
        placeholder="Find your Patient"
        className=' w-full h-[50%] focus:outline-none p-2 text-white text-lg font-medium bg-black/90 rounded-xl placeholder:text-white ' type="text"  />
        <button className=' bg-green-500 rounded-xl shadow-sm shadow-black text-sm font-medium  active:shadow-none ' >Appointment Done</button>
        <button className=' bg-red-500 rounded-xl shadow-sm shadow-black text-sm font-medium   active:shadow-none ' >Appointment Cancelled</button>
      </div>
      <div className=' flex  w-full h-[85%] bg-white ' >
        <div className=' h-full w-[20%] bg-purple-300 ' >
          
          <div className=' w-full h-full  bg-white ' >
              <div className=' h-[50%] ' >
                <PatientAvatar/>
              </div>
              <div className=' h-[50%] overflow-scroll no-scrollbar ' >
                <PatientInfo/>
              </div>
              
          </div>
        </div>
        <div className=' h-full w-[60%] bg-red-200 ' >
          <div></div>
        </div>
        <div className=' h-full w-[20%] bg-blue-400  ' ></div>
      </div>
    </div>
  )
}

export default PMF