import React from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown/Dropdown'
import DropdownItem from './Dropdown/DropdownItem'

function Navbar() {
   
    const Items = ["Vacant Beds","Hospitals","Emergencies",]
  return (
    <div className=' opacity- mx-auto   flex justify-center items-center justify-between w-full position  px-8 ' >
        <div className=' text-center font-Raleway grid grid-cols-3 gap-4 self-center ' >
            <Link className=' p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/home' >Home</Link>
            <Link className=' p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/about' >About</Link>
            <Link className=' p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/contact' >Contact Us</Link>
        </div>
        <Link to='/home' className=' max-h-20 h-max '  >
            <Logo/>
        </Link>
        <div className='text-center font-Raleway grid grid-cols-3 gap-4 self-center ' >
            <button ><Dropdown btnText ="Services" content={ <> {Items.map((item)=>(  <DropdownItem key={item} >{item}</DropdownItem>  ))} </>   }  /></button>
            <Link className=' p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/team' >Our Team</Link>
            <Link className=' p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/register' >Join Us</Link>
        </div>
        </div>
  )
}

export default Navbar