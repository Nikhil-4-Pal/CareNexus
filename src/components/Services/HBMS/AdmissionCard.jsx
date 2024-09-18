import React from 'react'

function AdmissionCard({PatientName , date , time}) {
  return (
    <div className=' bg-white p-2 flex justify-around rounded-xl shadow-sm shadow-black w-[95%] items-center min-h-[20%] text-md font-bold font-mono  ' >
        <h1 className=' patientname  text-lg ' >{PatientName}</h1>
        <div className=' text-gray-400 flex flex-col text-xs ' ><h1>{date}</h1>
        <h1 className='text-xs ' >{time}</h1></div>
        
    </div>
  )
}

export default AdmissionCard