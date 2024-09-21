import React from 'react'



function BedCard({bednumber , PatientName , ReasonVisit}) {
    


  return (
    
    <div className=' bed h-[5rem]  max-w-[10rem] shadow-sm shadow-black cursor-pointer  bg-white flex justify-around  items-center rounded-2xl ' >
                <div className=' h-[70%] w-[10%] bg-black  rounded-3xl ' ></div>
                <div className=' text-xs font-bold ' >
                    <h1>Bed No. :{bednumber}</h1>
                    <h1>{PatientName}</h1>
                    <h1>{ReasonVisit}</h1>
                </div>
    </div>
  )
}

export default BedCard