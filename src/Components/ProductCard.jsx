import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ data }) => {
  return (
    <div className="bg-[rgba(255,255,255,1)] flex justify-between px-3 rounded py-3 shadow-[0_8px_16px_rgba(138,106,205,0.08)]">
      <div className="flex flex-col">
        <div className="text-[1.125rem] font-Gilroy">{data.title}</div>
        <div className="text-[#617EFF] font-Gilroy">
          <span className="font-[600] text-[0.625rem]">₹</span>
          <span className="font-[700] ml-[0.0625rem]">{data.price}</span>{" "}
          <span className="text-[0.75rem] font-[500] text-[#6c6e8bbf]">
            onwards
          </span>
        </div>
        <div className="text-[#6c6e8bbf] font-[500] text-[0.75rem] flex items-center gap-x-[0.1875rem]">
          <div className="text-main-red">
            <AiFillStar />
          </div>
          {data.rating.rate} ({data.rating.count})
        </div>
        <div className="cursor-pointer mt-auto font-[600] text-main-red text-[0.875rem]">
          View Details
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-[4rem] h-[4rem]" src={data.image} alt="product" />
        <button className="border-[1px] font-[600] px-3 rounded-md py-1 border-main-red text-main-red mt-2">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
