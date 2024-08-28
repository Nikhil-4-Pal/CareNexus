import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleDown, FaChevronCircleUp, FaChevronDown , FaChevronUp } from 'react-icons/fa'
import './Table.css'
import ButtonDown from './ButtonDown'
import { CiSearch } from "react-icons/ci";
import Card from './Card'



function Table() {
 
  return (
    <div className='w-full flex justify-center items-center h-screen  bg-sky-700  ' >

      <div className=' flex flex-col overflow-scroll no-scrollbar  items-center absolute Card min-w-[95%] bg-opacity-100  top-[18%] bg-black/90  font-Raleway  rounded-lg h-[80%] ' >
          <div className=' justify-evenly flex justify-center items-center w-full h-max ' >

            <div className=' flex justify-evenly  justify-center items-center  rounded-lg  w-max h-max bg-opacity-20 backdrop-blur-sm  top-[0] left-[10]    ' >
                <ButtonDown Name={"Sort"} leftbtn={6} leftcont={3} topbtn={20} topcont={"[200%]"} content={['Name','Distance','Rating']} />
                <ButtonDown Name={"Filter"} leftbtn={40} leftcont={40} topbtn={20} topcont={"[200%]"} content={['Name','Distance','Rating']} />
            </div>
            <div className='z-10 w-max h-max flex justify-center items-center  bg-black  rounded-xl opacity-70  focus:opacity-100  ' >
              <input type="text" className=' focus:outline-none focus:bg-black opacity-70 focus:opacity-100 bg-black/70 text-white cursor-text rounded-md p-1  ' /><button><CiSearch color='white' /></button>
            </div>
          </div>
          <div className='overflow-y-scroll Cards absolute w-full no-scrollbar gap-12 flex flex-col justify-center items-center top-[35%]  z-20 p-6 ' >
              <Card Name={"AIIMS"} Bedstatus={"Available"} emergenciesstatus={"Notavailable"} appointmentstatus={"Available"} bgcolor={"green-400"} />
              <Card Name={"AIIMS"} Bedstatus={"Available"} emergenciesstatus={"Notavailable"} appointmentstatus={"Available"} bgcolor={"green-400"} />
              <Card Name={"AIIMS"} Bedstatus={"Available"} emergenciesstatus={"Notavailable"} appointmentstatus={"Available"} bgcolor={"green-400"} />
              <Card Name={"AIIMS"} Bedstatus={"Available"} emergenciesstatus={"Notavailable"} appointmentstatus={"Available"} bgcolor={"green-400"} />
              <Card Name={"AIIMS"} Bedstatus={"Available"} emergenciesstatus={"Notavailable"} appointmentstatus={"Available"} bgcolor={"green-400"} />
              <Card Name={"AIIMS"} Bedstatus={"Available"} emergenciesstatus={"Notavailable"} appointmentstatus={"Available"} bgcolor={"green-400"} />


          </div>
      </div>
    </div>
  )
}

export default Table