import { NavLink } from "react-router-dom";
3;
const NewArrival = () => {
  return (
    <div className="my-6 mx-4">
      <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 ">
        <div className="md:col-span-2 md:row-span-2 bg-black bg-ps5 bg-cover bg-center h-[400px] relative">
          <div className=" mx-4 text-white absolute bottom-0 ">
            <h5 className="text-lg font-bold">PlayStation 5</h5>
            <p className="py-1 text-xs">
              Black and White version of the PS5 <br /> coming out on sale
            </p>
            <NavLink className="underline text-sm">Shop Now</NavLink>
          </div>
        </div>
        <div className=" md:col-start-3 md:col-span-2 row-start-1 row-span-1 bg-attractive bg-cover bg-center relative">
          <div className=" mx-4 text-white absolute bottom-0">
            <h5 className="text-lg font-bold">Women's Collection</h5>
            <p className="py-1 text-xs">
              Feautured woman collections that <br /> give you another vibe
            </p>
            <NavLink className="underline text-sm">Shop Now</NavLink>
          </div>
        </div>
        <div className="md:col-start-3 md:col-span-1 row-start-2 row-span-1 bg-black bg-speaker bg-center bg-no-repeat relative">
          <div className=" mx-4 text-white absolute bottom-0">
            <h5 className="text-lg font-bold">Speakers</h5>
            <p className="py-1 text-xs">Amazon wireless speakers</p>
            <NavLink className="underline text-sm">Shop Now</NavLink>
          </div>
        </div>
        <div className="md:col-start-4 md:col-span-1 row-start-2 row-span-1 bg-perfume bg-center bg-no-repeat bg-black relative">
          <div className=" mx-4 text-white absolute bottom-0">
            <h5 className="text-lg font-bold">Perfume</h5>
            <p className="py-1 text-xs">GUCCI INTENSE OUD EDP </p>
            <NavLink className="underline text-sm">Shop Now</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
