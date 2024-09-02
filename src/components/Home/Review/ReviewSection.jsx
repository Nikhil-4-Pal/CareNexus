import React from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const reviews = [
  { cardTitle: '"Palji"', cardContent: "This app helped me a lot", imageSrc: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1724608544~exp=1724609144~hmac=2a782b965840e5b2150e917d3bed94e556ee5767aefee44b1188474cf1070fce" , bgcolor:"bg-blue-200" },
  { cardTitle: '"Sharmaji"', cardContent: "Great experience using this app", imageSrc: "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?w=740&t=st=1724608614~exp=1724609214~hmac=1a85109d89076ca41b6a23e8e54c94657ce17b6f98f9899431f413fa98025d9b" , bgcolor:"bg-green-200" },
  { cardTitle: '"Raiji"', cardContent: "Highly recommend this app", imageSrc: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1724608544~exp=1724609144~hmac=2a782b965840e5b2150e917d3bed94e556ee5767aefee44b1188474cf1070fce" , bgcolor:"bg-red-200" },
  { cardTitle: '"Kumarji"', cardContent: "Very helpful and user-friendly", imageSrc: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1724608636~exp=1724609236~hmac=a382dda8f1af15fe99f2f45f9589f8878a2906a8ce2e35f7dbc9948a2a573474", bgcolor:"bg-pink-200" },
  { cardTitle: '"Aryanji"', cardContent: "Amazing app with great features", imageSrc: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1724608544~exp=1724609144~hmac=2a782b965840e5b2150e917d3bed94e556ee5767aefee44b1188474cf1070fce", bgcolor:"bg-slate-200" }
];

const ReviewSection = () => {
  return (
    <div className=" w-full h-[15rem]  py-8 mb-[3rem] ">
      <div className="text-center font-Raleway text-[2rem] text-blue-800 mb-8">
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
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                bgcolor={review.bgcolor}
                cardTitle={review.cardTitle}
                cardContent={review.cardContent}
                imageSrc
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
