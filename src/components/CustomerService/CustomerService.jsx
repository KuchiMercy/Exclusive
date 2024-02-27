import one from "../../assets/Services.png"
import two from "../../assets/Services-1.png"
import three from "../../assets/Services-2.png"

const CustomerService = () => {
  return (
    <div className="my-6 mx-4 flex justify-center items-center flex-wrap">
        {/* 1 */}
        <div className="flex flex-col items-center px-4 text-center">
            <div className="w-12 my-2 rounded-full"><img src={one} alt="" /></div>
            <h4 className="font-bold">FREE AND FAST DELIVERY</h4>
            <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        {/* 2 */}
        <div className="flex flex-col items-center px-4 text-center">
          <div className="w-12 my-2 rounded-full"><img src={two} alt="" /></div>
            <h4 className="font-bold">24/7 CUSTOMER SERVICE</h4>
            <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-center px-4 text-center">
            <div className="w-12 my-2 rounded-full"><img src={three} alt="" /></div>
            <h4 className="font-bold">MONEY BACK GUARANTEE</h4>
            <p className="text-sm">We return money within 30 days</p>
        </div>
    </div>
  )
}

export default CustomerService