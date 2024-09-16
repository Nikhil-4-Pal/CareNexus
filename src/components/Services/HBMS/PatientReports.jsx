import React from 'react'
import ReportTables from './ReportTables'

function PatientReports() {
  return (
    <div className=' w-[100%] h-full bg-green-400 ' >
        <div className=' flex  flex-col w-full min-h-[20%] bg-white ' >
            <div className=' flex justify-start gap-[50%] text-md font-mono font-bold  patientinfo ' >
              <div className='  text-left flex flex-col gap-5 ' >
                <h1>Patient Id : </h1>
                <h1>Patient Name :  </h1>
                <h1>Date of Admission :  </h1>
              </div>
              <div className=' justify-center  text-left flex flex-col gap-5 ' >
                <h1>Ward :  </h1>
                <h1>Bed No. :  </h1>
              </div>
            </div>
              <div className=' border-t-2 border-neutral-200 Patientsreports ' >
                    <ReportTables/>
              </div>
        </div>
    </div>
  )
}

export default PatientReports