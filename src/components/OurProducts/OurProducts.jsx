import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import OurProductsSlide from "./OurProductsSlide";
import productsData from "../Data/productsData"
import productsData2 from "../Data/productsData2";
import { NavLink } from "react-router-dom";


const OurProducts = () => {
  return (
    <div className="my-6 mx-4">
         <div className="flex justify-between items-end">
      <div>
    <p className="text-red-600 border-l-8 border-red-600 rounded pl-4 font-medium text-xs py-1">
      Our Products
    </p>
    <div className="flex items-end gap-10">
      <span className="font-semibold text-2xl">Explore Our Products</span>
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
      <OurProductsSlide productsData={productsData} productsData2={productsData2}/>
      <div className="flex justify-center">
        <NavLink to="/all-products" className="bg-red-500 text-white text-xs py-2 px-4 mt-2 mb-6 rounded">
          View All Products
        </NavLink>
      </div>
    </div>
  )
}

export default OurProducts