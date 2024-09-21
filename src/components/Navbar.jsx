import React from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown/Dropdown'
import DropdownItem from './Dropdown/DropdownItem'
import { FaChevronDown } from 'react-icons/fa'
import ButtonDown from './Hospital/ButtonDown'

function Navbar() {
   
    const Items = ["Vacant Beds","Hospitals","Emergencies",]
  return (
    <div className=' grid grid-cols-3  justify-stretch justify-items-center items-center w-screen h-max bg-white  ' >
        <div  className='  justify-self-center text-center font-serif  font-bold  grid grid-cols-3 justify-stretch gap-8 '  > 
            <Link to="/CareNexus/home" className='active:text-zinc-400 active:border-b-2 border-b-black border-double ' >Home</Link>
            <Link to="/CareNexus/about" className='active:text-zinc-400 active:border-b-2 border-b-black border-double ' >About</Link>
            <Link to="/CareNexus/ourteam" className='active:text-zinc-400 active:border-b-2 border-b-black border-double ' >Our Team</Link> 
        </div>
        <div className=' flex justify-center items-center w-full h-max p-6 ' ><Link to="/CareNexus/home" ><Logo/></Link></div>
        <div  className=' justify-self-center text-center items-center font-serif  font-bold  grid grid-cols-3 justify-stretch gap-8 '  > 
            <div className=' active:text-zinc-400 active:border-b-2 border-b-black border-double ' ><ButtonDown Name={"Services"} content={Items} /></div>
            <Link to="/CareNexus/register" className='active:text-zinc-400 active:border-b-2 border-b-black border-double ' >Join Us</Link>
            <Link to="/CareNexus/contactus" className='active:text-zinc-400 active:border-b-2 border-b-black border-double ' >Contact Us</Link> 
        </div>
    </div>
  )
}

export default Navbar