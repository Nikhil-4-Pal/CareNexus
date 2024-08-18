import React from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'

function Navbar() {
   

  return (
    <div className=' opacity- mx-auto translate-y-[60%] border-x-4  border-y-4 border-x-neutral-900 border-y-neutral-950  rounded-full  flex justify-center items-center justify-around w-[50%] position ' >

        <Link to='/home' className=' max-h-20 h-max '  >
            <Logo/>
        </Link>
        <div className=' grid grid-cols-3 gap-4 self-center ' >
            <Link to='/home' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact Us</Link>
        </div>
        </div>
  )
}

export default Navbar