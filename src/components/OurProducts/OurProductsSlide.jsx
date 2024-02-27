import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import productsData2 from "../Data/productsData2";

const OurProductsSlide = ({ productsData }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
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
        {productsData
          // .filter((item) => item.id === 1)
          .map((item) => (
            <SwiperSlide key={`${item.id}-${item.name}`}>
              <div className="m-8">
                <div>
                  {/* Icons */}
                  <div>
                    <span>{item.favorite}</span>
                    <span>{item.visibility}</span>
                  </div>
                  {/* Image */}
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      className="h-32  object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <NavLink className="text-white text-center rounded px-4 transition duration-500 ease-out hover:bg-black">
                    {item.cart}
                  </NavLink>
                </div>

                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="flex font-bold">
                    <span className="text-red-500 text-sm">{item.Price}</span>{" "}
                    <span className="text-gray-500 text-sm">{item.rating}</span>{" "}
                    <span className="text-gray-500 text-sm">
                      {item.rateCount}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* Swiper-2 */}
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
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
        {productsData2.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="m-8">
              <div>
                {/* Icons */}
                <div>
                  <span>{item.favorite}</span>
                  <span>{item.visibility}</span>
                </div>
                {/* Image */}
                <div>
                  <img src={item.image} alt="" className="h-32  object-cover" />
                </div>
              </div>
              <div className="flex justify-center">
                <NavLink className="text-white text-center px-4 transition duration-500 ease-out rounded hover:bg-black">
                  {item.cart}
                </NavLink>
              </div>

              <div>
                <div className="font-bold">{item.name}</div>
                <div className="flex font-bold">
                  <span className="text-red-500 text-sm">{item.Price}</span>{" "}
                  <span className="text-gray-500 text-sm">{item.rating}</span>{" "}
                  <span className="text-gray-500 text-sm">
                    {item.rateCount}
                  </span>{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProductsSlide;
