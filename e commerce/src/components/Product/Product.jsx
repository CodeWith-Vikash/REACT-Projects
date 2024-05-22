import React from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {adddata} from '../../Redux/productSlice'

const Product = ({id,image,title,price,item}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handlenavigate=()=>{
    navigate(`/product/${title}`)
    dispatch(adddata(item))
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
          className=" object-contain object-center h-full w-full hover:scale-[1.1]"
        />
      </div>
      <p className="leading-5 font-semibold px-2">{title}</p>
      <b className="p-2">{price}</b>
    </div>
  );
};

export default Product;
