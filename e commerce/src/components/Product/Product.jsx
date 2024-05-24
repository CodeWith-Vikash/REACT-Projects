import React, { useContext } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { SingleContext } from "../../context/SingleContext";

const Product = ({id,image,title,price,item}) => {
  const {setselectedprod} =useContext(SingleContext)
  const navigate=useNavigate()
  const handlenavigate=()=>{
    setselectedprod(item)
    navigate(`/product/${title}`)
  }
  return (
      <div
      className="card w-[250px]  min-h-[250px] flex flex-col gap-2"
      onClick={handlenavigate}
    >
      <div className="overflow-hidden h-[200px] w-full">
        <img
          src={image}
          alt=""
          className=" object-cover object-center h-full w-full hover:scale-[1.1]"
        />
      </div>
      <p className="leading-5 font-semibold px-2">{title}</p>
      <b className="p-2">{String(price).startsWith('$')?'':'$'}{price}</b>
    </div>
  );
};

export default Product;
