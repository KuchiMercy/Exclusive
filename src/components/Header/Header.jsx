import { Carousel } from "flowbite-react";
import apple from "../../assets/Apple.png";
import hero from "../../assets/hero.png";
import SidePanel from "./SidePanel";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="grid grid-cols-4 my-6 ">
        {/* Sidebar */}
        <div className="col-span-1">
          <SidePanel />
        </div>

        {/* Carousel */}
        <div className="col-span-4 lg:col-span-3">
          <div className="h-60 sm:h-64 xl:h-80 2xl:h-96 max-w-4xl w-full px-4">
            <Carousel>
              <div className="bg-black flex justify-between items-center px-10">
                <div>
                  <div className="flex items-center my-6">
                    <img src={apple} alt="" className="h-[30px]" />
                    <p className="text-white text-xs px-4">iPhone 14 Series</p>
                  </div>
                  <h1 className="text-white text-xl md:text-4xl">
                    Up to 10% <br /> off Voucher
                  </h1>
                  <div className="flex items-center mt-6 ">
                    <NavLink className=" text-white underline px-2">
                      Shop Now
                    </NavLink>
                    <FaArrowRight className="text-white " />
                  </div>
                </div>
                <div>
                  <img src={hero}  alt="" className="md:h-[300px] md:pt-5" />
                </div>
              </div>
              {/* <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              /> */}
            </Carousel>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
