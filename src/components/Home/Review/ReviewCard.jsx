import React from 'react';
import PrimaryButton from '../QuickServices/Button'; // Assuming PrimaryButton is defined somewhere

const ReviewCard = ({ cardTitle, cardContent, imageSrc, btnName , bgcolor  }) => {
  return (
    <div className="  relative w-[28rem] h-[28rem]    ">
      <div className="  relative w-full h-full transition-transforms will-change-auto transform-style-3d duration-500 ease-in-out  hover:rotate-y-180">
        
        <div className={`  absolute w-full h-full backface-hidden flex flex-col justify-center items-center gap-16 rounded-[1.75rem] border-x-2 border-y-2 border-black  ${bgcolor}  p-10 text-center font-Raleway`}>
          <div className="w-[7rem] h-[7rem] rounded-full border-x-2 border-y-2 border-black overflow-hidden">
            <img src={imageSrc}  className="w-full h-full object-cover rounded-full" />
          </div>
          <h1 className="text-2xl">{cardTitle}</h1>
     
        </div>

        
        <div className="absolute w-full h-full rotate-y-180 backface-hidden flex flex-col justify-center items-center gap-6 rounded-[1.75rem] border-x-2 border-y-2 border-black bg-white p-10 text-center font-Raleway">
          <h1 className="text-2xl">{cardContent}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
