import React, { useMemo } from 'react'
import AdmissionCard from './AdmissionCard'
import PatientQueue from '../../Profile/mock data/PatientQueue.json'

function AdmissionQueue() {

  let PatientQueueInfo = PatientQueue

  return (
    <div className=' p-4 gap-8 bg-white flex flex-col h-full  ' >
        {PatientQueueInfo.map((patient)=>{
          return(
            <AdmissionCard PatientName={patient.Name} time={patient.time} date={patient.date} />
          )
        })}
    </div>
  )
}

export default AdmissionQueue