import React from 'react'
import PartenerCard from './PartenerCard'

function Partener() {
  return (
    <div className=' relative overflow-y-auto no-scrollbar  gap-12 p-8 flex flex-col justify-center items-center w-screen h-screen bg-orange-500' >
      <div className=' sticky top-0 text-center font-Raleway text-[2rem] text-blue-800 mb-2' >Meet Our Parteners !!</div>
      <PartenerCard imgUrl={"https://upload.wikimedia.org/wikipedia/commons/c/cd/AIIMS_-New_Delhi%27s_Ward_Block.jpg"} sideTitle={"AIIMS DELHI"} sideContent={"Since its inception in 1956, the All India Institute of Medical Sciences (AIIMS), New Delhi has been India's premier public medical university. The university also harbours India's top hospital.[3] The institute is governed by the AIIMS Act, 1956 and operates autonomously with funds provisioned by the Ministry of Health and Family Welfare, Government of India."}  />
      <PartenerCard imgUrl={"https://mitc.b-cdn.net/wp-content/uploads/2021/11/20-1.jpg"} sideTitle={"BLK Max"} sideContent={" BLK-Max Super Speciality Hospital is the largest stand-alone private sector hospitals in Delhi and the range of services offered at BLK make the Hospital a force to reckon with in the field of Super Speciality Tertiary Healthcare"}  />
    </div>
    

  )
}

export default Partener