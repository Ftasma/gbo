import { useState } from "react";
import { Link, } from "react-scroll";

const links= [{
      link: "About us",
      name: "about",
      id: 1
},
{
  link: "Product",
  name: "product",
  id: 2
},
{
  link: "Testimonials",
  name: "testimonials",
  id: 3
},
{
  link: "Product",
  name: "testimonials",
  id: 4
},
]
const Navbar = () => {
  console.log(links);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
const backToNormal=()=>{
  setTimeout(()=>setIsVisible(false),[500])
}
  return (
    <>
      <div name="navbar" className="flex items-center justify-between " >
        
        <div className="left pl-2   text-orange-600 text-3xl">
          <h1 className="mb-1 ">G.B.O</h1>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="block relative md:hidden text-3xl text-orange-600 mr-5"
          >
            &#9776;
          </button>
       
          {isVisible && (
            <div className="menu md:hidden flex mx-auto flex-col h-40 overflow-y-auto p-4 w-[51%] absolute bg-black  top-[3rem] bg-gradient-to-br from-black  shadow-xl shadow-gray-900 to-gray-800 items-center right-[3rem]">
              <ul className="flex mx-auto mt-11 space-y-4 text-white flex-col gap-9">
              {links.map((items)=>{
            const {link, name,id}= items
            return(
              <li key={id}  className=" cursor-pointer"><Link spy={true} smooth={true} duration={500}  to={name}> <button duration={500}  onClick={backToNormal}>{link}</button>  </Link> </li>
            )

          })}
              </ul>
              <button onClick={backToNormal} className=" hover:bg-black  hover:text-orange-500  mt-9 hover:mt-8 hover:shadow-md hover:shadow-orange-400  rounded-full p-1 bg-orange-700 duration-300 text-black">
                Contact us
              </button>
            </div> 
          )} 
        </div>
        <div className="bg-orange-600 w-[70%] mr-2   pl-3  hidden rounded-full md:flex items-center justify-between">
          <ul className="flex gap-9">
          {links.map((items)=>{
            const {link,id, name}= items
            return(
              <li key={id} className=" cursor-pointer"><Link spy={true} smooth={true} duration={500}  to={name}> {link} </Link> </li>
            )

          })}
           
          </ul>

          <button className=" hover:bg-black hover:text-orange-500 mr-2 rounded-full p-1 bg-orange-600 text-black">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
