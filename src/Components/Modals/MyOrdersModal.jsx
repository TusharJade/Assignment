import React from "react";
import CentralModal from "../../Utils/CentralModal";
import { RxCross1 } from "react-icons/rx";

const MyOrdersModal = ({ data, onClose }) => {
  return (
    <CentralModal>
      <div className="absolute bg-[#FAFAFB] w-2/3 left-0 right-0 mx-auto  rounded-[2.25rem] px-5 py-6">
        <div className="text-[1.1rem] font-[500]">{data.address}</div>
        <div className="text-[#617EFF] font-Gilroy mt-1">
          <span className="font-[600]">Order Amount : </span>
          <span className="font-[600] text-[0.625rem]">$</span>
          <span className="font-[700] ml-[0.0625rem]">
            {data.totalValue}
          </span>{" "}
        </div>
        <div className="mt-2 font-[500] text-blue-text">All Items:</div>
        <div className="flex flex-wrap custom-scrollbar mt-4 h-[10rem] overflow-y-auto">
          {data.allProducts.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center w-1/2 text-center"
                key={index}
              >
                <img
                  className="w-[4rem] h-[4rem]"
                  src={item.image}
                  alt="product"
                />
                <div className="mt-1 text-blue-text">{item.title}</div>
                <div>
                  <span className="font-[500] mt-1">Quantity</span> :{" "}
                  {item.quantity}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="bg-[#FAFAFB] absolute -top-[3rem] right-2 p-2 rounded-xl text-[1.3rem] font-[700] cursor-pointer"
          onClick={onClose}
        >
          <RxCross1 />
        </div>
      </div>
    </CentralModal>
  );
};

export default MyOrdersModal;
