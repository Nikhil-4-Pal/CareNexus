import React from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown/Dropdown'
import DropdownItem from './Dropdown/DropdownItem'

function Navbar() {
   
    const Items = ["Vacant Beds","Hospitals","Emergencies",]
  return (
    <div className= ' bg-white bg-opacity-55 backdrop-blur-sm absolute z-[999] mx-auto h-[15%]  flex justify-center items-center justify-between w-full   px-8 ' >
        <div className=' text-center font-Raleway grid grid-cols-3 gap-4 self-center ' >
            <Link className=' hover:bg-black hover:text-white p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/home' >Home</Link>
            <Link className=' hover:bg-black hover:text-white  p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/about' >About</Link>
            <Link className=' hover:bg-black hover:text-white  p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/contact' >Contact Us</Link>
        </div>
        <Link to='/home' className=' max-h-20 h-max '  >
            <Logo/>
        </Link>
        <div className='text-center font-Raleway grid grid-cols-3 gap-4 self-center ' >
            <button className='hover:bg-black hover:text-white rounded-full' ><Dropdown btnText ="Services" content={ <> {Items.map((item)=>(  <DropdownItem key={item} >{item}</DropdownItem>  ))} </>   }  /></button>
            <Link className='  hover:bg-black hover:text-white p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/team' >Our Team</Link>
            <Link className='  hover:bg-black hover:text-white p-2 rounded-full border-x-2 border-y-2 border-x-black border-y-black '  to='/register' >Join Us</Link>
        </div>
        </div>
  )
}

export default Navbar