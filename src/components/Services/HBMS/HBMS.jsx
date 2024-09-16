import React, { useState } from 'react'
import AdmissionQueue from './AdmissionQueue'
import PatientDischarge from './PatientDischarge'
import PatientTransfer from './PatientTransfer'
import { TbReportSearch } from "react-icons/tb";
import { RiHospitalFill } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import WardView from './WardView';
import StatusTable from './StatusTable'
import PatientInfoComp from './PatientInfo';
import BillingWindow from './BillingWindow';
<<<<<<< HEAD
import PatientReports from './PatientReports';
=======
>>>>>>> origin/master

function HBMS() {

  const [admit , setAdmit] = useState(true)
  const [discharge , setDischarge] = useState(false)
  const [transfer , setTransfer] = useState(false)
  const [ward , setWard] = useState(true)
  const [patientlist , setPatients] = useState(false)
  const [bill , setBill] = useState(false)
  const [reports , setReports] = useState(false)


  const handleadmit = ()=>{
    setAdmit(true)
    setDischarge(false)
    setTransfer(false)
  }
  const handledischarge = ()=>{
    setDischarge(true)
    setAdmit(false)
    setTransfer(false)
  }
  const handletransfer = ()=>{
    setTransfer(true)
    setAdmit(false)
    setDischarge(false)
  }
  const handlereload = ()=>{
    window.location.reload(false)
  }
  const handleward = ()=>{
    setWard(true)
    setBill(false)
    setReports(false)
    setPatients(false)
  }
  const handlepatients = ()=>{
    setWard(false)
    setBill(false)
    setReports(false)
    setPatients(true)
  }
  const handlebill = ()=>{
    setWard(false)
    setBill(true)
    setReports(false)
    setPatients(false)
  }
  const handlereports = ()=>{
    setWard(false)
    setBill(false)
    setReports(true)
    setPatients(false)
  }

  return (
<<<<<<< HEAD
    <div className=' flex w-screen h-full ' >
      <div className='  flex flex-col   items-center h-full w-[20%] bg-white  ' >
        <h1 className=' text-3xl font-bold text-blue-900 pb-8 ' >Bed Queuing</h1>
        <div className='button w-full h-max flex justify-evenly  ' >
          <button onClick={handleadmit} className=' text-center  text-md font-mono font-bold active:border-b-2 border-black ' >Admit</button>
          <button onClick={handledischarge} className='  text-center text-md font-mono font-bold active:border-b-2 border-black ' >Discharge</button>
          <button onClick={handletransfer} className=' text-center  text-md font-mono font-bold active:border-b-2 border-black ' >Transfer</button></div>
        <div className=' buttoncontent bg-white h-full w-full  ' >
          { admit ?  <div className=' admitqueue h-[80vh] overflow-scroll no-scrollbar ' ><AdmissionQueue/></div> : null }
=======
    <div className=' flex w-full h-full ' >
      <div className='  flex flex-col gap-6  items-center h-full w-[20%] bg-white  ' >
        <h1 className=' text-3xl font-bold text-blue-900 pb-8 ' >Bed Queuing</h1>
        <div className='button w-full h-max ' ><button onClick={handleadmit} className=' text-center w-[30%] text-md font-mono font-bold active:border-b-2 border-black ' >Admit</button>
        <button onClick={handledischarge} className='  text-center w-[30%] text-md font-mono font-bold active:border-b-2 border-black ' >Discharge</button>
        <button onClick={handletransfer} className=' text-center w-[30%] text-md font-mono font-bold active:border-b-2 border-black ' >Transfer</button></div>
        <div className=' buttoncontent bg-white h-full w-full  ' >
          { admit ?  <div className=' admitqueue max-h-[80vh] overflow-scroll no-scrollbar ' ><AdmissionQueue/></div> : null }
>>>>>>> origin/master
          { discharge ? <div className=' max-h-[80vh] overflow-scroll no-scrollbar discharge ' ><PatientDischarge/></div> : null }
          { transfer ? <div className=' max-h-[80vh] min-h-[80vh] overflow-scroll no-scrollbar Transfer ' ><PatientTransfer/></div>: null}
        </div>
      </div>
      <div className=' h-full w-[80%] ' >
        <div className=' p-4 justify-end  flex gap-[3%] maintop w-full h-[15vh]  ' >
          <button onClick={handleward}  className=' flex flex-col items-center active:border-x-2 active:border-y-2 border-black  w-[15%] bg-blue-400 h-max p-2 text-lg font-mono font-bold  ' ><RiHospitalFill/>Ward View</button>
          <button onClick={handlepatients}  className=' flex flex-col items-center active:border-x-2 active:border-y-2 border-black  w-[15%] bg-blue-400 h-max p-2 text-lg font-mono font-bold  ' ><IoIosPerson/>Patients</button>
          <button onClick={handlebill}  className=' flex flex-col items-center active:border-x-2 active:border-y-2 border-black  w-[15%] bg-blue-400 h-max p-2 text-lg font-mono font-bold  ' ><MdOutlinePayment/>billings</button>
          <button onClick={handlereports}  className=' flex flex-col items-center active:border-x-2 active:border-y-2 border-black  w-[15%] bg-blue-400 h-max p-2 text-lg font-mono font-bold  ' ><TbReportSearch/>Medical Reports</button>
          <button className=' flex flex-col items-center active:border-x-2 active:border-y-2 border-black  w-[15%] bg-blue-400 h-max p-2 text-lg font-mono font-bold  ' onClick={handlereload}  ><LuRefreshCcw/>Refresh</button>
        </div>
        <div className=' maincontent w-full h-full ' >
          {ward ? <div className=' flex w-full h-full wardview ' > 
            <WardView/>
             </div> : null }
          {patientlist ? <div className=' flex justify-center w-full h-full wardview ' ><PatientInfoComp/> </div> : null }
          {bill ? <div className=' w-full h-full wardview ' ><BillingWindow/> </div> : null }
<<<<<<< HEAD
          {reports ? <div className=' w-full h-full wardview ' ><PatientReports/> </div> : null }
=======
          {reports ? <div className=' w-full h-full wardview ' >reposts </div> : null }
>>>>>>> origin/master
        </div>
      </div>
      
    </div>
  )
}

export default HBMS