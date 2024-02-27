import Frame from "../../assets/Frame694.png";
import Ellipse from "../../assets/Ellipse23.png";

import ImageCountdown from "./ImageCountdown";

const Image = () => {
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);

  return (
    <div className=" bg-black flex flex-col justify-evenly items-center md:flex-row w-[90%] mx-auto my-10">
      {/* text */}
      <div className="m-6">
        <p className="text-[#00FF66]">Categories</p>
        <h1 className="text-white font-bold text-4xl">
          Enhance Your <br /> Music Experience
        </h1>
        <div>
          <ImageCountdown targetDate={targetDate} />
        </div>
        <button className="bg-[#00FF66] text-white px-4 py-2 rounded text-sm">
          Buy Now!
        </button>
      </div>
      {/* image */}
      <div className="relative">
        <img
          src={Ellipse}
          alt=""
          width={600}
          className=" hidden md:inline absolute z-10"
        />
        <img src={Frame} alt="" className="z-20  h-[300px] md:h-[320px]  w-" />
      </div>
    </div>
  );
};

export default Image;
