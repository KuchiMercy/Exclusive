import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const CategoriesSlide = ({ catData }) => {
  return (
    <div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {catData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded h-20 w-28 flex flex-col items-center my-8 py-1 hover:bg-red-600 hover:text-white">
              <img src={item.image} alt="" className="h-32"/>
              <p className="text-sm text-center">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSlide;
