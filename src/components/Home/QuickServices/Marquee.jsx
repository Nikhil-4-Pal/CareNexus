import React from 'react';
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';


const services = [{cardtitle :"Find Hospitals" ,cardcontent :"Find all the hospital with available emergencies and beds near you" , btnContent :"Hospitals"   },
  {cardtitle:"Emergencies", cardcontent:'"Available Emergency rooms in hospitals near you"', btnContent:"Emergency"},
  {cardtitle:"Register With Us" ,cardcontent:'"Become a member to unlock advanced features"', btnContent:"Registers"   },
  {cardtitle:"Book Appointments", cardcontent:'"Booking OPD appointment in best hospitals easier than ever"',btnContent:"Appointment"   },{cardtitle:"Track History" ,cardcontent:'"Tracking your medical history is easier as well"' ,btnContent:"History"   },
  {cardtitle:"Surgeries",cardcontent:'"Book Surgery in the best hospitals around Delhi"',btnContent:"Surgeries"   }
]
function Marquee() {
  return (
    <div className=" w-full    mt-[18rem] ">
      <div className="text-center font-Raleway text-[2rem] text-blue-800 mb-6">
        Review From Our Happy Customers
      </div>
      <div className="flex items-center justify-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          freeMode
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard
                cardtitle={service.cardtitle}
                cardcontent={service.cardcontent}
                btnContent={service.btnContent}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Marquee;
