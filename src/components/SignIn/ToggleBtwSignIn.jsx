import React from 'react'
import {Link} from 'react-router-dom'

function ToggleBtwSignIn() {
  return (
    <div className=' flex justify-evenly items-center  h-[560px] w-screen ' >
        <div>
            <Link to="/CareNexus/usersignin" >
                <button className=' bg-black rounded-2xl w-[12rem] h-max text-white text-2xl p-5 hover:bg-black/80 ' >User</button>
            </Link>
            <h1></h1>
        </div>
        <div className=' w-[0.1rem] h-[30rem] bg-black/15 ' > </div>
        <div>
            <Link to="/CareNexus/oraganisationsignin" >
                <button className=' bg-black rounded-2xl w-[12rem] h-max text-white text-2xl p-5 hover:bg-black/80 ' >Organization</button>
            </Link>
            <h1></h1>
        </div>
    </div>  
  )
}

export default ToggleBtwSignIn