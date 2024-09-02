import React from 'react'
import PartenerCard from './PartenerCard'

const parterner = [
  {bgcolor :"" , imgUrl : "https://upload.wikimedia.org/wikipedia/commons/c/cd/AIIMS_-New_Delhi%27s_Ward_Block.jpg" , sideContent : "All India Institute of Medical Sciences (AIIMS) Delhi is India's foremost medical institution, renowned for excellence in healthcare, medical education, and research. It offers state-of-the-art facilities, cutting-edge treatments, and attracts top students and patients from across the globe." , sideTitle : "AIIMS Delhi" },
  {bgcolor :"" , imgUrl : "https://i0.wp.com/medlarge.com/wp-content/uploads/2023/09/RMLH.jpg" , sideContent : "Ram Manohar Lohia (RML) Hospital Delhi is a government-run medical institution providing comprehensive healthcare services with a focus on affordability and accessibility. It serves a large population, offering a wide range of treatments and emergency care, emphasizing patient welfare and public health." , sideTitle : "RML Hospital Delhi" },
  {bgcolor :"" , imgUrl : "https://images.apollo247.in/pd-cms/cms/2022-05/Apollo%20Indraprastha.png" , sideContent : "Apollo Hospital Delhi is a renowned private healthcare facility, known for its advanced medical technology and specialized treatments. With a focus on quality care and patient satisfaction, it offers services in various specialties, including cardiology, oncology, and neurology, attracting patients from across the globe." , sideTitle : "Apollo Hospital Delhi" },
  {bgcolor :"" , imgUrl : "https://medicaltrip.in/wp-content/uploads/2023/09/Fortis-Hospital-New-Delhi-Shalimar-Bagh.jpg" , sideContent : "Fortis Hospital Delhi is a leading private hospital offering world-class healthcare services with expertise in complex surgeries and treatments. Known for its modern infrastructure and highly skilled medical professionals, it provides comprehensive care in areas like cardiac sciences, orthopedics, and organ transplants, ensuring patient-centered excellence." , sideTitle : "Fortis Hospital Delhi" },
 ]

function Partener() {
  return (
    <div className='  w-screen h-max ' >
      <div className=' text-3xl font-Raleway text-blue-800 text-center p-12 '  >Meet Our Parteners !!</div>
      <div>
        {parterner.map((parterners,index)=>{
          return(
            <PartenerCard 
            imgUrl={parterners.imgUrl} 
            sideTitle={parterners.sideTitle} 
            sideContent={parterners.sideContent} 
            />
          )
             
         
        })}
        
      </div>
    </div>

  )
}

export default Partener