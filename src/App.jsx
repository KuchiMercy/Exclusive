import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import AllProducts from "./components/pages/AllProducts/AllProducts";
import SignUp from "./components/pages/Onboard/SignUp";
import Login from "./components/pages/Onboard/Login";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
     
     <Navbar/>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/signup" element={<SignUp/>} /> 
        <Route path="/login" element={<Login/>} /> 

        <Route path="/all-products" element={<AllProducts/>}/>
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
