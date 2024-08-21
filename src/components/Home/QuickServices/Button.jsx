import React from 'react'
import {Link} from 'react-router-dom'

function 
Primarybutton({btnName}) {
  return (
    <div className=' p-2 hover:bg-teal-100 transition-all border-x-2 rounded-full font-Raleway border-y-2   max-w-max  border-x-black border-y-black  ' >
       <Link to={`/${btnName}`} ><button>{btnName}</button></Link>
    </div>
  )
}

export default Primarybutton