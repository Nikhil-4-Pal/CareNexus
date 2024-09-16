import React, { useState } from 'react'
import { FaBed } from "react-icons/fa";
import { IoMdMove } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa';
import BedCard from './BedCard';
import Popup from 'reactjs-popup';
import { useList } from './Bedlist';
import StatusTable from './StatusTable';
import PatientInfo from '../../Profile/mock data/PatientInfo.json'


function WardView() {
    
    

    const [bedno , setBedno] = useState('')
    const [patient , setPatient] = useState('')
    const [reason , setReason] = useState('')

    const [bedlist , setBedlist] = useState([])
    
    class newlistelement {
        constructor(Bedno , Patientname , Reason){
            this.Bedno = Bedno
            this.Patientname = Patientname
            this.Reason = Reason
        }
    }

    const handlebeds = ()=>{
       let newObj = new newlistelement(bedno , patient , reason)
        setBedlist((prev)=>([...prev , newObj]))
        console.log(bedlist);
        
    }

    // const additems = (item)=>{
    //     setBedlist((prev) =>([...prev ,item ]))
    // }




  return (
    <div className=' w-screen h-full  ' >
        <div className=' wardbuttons flex flex-col gap-8 ' >
            <div className=' flex justify-end gap-9 h-[50%] mr-4  ' >
                <button className=' flex items-center gap-3 text-lg font-mono font-bold p-4 bg-gray-100 active:border-x-2 active:border-y-2 border-black ' ><MdAssignmentTurnedIn color='blue' />Assign Bed</button>
                <button className=' flex items-center gap-3 text-lg font-mono font-bold p-4 bg-gray-100 active:border-x-2 active:border-y-2 border-black ' ><IoMdMove/>Move Bed</button>
                <Popup 
                trigger={<button className=' flex items-center gap-3 text-lg font-mono font-bold p-4 bg-gray-100 active:border-x-2 active:border-y-2 border-black ' ><IoAddCircle/>Add Bed</button>} 
                position={'left top'}
                on={'click'} 
                closeOnDocumentClick
                arrow={false}
                >
                    <div className=' h-[20rem] w-[20rem] pt-4 items-center flex flex-col shadow-sm shadow-black rounded-lg bg-blue-200' >
                    <div  className=' h-max w-max flex flex-col gap-4 ' >
                        <input 
                        
                        onChange={(e)=>{
                            setBedno(e.target.value)
                        }} placeholder=' Bed Number ' className='bedinput p-3 focus:outline-none w-[100%] rounded-lg ' type="text" />
                        <input 
                        
                        onChange={(e)=>{
                            setPatient(e.target.value)
                        }} placeholder=' Patient Name ' className='patientinput p-3 focus:outline-none w-[100%] rounded-lg ' type="text" />
                        <input 
                        
                        onChange={(e)=>{
                            setReason(e.target.value)
                        }} placeholder=' Reason of Admission ' className='reasoninput p-3 focus:outline-none w-[100%] rounded-lg ' type="text" />
                    </div>
                    <div className=' p-6 flex gap-6 text-lg font-mono font-bold ' >
                        <button onClick={handlebeds} className=' bg-green-500 rounded-xl p-3 ' >Proceed</button>
                        <button className=' bg-green-500 rounded-xl p-3 ' >Cancel</button>
                    </div>
                    </div>
                    
                </Popup>
                
                <button className=' flex items-center gap-3 text-lg font-mono font-bold p-4 bg-gray-100 active:border-x-2 active:border-y-2 border-black ' ><FaBed/>Bed Status</button>
            </div>
            <div className=' w-full h-max  flex items-center ' >
                <div className=' flex justify-start gap-8 px-4 w-[50%] ' >
                    <h1 className=' flex gap-1 items-center text-md font-mono font-bold  ' ><RiCheckboxBlankFill color='green'  />Available</h1>
                    <h1 className=' flex gap-1 items-center text-md font-mono font-bold  ' ><RiCheckboxBlankFill color='Blue' />Occupied</h1>
                    <h1 className=' flex gap-1 items-center text-md font-mono font-bold  ' ><RiCheckboxBlankFill color='purple' />Untidy</h1>
                    <h1 className=' flex gap-1 items-center text-md font-mono font-bold  ' ><RiCheckboxBlankFill color='violet' />Reserved</h1>
                    <h1 className=' flex gap-1 items-center text-md font-mono font-bold  ' ><RiCheckboxBlankFill color='red' />Isolation</h1>
                </div>
                <div className=' w-[50%] flex justify-end ' >
                    <button className='bg-white pl-2  ' ><FaSearch  /></button>
                    <input type="text" className=' p-3 font-semibold w-[80%] h-max text-xl focus:outline-none mr-2 ' placeholder=' Search By Patient Name or Bed No. '   />
                </div>
            </div>
        </div>
        <div className=' flex ' >
        <div className=' pl-[5rem]  grid grid-cols-3 gap-[2rem] w-[90%] wardview overflow-y-scroll no-scrollbar mt-1 bg-white h-[57.5vh]  ' >
            {PatientInfo.map((items)=>{
                return(
                    <BedCard PatientName={items.full_Name} bednumber={items.Bed_No} ReasonVisit={reason} />
                )
            })}
        </div>

        <div className='  flex flex-col h-[58vh] bg-blue-100 w-[20%] ' >
        <div className=' heading text-2xl w-full h-max font-semibold font-mono text-center text-blue-900 ' > Bed Status </div>
        <div className=' flex justify-center h-[50%] w-full ' >
            <StatusTable/>
        </div>
      </div>
        </div>
        
    </div>
  )
}

export default WardView 