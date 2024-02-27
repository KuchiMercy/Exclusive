import { useSwiper } from "swiper/react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import catData from "../Data/catData"
import CategoriesSlide from "./CategoriesSlide";

const Categories = () => {
  const swiper = useSwiper();
  return (
    <div className="my-6 mx-4">
      <div className="flex justify-between items-end">
      <div>
    <p className="text-red-600 border-l-8 border-red-600 rounded pl-4 font-medium text-xs py-1">
      Categories
    </p>
    <div className="flex items-end gap-10">
      <span className="font-semibold text-2xl">Browse By Categories</span>
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
      <CategoriesSlide catData={catData}/>
    </div>
  );
};

export default Categories;
