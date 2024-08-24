import React from 'react';
import ServiceCard from './ServiceCard';


function Marquee() {
  return (
    <div className='relative overflow-hidden w-full backdrop-blur-3xl mb-[5rem] mt-[12rem] py-4'>
      <div className='text-center font-Raleway text-[2rem] text-blue-800 mb-2' >Quick Services</div>
      <div className='flex whitespace-nowrap animate-slide hover:[animation-play-state:paused] '>
       
        <div className='flex space-x-4'>
          <ServiceCard cardtitle={"Find Hospitals"} cardcontent={'"Find all the hospital with available emergencies and beds near you"'} btnContent={"Hospitals"} />
          <ServiceCard cardtitle={"Emergencies"} cardcontent={'"Available Emergency rooms in hospitals near you"'} btnContent={"Emergency"} />
          <ServiceCard cardtitle={"Register With Us"} cardcontent={'"Become a member to unlock advanced features"'} btnContent={"Registers"} />
          <ServiceCard cardtitle={"Book Appointments"} cardcontent={'"Booking OPD appointment in best hospitals easier than ever"'} btnContent={"Appointment"} />
          <ServiceCard cardtitle={"Track History"} cardcontent={'"Tracking your medical history is easier as well"'} btnContent={"History"} />
          <ServiceCard cardtitle={"Surgeries"} cardcontent={'"Book Surgery in the best hospitals around Delhi"'} btnContent={"Surgeries"} />
          <ServiceCard cardtitle={"Find Hospitals"} cardcontent={'"Find all the hospital with available emergencies and beds near you"'} btnContent={"Hospitals"} />
          <ServiceCard cardtitle={"Emergencies"} cardcontent={'"Available Emergency rooms in hospitals near you"'} btnContent={"Emergency"} />
          <ServiceCard cardtitle={"Register With Us"} cardcontent={'"Become a member to unlock advanced features"'} btnContent={"Registers"} />
          <ServiceCard cardtitle={"Book Appointments"} cardcontent={'"Booking OPD appointment in best hospitals easier than ever"'} btnContent={"Appointment"} />
          <ServiceCard cardtitle={"Track History"} cardcontent={'"Tracking your medical history is easier as well"'} btnContent={"History"} />
          <ServiceCard cardtitle={"Surgeries"} cardcontent={'"Book Surgery in the best hospitals around Delhi"'} btnContent={"Surgeries"} />
        </div>
      </div>
    </div>
  );
}

export default Marquee;
