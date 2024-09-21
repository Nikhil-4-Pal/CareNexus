import React from 'react'

function Background() {
  return (
    <div className='  left-0   bg-cover overflow-y-hidden absolute  w-screen h-full ' >
        <img width={"100%"}  height={"100%"} className=' z-[-1] ' src="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='w-full h-full absolute bg-black opacity-[30%]  z-10 top-0  ' ></div>
    </div>
  )
}

export default Background