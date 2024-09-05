import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleDown, FaChevronCircleUp, FaChevronDown , FaChevronUp } from 'react-icons/fa'
import './Table.css'
import ButtonDown from './ButtonDown'
import { CiSearch } from "react-icons/ci";
import Card from './Card'

const hospitallist = [
  {Name : "AIIMS" , Bedstatus : "Unavailable" , emergenciesstatus : "Unavailable" , appointmentstatus :"Available" },
  {Name : "RML Hospital" , Bedstatus : "Available" , emergenciesstatus : "Unavailable" , appointmentstatus :"Available" },
  {Name : "Safdarjung Hospital" ,Bedstatus : "Available" , emergenciesstatus : "Available" , appointmentstatus :"Available" },
  {Name : "Deen Dayal Upadhayay Hospital" , Bedstatus : "Available" , emergenciesstatus : "Unavailable" , appointmentstatus :"Unavailable"},
  {Name : "Apollo Hospital" , Bedstatus : "Available" , emergenciesstatus : "Available" , appointmentstatus :"Available" },
  {Name : "BLK MAX" , Bedstatus : "Unavailable" , emergenciesstatus : "Available" , appointmentstatus :"Available" },

]

function Table() {
 
  return (
    <div className='w-full flex translate-y-[0%] justify-center items-center h-screen   ' >

      <div className=' flex flex-col overflow-scroll no-scrollbar  items-center absolute Card w-[90%] bg-opacity-100  top-[0] bg-white font-Raleway  rounded-lg h-screen ' >
          <div className=' mt-20 flex items-center justify-around w-full ' >

            <div  className=' flex w-[40%] justify-evenly items-center ' >
                <ButtonDown Name={"Sort"} leftbtn={6} leftcont={3} topbtn={20} topcont={"[200%]"} content={['Name','Distance','Rating']} />
                <ButtonDown Name={"Filter"} leftbtn={40} leftcont={40} topbtn={20} topcont={"[200%]"} content={['Name','Distance','Rating']} />
            </div>
            <div  >
            <button className='flex items-center bg-black/70 rounded-xl px-2 '  ><input type="text" className=' focus:outline-none bg-transparent   text-white cursor-text rounded-md p-1  ' /><CiSearch color='white' /></button>
            </div>
          </div>
          <div className='overflow-y-scroll Cards absolute w-full no-scrollbar gap-12 flex flex-col justify-center items-center top-[35%]  z-20 p-6 ' >
              
              {hospitallist.map((hospital)=>{
                return(
                  <Card Name={hospital.Name} Bedstatus={hospital.Bedstatus} emergenciesstatus={hospital.emergenciesstatus} appointmentstatus={hospital.appointmentstatus} bgcolor={"green-400"} />
                )
              })}


          </div>
      </div>
    </div>
  )
}

export default Table