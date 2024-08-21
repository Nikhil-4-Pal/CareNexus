import React from 'react'
import ServiceCard from './ServiceCard'

function Marquee() {
  return (
    <div  className=' flex my-[10rem] backdrop-blur-3xl   w-full ' >
      <ServiceCard cardtitle={"Find Hospitals"} cardcontent={'"Find all the hospital with available emergencies and beds near you"'} btnContent={"Hospitals"} />
      <ServiceCard cardtitle={"Find Hospitals"} cardcontent={'"Find all the hospital with available emergencies and beds near you"'} btnContent={"Hospitals"} />


    </div>
  )
}

export default Marquee