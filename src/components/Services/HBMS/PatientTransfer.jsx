import React from 'react'
import TransferCard from './TransferCard'
import TransferPatientData from '../../Profile/mock data/TransferPatientData.json'

function PatientTransfer() {

  let PatientTransferInfo = TransferPatientData

  return (
    <div className=' flex flex-col items-center ' >
      {PatientTransferInfo.map((transferinfo)=>{
        <TransferCard
        PatientName={transferinfo.Name}
        time={transferinfo.time}
        date={transferinfo.date}
        TransferFrom={transferinfo.From}
          TransferTo={transferinfo.To} />
      })}
    </div>
  )
}

export default PatientTransfer