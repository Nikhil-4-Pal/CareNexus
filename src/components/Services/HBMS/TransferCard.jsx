import React from 'react'

function TransferCard({PatientName , date , time , TransferFrom , TransferTo}) {
  return (
    <div className=' bg-white p-2 gap-4 flex  flex-col justify-around rounded-xl shadow-sm shadow-black w-[95%]  min-h-[20%] text-md font-bold font-mono  ' >
      <div className=' flex items-baseline justify-between px-4 ' ><h1 className=' patientname  text-lg ' >{PatientName}</h1>
        <div className=' text-gray-400 flex flex-col text-xs ' ><h1>{date}</h1>
        <h1 className='text-xs ' >{time}</h1></div></div>
        
        <div className=' items-center flex justify-around text-xs px-4  ' ><h1>From : {TransferFrom}</h1>
        <h1>To : {TransferTo}</h1></div>
    </div>
  )
}

export default TransferCard