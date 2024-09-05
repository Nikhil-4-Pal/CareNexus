import React, { useState ,useEffect } from 'react'
import PrimaryTable from '../PrimaryTable/PrimaryTable'
import { COLUMNSVISIT } from './ColumnVisit'
import MOCK_DATA from './mock data/MOCK_DATA.json'
import SecondaryTable from '../PrimaryTable/SecondaryTable'



function Medicalhistory() {
   
    const [visits , setVisits] = useState(true)
    const [admission , setAdmission] = useState(false)

    const handlevisits = () => {
        setVisits((prev)=>(!prev))
        setAdmission(false)
    }

    const handleadmission = () => {
        setAdmission((prev) => (!prev))
        setVisits(false)
    }


  return (
    <div className=' w-full  h-full   overflow-x-hidden ' >
        <div className=' grid grid-cols-3 contentformedical   w-full h-[50%] bg-white/30 ' >
            <div className=' flex flex-col border-x-2 border-stone-200/35  overflow-y-scroll no-scrollbar ' >
                <h1 className=' w-full p-4 text-center text-2xl font-Raleway  ' >Medical Conditions</h1>
                <ul className=' text-xl font-mono font-bold ml-4 ' >
                    <li>Lorem, ipsum.</li>
                    <li>Lorem.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>
            <div className=' flex flex-col border-x-2 border-stone-200/35  overflow-y-scroll no-scrollbar ' >
                <h1 className=' w-full p-4 text-center text-2xl font-Raleway  ' >Ongoing Medications</h1>
                <ul className=' text-xl font-mono font-bold ml-4 ' >
                    <li>Lorem, ipsum.</li>
                    <li>Lorem.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>
            <div className=' flex flex-col border-x-2 border-stone-200/35  overflow-y-scroll no-scrollbar ' >
                <h1 className=' w-full p-4 text-center text-2xl font-Raleway  ' >Known Allergies</h1>
                <ul className=' text-xl  font-mono font-bold ml-4 ' >
                    <li>Lorem, ipsum.</li>
                    <li>Lorem.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>
        </div>
        <div className= {`tabsformedicalhistory flex-col flex items-center   w-screen h-[50%] `} >
        <div className=' rounded-full items-center h-max w-max font-Raleway flex  text-white gap-4 bg-black/70 ' >
            <button onClick={handlevisits} className=' p-2 px-4 ' >Previous Patient Visits</button>
            <div className=' w-[0.009rem] h-6 bg-gray-600 rounded-full ' ></div>
            <button onClick={handleadmission} className=' p-2 px-4 ' >Previous Patient Admission</button>
            </div>
            <div className=' contentforthebuttons w-full h-[98%] overflow-y-scroll  no-scrollbar ' >
                {visits ? <div className=' tableforvisits text-black   ' ><PrimaryTable tabledata={MOCK_DATA} tablecolumns={COLUMNSVISIT} /> </div> : null }
                { admission ? <div className=' tableforadmission  ' ><SecondaryTable/></div> : null}
            </div>
        </div>
        
        <div></div>
    </div>
  )
}

export default Medicalhistory