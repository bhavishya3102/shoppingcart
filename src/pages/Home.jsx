import { useEffect, useState } from "react";
import Product from '../components/Product'
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
const [carts,setcarts]=useState([]);
const [loading,setloading]=useState(false);

  async function fetchdata(){
setloading(true);
    try{
      
      let resp=await fetch(API_URL);
      let data=await resp.json();
      setcarts(data);
      console.log(data);
  
    }
    catch(error){
      console.log("error");
      setcarts([]);
    }
    setloading(false);
  }


  useEffect(() => {
  fetchdata();
  }, [])
  return (<div className="w-screen bg-slate-200 pt-14 h-full">
   
  <div className=" grid grid-cols-1  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-9/12  pb-10 gap-6 mx-auto justify-center  pt-8 pl-4 items-center">
  {
    loading?(<Spinner />):(

      carts.length>0?(
        carts.map((item) => {
        return  <Product key={item.id}  item={item} />
          
         }) 
      ):(

        <div>
        No data found
        </div>
      )
    )
 
    
  }</div>
  
  </div>
  );
 
};

export default Home;
