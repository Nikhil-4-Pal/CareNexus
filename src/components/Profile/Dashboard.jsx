import React  from 'react'
import './Dashboard.css'
import Accordian from './Accordian'
import Timeline from './Timeline'
import { Link } from 'react-router-dom'

function Dashboard() {
    

  return (
    <div className=' z-[-1] w-screen h-screen  absolute top-0 dashcontainer  ' >
        <div className='z-[1000] gap-4  grid grid-cols-3 grid-rows-3  h-[80%] w-[90%] absolute left-[5%] top-[17%] rounded-2xl bg-white/50 ' >
            <div className=' PatientHistory  rounded-xl  ' >
                <h1 className=' text-center text-xl font-Raleway text-blue-800 pt-2   leading-[1] ' >Patient Information</h1>
                <h1 className=' text-left font-sans font-bold text-[1.1rem] pl-3   leading-[1.5]' >Patient Id : </h1>
                <h1 className=' text-left font-sans font-bold text-[1.1rem] pl-3   leading-[1.5]' >Name : </h1>
                <h1 className=' text-left font-sans font-bold text-[1.1rem] pl-3   leading-[1.5]' >Age : </h1>
                <h1 className=' text-left font-sans font-bold text-[1.1rem] pl-3   leading-[1.5]' >Sex : </h1>
                <h1 className=' text-left font-sans font-bold text-[1.1rem] pl-3   leading-[1.5]' >Contact : </h1>
                <h1 className=' text-left font-sans font-bold text-[1.1rem] pl-3   leading-[1.5]' >Address : </h1>
            </div>
            <div className=' relative row-span-2 MedicalHistory  rounded-xl ' >
                <h1 className='  text-center text-xl font-Raleway text-blue-800 pt-2   leading-[1]' >Medical Summary</h1>
                <div className=' rounded-xl w-full h-[90%] bottom-0 absolute ' >
                    <div className='flex flex-col w-full h-full rounded-xl overflow-y-scroll bg-black/15 no-scrollbar' >
                        <Accordian accordiancontent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi in odio nemo! Assumenda, sed voluptas perferendis sit ducimus perspiciatis molestiae, temporibus laborum aperiam tempora quae!"} accordianname={"Previous Visits/Admissions"} />
                        <Accordian accordiancontent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi in odio nemo! Assumenda, sed voluptas perferendis sit ducimus perspiciatis molestiae, temporibus laborum aperiam tempora quae!"} accordianname={"chronic conditions"} />
                        <Accordian accordiancontent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi in odio nemo! Assumenda, sed voluptas perferendis sit ducimus perspiciatis molestiae, temporibus laborum aperiam tempora quae!"} accordianname={"Ongoing Medications"} />
                        <Accordian accordiancontent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi in odio nemo! Assumenda, sed voluptas perferendis sit ducimus perspiciatis molestiae, temporibus laborum aperiam tempora quae!"} accordianname={"Allergies"} />
                    </div>
                </div>
                
            </div>
            
            <div className=' flex flex-col x rounded-xl row-span-1 overflow-scroll no-scrollbar ' >
                <h1 className='text-center text-xl font-Raleway  h-[15%] w-full  text-blue-800 pt-2   leading-[1]' >Articles for You</h1>
                <div className=' w-full flex flex-col overflow-scroll no-scrollbar items-center  ' >
                <Link className=' font-sans text-lg font-bold  w-full h-max p-3 pl-6 ' to={"/articles"} >Article Title</Link>
                <Link className=' font-sans text-lg font-bold  w-full h-max p-3 pl-6 ' to={"/articles"} >Article Title</Link>
                <Link className=' font-sans text-lg font-bold  w-full h-max p-3 pl-6 ' to={"/articles"} >Article Title</Link>
                <Link className=' font-sans text-lg font-bold  w-full h-max p-3 pl-6 ' to={"/articles"} >Article Title</Link>
                <Link className=' font-sans text-lg font-bold  w-full h-max p-3 pl-6 ' to={"/articles"} >Article Title</Link>
                </div>
               

            </div>
            <div className=' border-x-2 border-y-2 border-white rounded-xl bg-emerald-400 row-span-2 ' ></div>
            <div className=' border-x-2 border-y-2 border-white rounded-xl bg-amber-500 row-span-2' ></div>
            <div className=' border-x-2 border-y-2 border-white rounded-xl bg-violet-400  row-span-1 ' >
                <div className='w-full flex flex-col gap-0 h-full bg-white overflow-scroll no-scrollbar ' >

                    <h1 className='  z-10 text-center text-xl font-Raleway  h-[15%] w-full bg-white text-blue-800 pt-2   leading-[1]' >Appointment Details</h1>
                    <div className=' w-full h-[85%] rounded-xl  flex flex-col leading-tight bottom-0 overflow-scroll no-scrollbar ' >
                        <Timeline/>
                        <Timeline/>
                        <Timeline/>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard