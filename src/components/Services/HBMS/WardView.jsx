import React from 'react'
import { FaBed } from "react-icons/fa";
import { IoMdMove } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa';


function WardView() {
  return (
    <div className=' w-full h-full  ' >
        <div className=' wardbuttons flex flex-col gap-8 ' >
            <div className=' flex justify-end gap-9 h-[50%] mr-4  ' >
                <button className=' flex items-center gap-3 text-lg font-mono font-bold p-4 bg-gray-100 active:border-x-2 active:border-y-2 border-black ' ><MdAssignmentTurnedIn color='blue' />Assign Bed</button>
                <button className=' flex items-center gap-3 text-lg font-mono font-bold p-4 bg-gray-100 active:border-x-2 active:border-y-2 border-black ' ><IoMdMove/>Move Bed</button>
                <button className=' flex items-center gap-3 text-lg font-mono font-bold p-4 bg-gray-100 active:border-x-2 active:border-y-2 border-black ' ><IoAddCircle/>Add Bed</button>
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
        <div className=' wardview overflow-y-scroll no-scrollbar mt-1 bg-yellow-200 h-[64vh]  ' >
            <div className=' bed h-[15%] w-[12%] cursor-pointer  bg-white flex justify-around  items-center rounded-2xl ' >
                <div className=' h-[70%] w-[10%] bg-black  rounded-3xl ' ></div>
                <div className=' text-xs font-bold ' >
                    <h1>Bed No. : 01</h1>
                    <h1>Manish Kumar</h1>
                    <h1>Broken Leg</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WardView