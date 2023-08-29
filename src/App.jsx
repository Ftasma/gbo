import { useState } from "react";
import { Link,  } from "react-scroll";
import Navbar from "./navbar";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Testimonials from "./Testimonials";
function App() {
  return (
    <>
    <div className=" relative">
      <Navbar />
      <Second />
      <Third />
      <Fourth />
      <Testimonials/>
      <div className="  top-[51rem] fixed right-3 text-white"> <Link to="navbar"><button className=" bg-orange-600 p-2 rounded-full ">bct</button></Link> </div>
    </div>

    </>
  );
}

export default App;
