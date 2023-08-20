import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart"

const App = () => {



  return (<div className="flex flex-col">
  <div className="w-full flex bg-blue-950 z-10">
  <Navbar />
  </div>

  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  </Routes>
  

  
  </div>);
};

export default App;
