import React, { useState } from 'react'
import PatientInfo from '../../Profile/PatientInfo'
import PatientAvatar from '../../Profile/PatientAvatar'
import SOAPeditor from './SOAPeditor'
import Medicalhistory from '../../PrimaryTable/SecondaryTable'
import PrimaryTable from '../../PrimaryTable/PrimaryTable'
import { FaSearch } from 'react-icons/fa'
import NotesSection from './NotesSection'



const buttons  = [{name:'notes' , funcname :'notesfunc' } ,{name:'Appointments' ,funcname :'appointmentsfunc' },{name:'Drug History',funcname :'drughistoryfunc'},{name:'Medical History',funcname :'medicalhistoryfunc'},{name : 'Prescriptions',funcname :'prescriptionsfunc'}]




function PMF() {

const [notes , setNotes] = useState(true)
const [appointment , setAppointment] = useState(false)
const [drughistory , setDrughistory] = useState(false)
const [medicalhistory , setMedicalhistory] = useState(false)
const [prescription , setPrescription] = useState(false)


const notesfunc = () =>{
  setNotes(true)
  setAppointment(false)
  setDrughistory(false)
  setMedicalhistory(false)
  setPrescription(false)
}

const appointmentsfunc = () =>{
  setNotes(false)
  setAppointment(true)
  setDrughistory(false)
  setMedicalhistory(false)
  setPrescription(false)
}

const drughistoryfunc = () =>{
  setNotes(false)
  setAppointment(false)
  setDrughistory(true)
  setMedicalhistory(false)
  setPrescription(false)
}

const medicalhistoryfunc = () =>{
  setNotes(false)
  setAppointment(false)
  setDrughistory(false)
  setMedicalhistory(true)
  setPrescription(false)
}

const prescriptionsfunc = () =>{
  setNotes(false)
  setAppointment(false)
  setDrughistory(false)
  setMedicalhistory(false)
  setPrescription(true)
}


  return (
    <div className='h-screen w-full flex flex-col ' >
      <div className=' flex gap-4 p-4 justify-end items-center w-full h-[15%]  ' >
        <input
        placeholder="Find your Patient"
        className=' w-full h-[50%] focus:outline-none p-2 text-white text-lg font-medium bg-black/90 rounded-xl placeholder:text-white ' type="text"  />
        <button className=' bg-green-500 rounded-xl shadow-sm shadow-black text-sm font-medium  active:shadow-none ' >Appointment Done</button>
        <button className=' bg-red-500 rounded-xl shadow-sm shadow-black text-sm font-medium   active:shadow-none ' >Appointment Cancelled</button>
      </div>
      <div className=' flex  w-full h-[85%] bg-white ' >
        <div className=' h-full w-[20%] bg-purple-300 ' >
          
          <div className=' w-full h-full  bg-white ' >
              <div className=' h-[50%] ' >
                <PatientAvatar/>
              </div>
              <div className=' h-[50%] overflow-scroll no-scrollbar ' >
                <PatientInfo/>
              </div>
              
          </div>
        </div>
        <div className=' h-full w-[60%]  ' >
          <div className=' p-4 PMFbuttons h-[20%] w-full  ' >
            <div  className=' capitalize h-max gap-1 justify-center w-full flex flex-wrap  ' >
            
              <button onClick={notesfunc} className=' active:bg-black/30 ' >Notes   | </button>
              <div className=' w-[3px] h-full bg-white ' ></div>
              <button onClick={appointmentsfunc} className=' active:bg-black/30 ' >Appointments   | </button>
              <div className=' w-[3px] h-full bg-white ' ></div>
              <button onClick={medicalhistoryfunc} className=' active:bg-black/30 ' >Medical History   | </button>
              <div className=' w-[3px] h-full bg-white ' ></div>
              <button onClick={drughistoryfunc} className=' active:bg-black/30 ' >Drug History   | </button>
              <div className=' w-[3px] h-full bg-white ' ></div>
              <button onClick={prescriptionsfunc} className=' active:bg-black/30 ' >Prescription   | </button>
              <div className=' w-[3px] h-full bg-white ' ></div>
                  
                  
   
              
            </div>
          </div>
          <div className=' overflow-scroll no-scrollbar h-[80%] w-full ' >
              {notes ? <SOAPeditor/> : ''}
              {appointment ? <PrimaryTable/> : null}
              {medicalhistory ? <Medicalhistory/> :null}
              {prescription ? <Prescription/> : null}
              {drughistory ? <MedicineTable/> : null }
          </div>
        </div>
        <div className=' h-full w-[20%] flex flex-col items-center   ' >
          <div className=' m-4  flex items-center bg-black rounded-xl p-2  ' ><input placeholder=' Search ' className=' px-2 font-bold focus:outline-none bg-black text-white '  type="text" /><button><FaSearch color='white' /></button></div>
          <div className=' h-[90%] w-full overflow-scroll no-scrollbar ' >
            <NotesSection/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PMF