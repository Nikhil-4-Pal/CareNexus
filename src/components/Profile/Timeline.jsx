import React from 'react'

function Timeline() {
  return (
        <>
          <div className='w-[80%] flex h-max mx-auto ' >
                  <div className=' w-[2%] h-[12rem] mr-4 bg-black/60  text-black flex justify-center  text-[10rem] ' ></div>
                  <div className='w-[100%]  h-max text-left p-4 bg-black/30 rounded-lg ' >
                      <h1 className=' w-full h-max text-md font-mono font-bold ' >Date: 26/08/2024  Time:12:05 PM</h1>
                      <h1 className=' w-full h-max text-md font-mono font-bold ' >Appointment Details :</h1>
                      <h1 className=' w-full h-max text-sm font-mono font-bold ' >Department : Department of Orthology</h1>
                      <h1 className=' w-full h-max text-sm font-mono font-bold ' > With : Dr. XXX</h1>
                      <h1 className=' w-full h-max text-sm font-mono font-bold ' > Designation : Orthologist(AIIMS , Delhi)</h1>

                  </div>
          </div>
          
        </>
          
    
  )
}

export default Timeline