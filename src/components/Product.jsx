import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../redux/Slices/cartSlice.js'
import {  toast } from 'react-toastify';

const Product = ({item}) => {

  const {cart}=useSelector((state)=> state);
  const dispatch=useDispatch();
  return (<div className="flex flex-col  mx-auto bg-white justify-between w-[100%] h-[100%] border rounde-md border-gray-300 shadow-md transition-all  ease-in-out hover:scale-105 hover:shadow-xl px-8 py-5">
  
<div className="font-bold text-black bg-white text-[1.2rem]">{item.title.substring(0,15)}...</div>
<p className="text-gray-600 text-[0.9rem]">{item.description.substring(0,60)}</p>
<div className="flex justify-center items-center my-6">
<img src={item.image} className="w-[9vw] "></img>
</div>

<div className="flex flex-row  justify-between  items-center ">
<div className="text-green-600 font-bold">₹ {item.price}</div>
<div>{

  cart.some((p) => p.id===item.id)?(

    <button onClick={()=>{dispatch(remove(item.id))
   toast.error("remove item "); 
    
    }}  className="border border-black bg-white text-black rounded-[2.2rem] px-3 py-1"> Remove Cart</button>
  ):(
    <button onClick={()=> {dispatch(add(item))
    toast.success("Add item in the cart")
    }}   className="border border-black bg-white text-black rounded-[2.2rem] px-3 py-1"> Add cart</button>
  )
}</div>
</div>

  </div>);
};

export default Product;
