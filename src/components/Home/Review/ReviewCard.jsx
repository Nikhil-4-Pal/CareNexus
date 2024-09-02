import React, { useState } from 'react';
import PrimaryButton from '../QuickServices/Button';

const ReviewCard = ({ cardTitle, cardContent, imageSrc,Company, Position , bgcolor
}) => {

  const [showContent , setShowContent] = useState('hidden')

  const handleContentEnter = () =>{
    setShowContent('')
  }

  const handleContentLeave = () =>{
    setShowContent('hidden')
  }
  
  return (
    <div  onMouseEnter={handleContentEnter} onMouseLeave={handleContentLeave}  className=' min-w-40 h-max rounded-full bg-white  ' >
      <div  className={`gap-6  p-3 rounded-full ${bgcolor} flex flex-col items-center`} >
        <img src={`${imageSrc}`} className=' w-[15%] h-[15%] rounded-full'   />
        <p className={`  ease-linear  duration-500   Content  ${showContent} text-md font-semibold text-center`}>{cardContent}</p>
        <div className=' text-center' >

          <h1 className='text-xl font-bold  ' >{cardTitle}</h1>
          <h1 className=' text-sm font-bold text-gray-400 ' >{Position},{Company}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
