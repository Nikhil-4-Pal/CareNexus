import React, { useState }  from 'react'
import './Dashboard.css'
import Accordian from './Accordian'
import Timeline from './Timeline'
import { Link } from 'react-router-dom'
import Medicalhistory from './Medicalhistory'
import RelatedArticle from './Article'



function Dashboard() {
    
    const [statusinfo , setStatusinfo] = useState(false)
    const [statusmedhistory , setStatusmedhistory] = useState(false)
    const [statusarticles , setStatusarticles] = useState(false)
    const [statusappointment, setStatusappointment] = useState(false)
    const [statusmedicine,setStatusmedicine ] = useState(false)
    const [statuspasttransaction, setStatuspasttransaction] = useState(false)

    const handleinfo = () =>{
        setStatusinfo((prev)=>(!prev))
        setStatusappointment(false)
        setStatusarticles(false)
        setStatusmedicine(false)
        setStatusmedhistory(false)
        setStatuspasttransaction(false)
    }
    const handlemedical = () =>{
        setStatusmedhistory((prev)=>(!prev))
        setStatusinfo(false)
        setStatusappointment(false)
        setStatusarticles(false)
        setStatusmedicine(false)
        setStatuspasttransaction(false)
    }
    const handlearticle = () =>{
        setStatusarticles((prev)=>(!prev))
        setStatusinfo(false)
        setStatusappointment(false)
        setStatusmedicine(false)
        setStatusmedhistory(false)
        setStatuspasttransaction(false)
    }
    const handleappointment = () =>{
        setStatusappointment((prev)=>(!prev))
        setStatusinfo(false)
        setStatusarticles(false)
        setStatusmedicine(false)
        setStatusmedhistory(false)
        setStatuspasttransaction(false)
    }
    const handlemedicine = () =>{
        setStatusmedicine((prev)=>(!prev))
        setStatusinfo(false)
        setStatusappointment(false)
        setStatusarticles(false)
        setStatusmedhistory(false)
        setStatuspasttransaction(false)
    }
    const handletransection = () =>{
        setStatuspasttransaction((prev)=>(!prev))
        setStatusinfo(false)
        setStatusappointment(false)
        setStatusarticles(false)
        setStatusmedicine(false)
        setStatusmedhistory(false)
    }

  return (
    <div className=' flex flex-col   w-full h-screen dashcontainer  ' >
        <div className=' w-full h-[10%]  flex justify-center  items-center ' >
            <div className=' rounded-full justify-center items-center w-max font-Raleway flex  text-white gap-4 bg-black/70 ' >
            <button  onClick={handleinfo}  className=' p-2 px-4 ' >Patient Information</button>
            <div className=' w-[0.009rem] h-6 bg-gray-600 rounded-full ' ></div>
            <button  onClick={handlemedical} className=' p-2 px-4 ' >Medical History</button>
            <div className=' w-[0.009rem] h-6 bg-gray-600 rounded-full ' ></div>
            <button  onClick={handlearticle} className=' p-2 px-4 ' >Recommended Health Articles</button>
            <div className=' w-[0.009rem] h-6 bg-gray-600 rounded-full ' ></div>
            <button  onClick={handlemedicine} className=' p-2 px-4 ' >Medicines</button>
            <div className=' w-[0.009rem] h-6 bg-gray-600 rounded-full ' ></div>
            <button  onClick={handleappointment} className=' p-2 px-4 ' >Appointment Details</button>
            <div className=' w-[0.009rem] h-6 bg-gray-600 rounded-full ' ></div>
            <button  onClick={handletransection} className=' p-2 px-4 ' >Past Transaction</button>
            </div>
            
        </div>
        <div className=' w-full h-[90%] ' >
           { statusinfo ?  <div className={` flex flex-col  gap-8 w-full h-full patiendetails `} >
            <h1 className=' px-8 pt-8 pb-4 w-full text-3xl font-Raleway text-gray-800 text-center ' >Personal Information</h1>
            <div className=' font pl-8 personalinfo flex  flex-col gap-6     ' >
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Patient Id : </h1> <h1 className='text-xl font-mono font-bold' >XXXX81</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Patient Name : </h1> <h1 className='text-xl font-mono font-bold' >Nikhil Pal</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Age : </h1> <h1 className='text-xl font-mono font-bold' >20</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Sex : </h1> <h1 className='text-xl font-mono font-bold' >Male</h1> </div>
            </div>
            <h1 className='px-8 py-8  w-full text-3xl font-Raleway text-gray-800 text-center ' >Contact Details</h1>
            <div className=' font pl-8 personalinfo flex  flex-col gap-6     ' >
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Mobile No. : </h1> <h1 className='text-xl font-mono font-bold' >XXXX81XXX1</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Alt. Mobile No. : </h1> <h1 className='text-xl font-mono font-bold' >XXXXXXX987</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Email : </h1> <h1 className='text-xl font-mono font-bold' >xxx@gmail.com</h1> </div>
                <div className=' flex  items-center w-full  ' ><h1 className=' w-[15%]  text-xl font-mono font-bold  ' >Address : </h1> <h1 className='text-xl font-mono font-bold' >XYZ/05 delhi </h1> </div>
            </div>  
           </div> : null }
           { statusappointment ? <div className={` overflow-scroll items-center no-scrollbar p-8 flex flex-col gap-[10%] w-full h-full medicalhistory `} >
                <div className=' ml-[5%]  w-full  flex gap-8 ' >
                    <div className=' flex w-full gap-8  items-center ' >
                        <div className=' w-[0.60%] h-[150%] bg-white ' ></div>
                        <div className=' w-max flex  ' >
                         
                            <div className=' bg-white rounded-xl p-5 w-max  border-r border-black ' >
                                <div className='flex gap-20 '  >
                                    <h1>Date : 04/09/2024</h1>
                                    <h1>Time : 12:00 PM</h1>
                                </div>
                                <h1>Hospital : AIIMS Delhi</h1>
                                <h1>Department : Orthology </h1>
                                <h1>Doctor : Dr. Manish Srivastava</h1>
                            </div>
                            <div className=' bg-white rounded-xl p-5 w-max border-l border-black ' >
                                <h1>Note*</h1>
                                <ul>
                                <li>Arrive 5 minutes before your appointment.</li>
                                <li>Late arrivals (beyond 5 minutes) will result in cancellation.</li>
                                <li>No rescheduling for the same day.</li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                   
                </div>
           </div> : null}
            { statusmedhistory ? <div className={`  w-full h-full items-center flex flex-col  medicinehistory `} >
                <div className=' w-full h-full ' >
                    <Medicalhistory />
                </div>
            </div> : null }
            
            { statusarticles ? <div className={`  w-full p-10 h-full articles bg-black/40 text-white text-3xl `} ><RelatedArticle/></div> : null }
           { statusmedicine ? <div className={`  w-full h-full appointmentdetails `} >ram ram ji</div> : null }
            { statuspasttransaction ? <div className={`  w-full h-full pasttransaction `} >radhe radhe ji</div> : null }
        </div>
    </div>
  )
}

export default Dashboard