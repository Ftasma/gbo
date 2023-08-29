import firstGenImg from "./gen.jpg";
import { Link, Element } from "react-scroll";
const Testimonials = () => {
  return (
   

    <div  name="testimonials" className=" text-white mt-16">
        <div className=" text-center">
            <h1 className=" text-2xl font-bold  italic">Here are some testimonials from people that have worked with us</h1>
        </div>
        <div className=" block md:flex md:gap-2 md:px-2">

        <div className=" mx-auto mt-16 text-center rounded-md h-[12rem] w-[85%] md:w-[45%] border border-orange-600 shadow-md shadow-orange-300 ">y
                <img className=" h-20 w-20 mt-[-2rem]  mx-auto  rounded-full " src={firstGenImg} alt="" />
                <p className=" font-bold text-2xl"> Alisha</p>
                <p className=" mt-6">Lorem  ipsum dolor, sit amet consectetur adipisicing elit. Unde, perspiciatis libero.</p>
        </div>
        <div className=" mx-auto mt-16 text-center rounded-md h-[12rem] w-[85%] md:w-[45%] border border-orange-600 shadow-md shadow-orange-300 ">
                <img className=" h-20 w-20 mt-[-2rem]  mx-auto  rounded-full " src={firstGenImg} alt="" />
                <p className=" font-bold text-2xl"> Alisha</p>
                <p className=" mt-6">Lorem  ipsum dolor, sit amet consectetur adipisicing elit. Unde, perspiciatis libero.</p>
        </div>
        </div>
        
    </div>
   
  )
}
export default Testimonials