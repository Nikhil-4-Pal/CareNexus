import React from 'react'

function ServiceCard({Imgsrc , Title , Content }) {
  return (
    <div className=' hover:scale-[1.02] ease-in-out duration-500 transition-transform w-[29rem] h-[25rem]  bg-white shadow-sm shadow-black ' >
        <div className=' border-b-2 border-black/30 w-full h-[55%]  ' >
            <img loading='lazy' className=' h-full w-full  ' src={Imgsrc} alt="" />
        </div>
        <div className=' p-10 w-full h-[45%] ' >
            <h1 className=' text-xl text-black font-black ' >{Title}</h1>
            <h1 className=' text-sm text-black font-medium ' >{Content}</h1>
        </div>
    </div>
  )
}

export default ServiceCard