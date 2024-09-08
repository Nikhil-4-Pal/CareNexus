import React from 'react'

const patientinfo = [
    {
        PatientId :"xxx8787",
        PatientName:"Nikhil Pal",
        PatientAge:"20",
        PatientSex :"Male",
        PatientContact:"98646XXXXX",
        PatientContactAlt:"564654XXXX",
        PatientEmail : "xxx@gmail.com",
        PatientAddress : "XYZ/545 NEW DELHI -25"
    }
]

function PatientInfo() {
  return (
    <div>
         { patientinfo.map((patientinfo)=>{
            return(
                <div>
        <h1 className=' px-8 pt-8 pb-4 w-full text-[140%] font-Raleway text-gray-800 text-center ' >Personal Information</h1>
            <div className=' font pl-4 personalinfo flex text-[120%] flex-col gap-6     ' >
                <div className=' flex  items-center w-full  ' ><h1 className='    font-mono font-bold  ' >Patient Id : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientId}</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className='   font-mono font-bold  ' >Patient Name : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientName}</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className='    font-mono font-bold  ' >Age : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientAge}</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className='    font-mono font-bold  ' >Sex : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientSex}</h1> </div>
            </div>
            <h1 className='px-8 py-8  w-full text-[140%] font-Raleway text-gray-800 text-center ' >Contact Details</h1>
            <div className=' font pl-4 personalinfo flex text-[100%] flex-col gap-6     ' >
                <div className=' flex  items-center w-full  ' ><h1 className='   font-mono font-bold  ' >Mobile No. : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientContact}</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className='    font-mono font-bold  ' >Alt. Mobile No. : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientContactAlt}</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className='    font-mono font-bold  ' >Email : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientEmail}</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className='    font-mono font-bold  ' >Address : </h1> <h1 className=' font-mono font-bold' >{patientinfo.PatientAddress}</h1> </div>
            </div>
          
        </div>
            )
         })
        
        }
    </div>
   
    
  )
}

export default PatientInfo