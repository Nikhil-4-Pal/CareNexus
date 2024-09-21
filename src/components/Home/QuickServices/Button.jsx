import React from 'react'
import {Link} from 'react-router-dom'

function 
Primarybutton({btnName}) {
  return (
    <div className=' p-2 hover:bg-black hover:text-white border-x-2 rounded-full font-Raleway border-y-2   max-w-max  border-x-black border-y-black  ' >
       <Link to={`/CareNexus/${btnName}`} ><button>{btnName}</button></Link>
    </div>
  )
}

export default Primarybutton