import React from 'react'
import PartenerCard from './PartenerCard'

function Partener() {
  return (
    <div className='  w-screen h-max ' >
      <div className=' text-3xl font-Raleway text-blue-800 text-center p-12 '  >Meet Our Parteners !!</div>
      <div>
        <PartenerCard bgcolor={"red-800"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/c/cd/AIIMS_-New_Delhi%27s_Ward_Block.jpg"} sideTitle={"AIIMS Delhi "} sideContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tempore architecto nihil at, eius repellendus vitae voluptatum facilis illum explicabo nemo repudiandae, aliquam itaque."} />
        <PartenerCard  imgUrl={"https://i0.wp.com/medlarge.com/wp-content/uploads/2023/09/RMLH.jpg"} sideTitle={"RML Hospital Delhi"} sideContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tempore architecto nihil at, eius repellendus vitae voluptatum facilis illum explicabo nemo repudiandae, aliquam itaque."} />
        <PartenerCard bgcolor={"cyan-800"} imgUrl={"https://images.apollo247.in/pd-cms/cms/2022-05/Apollo%20Indraprastha.png"} sideTitle={"Apollo Hospital Delhi"} sideContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tempore architecto nihil at, eius repellendus vitae voluptatum facilis illum explicabo nemo repudiandae, aliquam itaque."} />
        <PartenerCard  imgUrl={"https://medicaltrip.in/wp-content/uploads/2023/09/Fortis-Hospital-New-Delhi-Shalimar-Bagh.jpg"} sideTitle={"Fortis Hospital Delhi"} sideContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tempore architecto nihil at, eius repellendus vitae voluptatum facilis illum explicabo nemo repudiandae, aliquam itaque."} />


      </div>
    </div>

  )
}

export default Partener