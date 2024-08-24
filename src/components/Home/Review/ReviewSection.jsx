import React from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const reviews = [
  { cardTitle: '"Palji"', cardContent: "This app helped me a lot", imageSrc: "" },
  { cardTitle: '"Sharmaji"', cardContent: "Great experience using this app", imageSrc: "" },
  { cardTitle: '"Raiji"', cardContent: "Highly recommend this app", imageSrc: "" },
  { cardTitle: '"Kumarji"', cardContent: "Very helpful and user-friendly", imageSrc: "" },
  { cardTitle: '"Aryanji"', cardContent: "Amazing app with great features", imageSrc: "" }
];

const ReviewSection = () => {
  return (
    <div className="relative w-full bg-slate-400 py-8 mb-[3rem] ">
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
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
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
