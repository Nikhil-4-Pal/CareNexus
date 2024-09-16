import React, { useState } from 'react'
import { MdClear, MdLocalPrintshop } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import {  noteslist } from './notes';



function SOAPeditor() {

 


  
  

const [subject , setSubject] = useState('')
const [objective , setObjective] = useState('')
const [assessment , setAssessment] = useState('')
const [plan , setPlan] = useState('')


// const titles = [{ namemain : "Subject",
//   namevalue: subject
// } ,{ namemain : "Objective",
//   namevalue: objective
// } , { namemain : "Assessment",
//   namevalue: assessment
// } , { namemain : "Plan",
//   namevalue: plan
// } ]

const handlenotes = ()=>{
  const subjectvalue = subject 
  const objectivevalue = objective
  const assessmentvalue = assessment
  const planvalue = plan

  const newNotes = new Notes(subjectvalue,objectivevalue,assessmentvalue,planvalue)
  console.log(subjectvalue);
  console.log(objectivevalue);
  console.log(assessmentvalue);
  console.log(planvalue);

  

  noteslist.push(newNotes)
  console.log(noteslist);
  
}



  return (
    <div className=' flex flex-col gap-4 w-full overflow-scroll no-scrollbar h-full p-6 ' >
        <div  className='  flex justify-between '  >
            <button className=' flex  items-center gap-2 font-bold p-2 bg-gray-300 rounded-xl ' >Print<MdLocalPrintshop/></button>
            <div className=' items-center justify-center flex gap-1 ' >
              <button onClick={handlenotes} className=' flex items-center gap-1 font-bold bg-green-500 p-2 rounded-xl ' >Save<FaSave/></button>
              <button className=' flex items-center gap-1 font-bold bg-red-500 p-2 rounded-xl ' >Clear<MdClear/></button>
            </div>
        </div>
      
            <div className=' flex   flex-col gap-12 w-full h-[90%] ' >
              <div>
              <h1 className=' text-xl text-blue-900 font-sans font-extrabold ' >Subject :</h1>
                <textarea
                onChange={(e)=>{
                  setSubject(e.target.value)
                }}
                value={subject}
                className={` no-scrollbar font-bold text-xl w-full h-[100%] focus:outline-none border-x-2 border-y-2 border-black rounded-xl p-2 `}
                name='Subject'
                id='Subject'
                placeholder={`Start Typing....Subject `}
                ></textarea>
              </div>
              <div>
              <h1 className=' text-xl text-blue-900 font-sans font-extrabold ' >Objective :</h1>
                <textarea
                onChange={(e)=>{
                  setObjective(e.target.value)
                }}
                value={objective}
                className={` no-scrollbar font-bold text-xl w-full h-[100%] focus:outline-none border-x-2 border-y-2 border-black rounded-xl p-2 `}
                name='Objective'
                id='Objective'
                placeholder={`Start Typing....Objective `}
                ></textarea>
              </div>
              <div>
              <h1 className=' text-xl text-blue-900 font-sans font-extrabold ' >Assessment :</h1>
                <textarea
                onChange={(e)=>{
                  setAssessment(e.target.value)
                }}
                value={assessment}
                className={` no-scrollbar font-bold text-xl w-full h-[100%] focus:outline-none border-x-2 border-y-2 border-black rounded-xl p-2 `}
                name='Assessment'
                id='Assessment'
                placeholder={`Start Typing....Assessment `}
                ></textarea>
              </div>
              <div>
              <h1 className=' text-xl text-blue-900 font-sans font-extrabold ' >Plan :</h1>
                <textarea
                onChange={(e)=>{
                  setPlan(e.target.value)
                }}
                value={plan}
                className={` no-scrollbar font-bold text-xl w-full h-[100%] focus:outline-none border-x-2 border-y-2 border-black rounded-xl p-2 `}
                name='Plan'
                id='Plan'
                placeholder={`Start Typing....Plan `}
                ></textarea>
              </div>
                
            </div>
  
        
    </div>
  )
}

export default SOAPeditor