import BestSelling from "../../BestSelling/BestSelling";
import Categories from "../../Categories/Categories";
import CustomerService from "../../CustomerService/CustomerService";
import FlashSales from "../../FlashSales/FlashSales";
import Header from "../../Header/Header";
import Image from "../../Image/Image";
import NewArrival from "../../NewArrival/NewArrival";
import OurProducts from "../../OurProducts/OurProducts";




const Home = () => {
 
  return (
    <>
<Header/>
<FlashSales/>
<Categories/>
<BestSelling/>
<Image/>
<OurProducts/>
<NewArrival/>
<CustomerService/>
      
    </>
  );
};

export default Home;
