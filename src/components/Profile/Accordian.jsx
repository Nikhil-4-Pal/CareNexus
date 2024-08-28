import React, { useState } from 'react'
import { FaChevronDown , FaChevronUp } from 'react-icons/fa'

function Accordian( {accordiancontent , accordianname} ) {

    const [working , setWorking] = useState(true)

    const handleclick = () =>{
        setWorking((prev)=>(!prev))
    }

    let visible = 'hidden'

    if (working) {
        visible = 'hidden'
    }
    else{
        visible = ''
    }

  return (
    <div className=' my-4  ' >
         <button onClick={handleclick} className='  w-full h-[25%]  gap-4 font-bold font-sans pr-4 pl-4 cursor-pointer border-black text-md mt-4 flex  justify-between  items-center '  >{accordianname}{ working ? <FaChevronDown/> : <FaChevronUp/> } </button>
        <div className={` ${visible} w-full  h-max p-4 text-left text-lg font-bold font-sans  bg-black/10 `} >{accordiancontent}</div>
        
    </div>
  )
}

export default Accordian