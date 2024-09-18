import React from 'react'

function PartenerCard({ bgcolor,imgUrl , sideTitle ,sideContent}) {
  return (
    
      <div className={` bg-${bgcolor} text-white font-Raleway justify-center items-center   sticky top-0 bg-opacity-100 backdrop-opacity-100 flex bg-white h-screen w-screen `} >

          <div className='w-[60%] m-12  rounded-xl flex  items-center justify-center '  >
              <img className='rounded-xl' src={imgUrl} alt="" />
              
          </div>
          <div className=' text-center w-[40%] h-max p-8 bg-gray-800  backdrop-blur-sm backdrop-opacity-50 bg-opacity-50 -translate-x-[35%] translate-y-[50%] font-Raleway rounded-xl ' ><h1 className='text-3xl' >{sideTitle}</h1><h1>{sideContent}</h1></div>
      </div>
    
  )
}

export default PartenerCard