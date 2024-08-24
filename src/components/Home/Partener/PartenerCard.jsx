import React from 'react'

function PartenerCard({imgUrl , sideTitle ,sideContent}) {
  return (
    
      <div className='   flex w-full h-full  ' >

          <div className=' w-[60%] m-12  rounded-xl ' >
              <div className=''  ><img className='rounded-xl' src={imgUrl} /></div>
              
          </div>
          <div className=' text-center w-[40%] h-max p-8 bg-white bg-opacity-35 backdrop-blur-sm  -translate-x-[35%] translate-y-[50%] font-Raleway rounded-xl ' ><h1 className='text-3xl' >{sideTitle}</h1><h1>{sideContent}</h1></div>
      </div>
    
  )
}

export default PartenerCard