import Countdown from "./Countdown";
import FlashSlides from "./FlashSlides";
import data from "../Data/data";
import { useSwiper } from "swiper/react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import AllProducts from "../pages/AllProducts/AllProducts";

const FlashSales = () => {
  const swiper = useSwiper();
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
  return (
    <div className="my-6 mx-4">
      <div className="flex justify-between items-end">
        <div className="mt-6">
          <p className="text-red-600 border-l-8 border-red-600 rounded pl-4 font-medium text-xs py-1">
            Today's
          </p>
          <div className="flex items-end gap-10">
            <span className="font-bold text-2xl">Flash Sales</span>
            <span className="px-4">
              <Countdown targetDate={targetDate} />
            </span>
          </div>
        </div>

        <div className="hidden md:flex px-4 text-xl">
          <button onClick={() => swiper.slidePrev()}>
            <GoArrowLeft className="bg-[f5f5f5] rounded-full " />
          </button>
          <button onClick={() => swiper.slideNext()}>
            <GoArrowRight />
          </button>
        </div>
      </div>
      <FlashSlides data={data} />
      <div className="flex justify-center">
        <NavLink to="/all-products" className="bg-red-500 text-white text-xs py-2 px-4 mt-2 mb-6 rounded">
          View All Products
        </NavLink>
      </div>
      <hr />
    </div>
  );
};

export default FlashSales;
