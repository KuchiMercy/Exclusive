import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const FlashSlides = ({ data }) => {
  return (
    <div className="flex items-center justify-center flex-col  ">
      <Swiper
      modules={[Navigation, Pagination, FreeMode]}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        navigation
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="max-w-[90%] lg:max-w-[85%]"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="my-8">
              <div className="bg-[f5f5f5]">
                <div className="bg-red-600 text-white text-center text-xs rounded w-11 p-1">
                  {item.label}
                </div>
                <div>
                  <span>{item.favorite}</span>
                  <span>{item.visibility}</span>
                </div>
                <img
                  src={item.image.src}
                  alt=""
                  className=" h-32 object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold">{item.name}</div>
                <div>
                  {" "}
                  <span className="text-red-600 text-xs">
                    {item.newPrice}
                  </span>{" "}
                  {""}
                  <span className="text-gray-500 text-xs">{item.oldPrice}</span>
                </div>
                <div>
                  <span>{item.rating}</span>
                  <span className="text-gray-500 text-xs">
                    {item.rateCount}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashSlides;
