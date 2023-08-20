import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";



const Cart = () => {

  const {cart}=useSelector((state)=> state);
const [totalamount ,settotalamount]=useState();


useEffect(() => {

  settotalamount(cart.reduce((acc, current) => acc=acc+current.price , 0));

}, [cart]);

// const total=totalamount;
// const total1=Number(total).toFixed(2);

  return (  <div className=" flex flex-col w-screen  pt-16 pb-12 bg-slate-200 gap-5 sm:gap-1 mx-auto justify-between   items-center">


    {

    cart.length>0?(
      <div className="flex flex-col md:flex-row lg:flex-row justify-between ">
      <div className="flex gap-4 flex-col">{
        cart.map((data) => {
          return <CartItem key={data.id} data={data} />
          

      })
    }
      </div>

      <div className="relative flex flex-col z-0  mt-16 ">
      <div className="text-green-600 text-[1.8rem] font-bold z-0">Your Cart</div>
      <div  className="text-green-600 text-[2.3rem] font-bold "> Summary</div>
      <p className=" text-black text-[1.1rem] font-semibold">
      <span>Total Items: {cart.length}</span>
      </p>

      <div className="mt-20 text-black text-[1.1rem] font-semibold">
      total Amount:{Number(totalamount).toFixed(2)}
      </div>
      <button className="lg:w-[30vw] w-[40vw]   px-24 mt-6 py-2 bg-green-600 text-white text-[1.3rem] font-bold">Checkout</button>
      
      
      </div>

      </div>
      ):(
      <div className="flex flex-col   mx-auto mt-[35vh] lg:ml-[48vw]  mb-[37vh] ">
      <div className="font-semibold text-[1.2rem] drop-shadow-sm">
Your Cart is Empty
</div>
<NavLink to="/">
<button className="bg-green-500 text-white lg:px-4 px-8 ml-6 py-2 mt-4 rounded-md text-[1.2rem] font-bold">

Shop Now
</button>

</NavLink>
      
      </div>


    )
    }
    


    </div>);
};

export default Cart;
