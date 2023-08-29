import firstGenImg from "./gen.jpg";
const Fourth = () => {
  return (
    <div name="product" className="grid grid-cols-1   md:grid-cols-3 mt-5 gap-2 px-5">
     
      <img
        className=" hover:opacity-[0.5] h-[7rem] w-full object-cover rounded-md"
        src={firstGenImg}
        alt="generator image"
      />
      <img className=" hover:opacity-[0.5] h-[7rem] w-full object-cover rounded-md" src={firstGenImg} alt="generator image" />
      <img className=" hover:opacity-[0.5] h-[7rem] w-full object-cover rounded-md" src={firstGenImg} alt="generator image" />
      <img className=" hover:opacity-[0.5] h-[7rem] w-full object-cover rounded-md" src={firstGenImg} alt="generator image" />
    
    </div>
  );
};
export default Fourth;
