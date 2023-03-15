import React, { useState } from "react";
import { useAddressContext } from "../../Context/address-context";
import CentralModal from "../../Utils/CentralModal";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../Context/orders-context";
import { useAddToCart } from "../../Context/cart-context";
import { toast } from "react-toastify";

const SelectAddressModal = ({ onClose, products, value }) => {
  const { address } = useAddressContext();
  const { setOrders } = useOrderContext();
  const { cartDispatch } = useAddToCart();
  const navigate = useNavigate();

  const [finalData, setFinalData] = useState({
    address: "",
    date: "",
    allProducts: [],
    totalValue: 0,
  });

  return (
    <CentralModal>
      <div className="relative bg-[#FAFAFB] w-5/6 sm:w-2/3 left-0 right-0 mx-auto rounded-[2.25rem] pb-3.5 sm:pb-5">
        <div className="font-[600] text-[0.875rem] sm:text-[1.1rem] py-3.5 px-6 sm:py-5">
          Select Delivery Address
        </div>
        <div className="h-[1.5px] w-full bg-addressline"></div>
        <div className="flex flex-col break-words space-y-2 sm:space-y-3 font-[500] text-[12px] sm:text-[1.1rem] px-5 sm:px-9 sm:py-5 overflow-y-auto custom-scrollbar max-h-[12rem] sm:mt-0 mt-3">
          {address.map((item, index) => {
            return (
              <div key={index}>
                <label className="flex space-x-2.5 sm:space-x-5">
                  <input
                    type="radio"
                    name="address"
                    value={item.address}
                    onChange={() =>
                      setFinalData((prev) => ({
                        ...prev,
                        address: item.address,
                        date: new Date().toISOString().slice(0, 10),
                        allProducts: products,
                        totalValue: value,
                      }))
                    }
                  />
                  <div className="font-[400]">{item.address}</div>
                </label>
              </div>
            );
          })}
        </div>
        <button
          className="flex mx-auto items-center justify-center border-[1.5px] border-main-red sm:text-[1rem] text-[0.8125rem] w-[5rem] sm:w-[6rem] sm:py-1 py-[2px] rounded-lg text-main-red font-[600] mt-2 sm:mt-4"
          onClick={() => {
            if (finalData.address === "") {
              toast.error("Please select an address");
            } else {
              cartDispatch({ type: "CLEAR_CART" });
              setOrders((prev) => {
                navigate("/orders");
                return [...prev, finalData];
              });
            }
          }}
        >
          Continue
        </button>
        <div className="flex justify-center text-blue-text items-center font-[500] text-[0.8125rem] sm:text-[1rem] w-full mt-1">
          Want to add new address?
          <span
            className="text-main-red cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            &nbsp;click here...
          </span>
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

export default SelectAddressModal;
