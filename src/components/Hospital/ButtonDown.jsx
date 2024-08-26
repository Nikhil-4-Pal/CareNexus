import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleDown, FaChevronCircleUp, FaChevronDown , FaChevronUp } from 'react-icons/fa'
import './Table.css'
function ButtonDown({Name , topbtn ,topcont ,content , leftbtn ,leftcont}) {

    const [working,setWorking] = useState(true)
  const chevreon = <FaChevronDown size={"0.9rem"}  /> 
  const notchevreon = <FaChevronUp size={"0.9rem"}  />
  
  

  

  const handleworking = ( )=>{
    setWorking((prev)=>(!prev))
  }

  let componentji = chevreon
  
  if(working){
    componentji = chevreon
  }
  else{
    componentji = notchevreon
  }
  
  let visibility = "opacity-0"
  let postn = "-translte-x-100"


  if (working) {
    visibility = "opacity-0"
    postn = "-translte-x-100"
  }
  else{
    visibility="opacity-100"
    postn = "translte-x-0"
  }

  

  return (
            <div>
                <div  >
                  <button onClick={handleworking} className={ `z-10 flex gap-2 p-1 items-center justify-center transition-all duration-500 absolute left-${leftbtn} top-${topbtn} text-white text-[1.2rem] font-mono bg-black border-x-2 border-y-2 border-none hover:bg-white  hover:text-black w-24 h-10 rounded-full `} >{Name}{ componentji }</button>
                  
                  
                </div>
                <ul className={` ${visibility} ${postn} flex flex-col  ease-in-out duration-500  text-center absolute left-${leftcont}     top-${topcont} bg-gray-100  rounded-md cursor-pointer w-32 h-max   `} >
                  {content.map((items)=>(<Link><li className='rounded-md  hover:bg-black hover:bg-opacity-70 hover:text-white w-[100%] font-bold ' >{items}</li></Link>))}
                  
                </ul>
            </div> 
  )
}

export default ButtonDown