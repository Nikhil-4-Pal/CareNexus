import React, { useState } from 'react'

function Notescard({notename , content1 ,content2 ,content3}) {
  
    const [cardcontent ,setCardContent] = useState(false)

    const handlecardcontent = ()=>{
        setCardContent((prev)=>(!prev))
    }

    return (

    <div onClick={handlecardcontent}  className=' p-4 cursor-pointer w-[85%] h-max  shadow-sm my-3 rounded-xl shadow-black ' >
            <h1 className=' text-xl font-bold text-center ' >{notename}</h1>
            {cardcontent ? <div >
                <h1>{content1}</h1>
                <h1>{content2}</h1>
                <h1>{content3}</h1>
            </div>: null}
            
        </div>
  )
}

export default Notescard

