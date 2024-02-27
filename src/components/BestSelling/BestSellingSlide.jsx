import bestSellingData from "../Data/bestSellingData";

const BestSellingSlide = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 w-[90%] mx-auto">
      {bestSellingData.map((item) => (
        <div key={item.id}>
          <div>
            <div>
              <span>{item.favorite}</span>
              <span>{item.visibility}</span>
            </div>
          </div>
          <div>
            {" "}
            <img src={item.image} alt="" className="h-32" />
          </div>
          <div>
            <p className="font-semibold">{item.name}</p>
            <div className="text-sm">
              <span className="text-red-600">{item.newPrice}</span>
              {" "}
              <span className="text-gray-500">{item.oldPrice}</span>
            </div>
            <div>
              <span>{item.rating}</span>
              <span className="text-gray-500 text-sm">{item.rateCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellingSlide;
