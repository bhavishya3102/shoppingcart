import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice.js"
import {MdDelete} from "react-icons/md";

const CartItem = ({data}) => {

const dispatch=useDispatch();

  return <div className="flex flex-row shadow-lg rounded-md border border-gray-200 bg-white gap-6 px-8 py-3 mr-20 mt-4 h-[35vh] lg:w-[40vw] w-[70vw] justify-between items-center ">
  
  <div className="flex ">
  <img src={data.image} className="lg:w-[14vw] w-[30vw] "></img>
  </div>
<div className="flex flex-col gap-3 ml-12 ">
<div className="font-bold text-[1.5rem] ">{data.title}</div>
<div className="font-semibold text-[1rem]">{data.description.substring(0,60)} </div>
<div className=" flex flex-row justify-between ">
<div className="text-green-500 text-[1.2rem] font-bold">${data.price}</div>
<button onClick={()=> dispatch(remove(data.id))}>
< MdDelete fontSize="1.2rem" color="red"/>
</button>
</div>

</div>

  
  </div>;
};

export default CartItem;
