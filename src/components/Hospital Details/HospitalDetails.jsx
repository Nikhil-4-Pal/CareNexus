import React from 'react'

function HospitalDetails({imgUrl ,Name ,  totalbeds ,totaldoctors ,emergencybeds,ownership , availablebeds , availabledoctors ,availablemergency ,costbed , costicu ,costmedication}) {
  return (
    
        <div className=' flex flex-col w-[90%] h-[80%] top-[15%] absolute bg-lime-200/85 rounded-2xl ' >
            <div className=    '  gap-4 flex items-center w-full h-[50%]  rounded-t-xl ' >
                <div className=' ml-6 w-[40%] h-max ' ><img className='rounded-xl' src={imgUrl} alt="" /></div>
                <div className='w-[55%]  h-[90%] rounded-xl' >
                    <h1 className=' p-4 text-center font-Raleway text-xl ' >{Name}</h1>
                    <div className='flex items-center justify-center  gap-8     w-[100%] h-[80%] rounded-xl' >
                        <div className='w-[50%] h-[90%] p-4 flex flex-col justify-center leading-10  rounded-xl text-left font-mono font-bold  ' >
                            <h1>Total Beds: {totalbeds} </h1>
                            <h1>Total Doctors : {totaldoctors}</h1>
                            <h1>Emergency Beds : {emergencybeds}</h1>
                            <h1>Ownership : {ownership} </h1>
                        </div>
                        <div className='w-[40%] h-[90%] leading-10 justify-center flex flex-col p-4 \ rounded-xl text-left font-mono font-bold  ' >
                            <h1>Available Beds:{availablebeds} </h1>
                            <h1>Available Doctors : {availabledoctors}</h1>
                            <h1>Available Emergency Beds : {availablemergency}</h1>
                            <h1>Ownership : {ownership} </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[50%]  flex gap-8 justify-center items-center  rounded-b-xl ' >
                <div className=' flex flex-col gap-4 w-[20%] h-[80%] rounded-xl ' >
                    <h1 className='text-xl font-Raleway text-blue-800 text-center p-2 ' >Quick Booking</h1>
                    <button className='bg-blue-950 text-white text-mono text-lg text-bold w-[40%] rounded-full h-[18%] mx-auto ' >Bed</button>
                    <button className='bg-blue-950 text-white text-mono text-lg text-bold w-[40%] rounded-full h-[18%] mx-auto ' >ICU</button>
                    <button className='bg-blue-950 text-white text-mono text-lg text-bold w-[40%] rounded-full h-[18%] mx-auto ' >Meds</button>
                </div>
                <div className=' w-[60%] h-[80%] flex items-center rounded-xl border-x-black border-y-black border-x-4 border-y-4 ' >
                    <div className=' p-4 gap-4 text-left font-mono font-bold leading-[2.5] justify-center flex flex-col   w-[50%] h-[90%] border-r-2 border-r-gray-700 ' >
                        <h1 className=' text-xl font-Raleway text-blue-800 text-center  ' >Cost of Services</h1>
                        <h1>Cost of Bed : {costbed}</h1>
                        <h1>Cost of ICU : {costicu}</h1>
                        <h1>Cost of Medications : {costmedication}</h1>

                    </div>
                    <div className=' flex justify-center items-center text-xl font-Raleway w-[50%] h-[90%] border-y-black text-center ' >
                        <h1>*These Charges are as per the average calculated by our team this is by no means the accurate cost of services listed below</h1>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default HospitalDetails