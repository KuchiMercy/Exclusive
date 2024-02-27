import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import SidePanel from "../Header/SidePanel";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/", id: 1 },
    { name: "Contact", link: "/", id: 2 },
    { name: "About", link: "/", id: 3 },
    { name: "Sign Up", link: "/signup", id: 4 },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      {/* Prenavbar */}
      <section className="flex justify-center md:justify-evenly items-center bg-black text-white sm:p-2 text-sm md:flex-row">
        <p className="text-[10px] md:text-md">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <NavLink className="underline">ShopNow</NavLink>
        </p>
        <select className="bg-transparent border-none text-[10px]">
          <option>English</option>
        </select>
      </section>

      {/* Nav-menu */}

      <section className="flex justify-between items-center py-3 px-4 xl:px-10 border-b-2 w-full z-10">
        <div className="flex items-center gap-2">
          <HiMenuAlt1
            onClick={() => setIsToggle(!isToggle)}
            className="text-2xl cursor-pointer md:hidden"
          />

          <h3 className="font-bold text-xl">Exclusive</h3>
        </div>

        {/* Sidepanel */}
        <div
          className={`md:hidden pb-12 pl-9  absolute md:static md:z-auto z-[10] left-0 w-full md:w-auto transition-all bg-white duration-500 ease-in ${
            isToggle
              ? "fixed top-0 left-0 w-[70%] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }`}
        >
          <IoClose
            onClick={() => setIsToggle(!isToggle)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <SidePanel />
        </div>

        {/* NavLinks */}
        <div
          className={`md:flex md:items-center md:pb-0 pb-12 pl-9 md:pl-0 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto transition-all bg-white duration-500 ease-in ${
            isOpen ? "top-[100px]" : "top-[-490px]"
          }`}
        >
          <ul>
            {Links.map((link) => (
              <li
                key={link.id}
                className=" md:inline my-2 px-5 py-2 text-sm md:hover:border-b-2 border-black md:focus:border-b-2"
              >
                <NavLink to={link.link} > {link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* End */}

        <div className="flex items-center gap-4">
          <div className="relative bg-[#f5f5f5] py-2">
            {/* Search */}
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-none relative text-sm outline-none rounded-lg bg-transparent hidden md:block"
            />
            <NavLink>
              <IoSearch className=" absolute top-5 right-0 hidden md:block" />
            </NavLink>
          </div>

          <NavLink className=" text-lg">
            <FaRegHeart />
          </NavLink>
          <NavLink className=" text-lg">
            <MdOutlineShoppingCart />
          </NavLink>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" cursor-pointer text-2xl md:hidden"
          >
            {isOpen ? <IoClose /> : <RiMenu3Fill />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
