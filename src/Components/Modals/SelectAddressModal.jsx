import React, { useState } from "react";
import { useAddressContext } from "../../Context/address-context";
import CentralModal from "../../Utils/CentralModal";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../Context/orders-context";

const SelectAddressModal = ({ onClose, products }) => {
  const { address } = useAddressContext();
  const { setOrders } = useOrderContext();
  const navigate = useNavigate();

  const [finalData, setFinalData] = useState({
    address: "",
    date: "",
    allProducts: [],
  });

  return (
    <CentralModal>
      <div className="relative bg-[#FAFAFB] w-2/3 left-0 right-0 mx-auto  rounded-[2.25rem] pb-5">
        <div className="font-[600] text-[1.1rem] px-6 py-5">
          Select Delivery Address
        </div>
        <div className="h-[1.5px] w-full bg-addressline"></div>
        <div className="flex flex-col whitespace-pre-wrap space-y-3 font-[500] text-[1.1rem] px-9 py-5 overflow-y-auto  custom-scrollbar max-h-[12rem]">
          {address.map((item, index) => {
            return (
              <div key={index}>
                <label className="flex space-x-5">
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
          className="flex mx-auto items-center justify-center border-[1.5px] border-main-red w-[6rem] py-1 rounded-lg text-main-red font-[600] mt-4"
          onClick={() => {
            setOrders((prev) => {
              navigate("/orders");
              return [...prev, finalData];
            });
          }}
        >
          Continue
        </button>
        <div className="flex justify-center text-blue-text items-center font-[500] w-full mt-1">
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
