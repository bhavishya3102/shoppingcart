import {FaShoppingCart} from "react-icons/fa" 
 import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
 const Navbar = () => {

  const {cart}=useSelector((state)=> state);

  return   (
    <div className=" py-4 fixed bg-blue-950 w-full">
    <div className="w-9/12 flex  flex-row justify-between items-center  mx-auto ">
    <div>
    <NavLink to="/">
    <img src="shopping.svg" className="lg:h-[5vh] lg:w-[9vw] h-[6vh] w-[20vw]" />
    
    </NavLink>

    </div>

    <div   className="flex flex-row gap-2 text-white text-xl">
    <NavLink to="/" >Home</NavLink>
  <div className="flex flex-row gap-2 text-white relative" >
  <NavLink to="/cart">
  < FaShoppingCart fontSize="1.4rem"/>
  </NavLink>

  {
    cart.length>0 && 
    <div className="bg-green-600  absolute left-2 bottom-5 rounded-full h-5 w-5 flex  justify-center items-center text-[17px]">{cart.length}</div>

  }
  </div>
    </div>
    </div>

  
  
  </div>)
};

export default Navbar;
