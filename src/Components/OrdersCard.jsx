import React from "react";
import { useState } from "react";
import MyOrdersModal from "./Modals/MyOrdersModal";

const OrdersCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-[rgba(255,255,255,1)] flex justify-between px-5 rounded-lg py-4 shadow-[0_8px_16px_rgba(138,106,205,0.08)]">
      <div>
        <div className="flex flex-col">
          <div className="text-[1.1rem] font-[500]">{data.address}</div>
          <div className="text-[#617EFF] font-Gilroy">
            <span className="font-[600]">Order Amount : </span>
            <span className="font-[600] text-[0.625rem]">$</span>
            <span className="font-[700] ml-[0.0625rem]">
              {data.totalValue}
            </span>{" "}
          </div>
          <span className="text-blue-text text-[0.875rem] font-[500]">
            Total Items : {data.allProducts.length}
          </span>
        </div>
        <div
          className="cursor-pointer w-max font-[600] text-main-red text-[0.875rem] mt-3"
          onClick={() => setShowModal(true)}
        >
          View Details
        </div>
      </div>
      {showModal && (
        <MyOrdersModal data={data} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default OrdersCard;
