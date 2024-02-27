import { NavLink } from "react-router-dom";
import BestSellingSlide from "./BestSellingSlide";
import bestSellingData from "../Data/bestSellingData"

const BestSelling = () => {
  return (
    <div className="my-6 mx-4">
      <div >
        <div className="flex justify-between items-end">
        <div>
        <p className="text-red-600 border-l-8 border-red-600 rounded pl-4 font-medium text-xs py-1">
          This Month
        </p>
        <div className="flex items-end gap-10">
          <span className="font-semibold text-2xl">Best Selling Products</span>
        </div>
        </div>
        {/* Button */}
        <div>
            <NavLink to="/all-products" className="bg-red-600 text-white text-xs py-2 px-3 rounded">View All</NavLink>
        </div>
        </div>
        
      </div>
      <BestSellingSlide bestSellingData={bestSellingData}/>
    </div>
  );
};

export default BestSelling;
