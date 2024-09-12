import React from 'react'
import TransferCard from './TransferCard'

function PatientTransfer() {
  return (
    <div className=' flex flex-col items-center ' ><TransferCard PatientName={"xsodn"} date={"12/45/4"} time={"12:54"} TransferFrom={"ICU"} TransferTo={"general ward"} /></div>
  )
}

export default PatientTransfer