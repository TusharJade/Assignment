import React, { useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useAddressContext } from "../../Context/address-context";
import CentralModal from "../../Utils/CentralModal";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const AddressModal = ({ onClose }) => {
  const { address, setAddress } = useAddressContext();
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({ text: "", label: "" });
  console.log(address);
  return (
    <>
      <CentralModal>
        <div className="relative bg-[#FAFAFB] w-2/3 left-0 right-0 mx-auto  rounded-[2.25rem] pb-5">
          <div className="font-[600] text-[1.1rem] px-6 py-5">My Addresses</div>
          <div className="h-[1.5px] w-full bg-addressline"></div>
          {address?.length > 0 && (
            <div className="flex flex-col whitespace-pre-wrap space-y-3 font-[500] text-[1.1rem] px-9 py-5 overflow-y-auto  custom-scrollbar max-h-[12rem]">
              {address.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <div>
                      <div className="font-[400]">{item.address}</div>
                      <div className="text-[0.9rem] text-[#7C7C7C]">
                        {item.label}
                      </div>
                    </div>
                    <div
                      className="text-blue text-[1.5rem] mt-1 cursor-pointer"
                      onClick={() =>
                        setAddress((prev) =>
                          prev.filter((prevItem) => prevItem.id !== item.id)
                        )
                      }
                    >
                      <MdDelete />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {isNewAddress ? (
            <div className="px-9">
              <textarea
                className="w-full bg-[#ecebeb] h-[5rem] rounded-lg px-3 py-1 placeholder:text-[#535353]"
                placeholder="Add complete address here..."
                onChange={(e) =>
                  setNewAddress((item) => ({
                    ...item,
                    text: e.target.value,
                  }))
                }
              />
              <input
                className="w-full bg-[#ecebeb] mt-[0.125rem] h-[2rem] rounded-lg px-3 py-1 placeholder:text-[#535353]"
                placeholder="Add label here..."
                onChange={(e) =>
                  setNewAddress((item) => ({
                    ...item,
                    label: e.target.value,
                  }))
                }
              />
              <button
                className="flex mx-auto items-center justify-center border-[1.5px] border-main-red w-[6rem] mt-3 py-1 rounded-lg text-main-red font-[600]"
                onClick={() => {
                  if (
                    newAddress?.text?.length > 25 &&
                    newAddress?.label?.length > 0
                  ) {
                    setIsNewAddress(false);
                    setNewAddress("");
                    setAddress((prev) => {
                      return [
                        ...prev,
                        {
                          id: address?.length + 1,
                          address: newAddress.text,
                          label: newAddress.label,
                        },
                      ];
                    });
                  } else {
                    newAddress?.label?.length === 0 &&
                      toast.warn("Label is required");
                    newAddress?.text?.length < 25 &&
                      toast.warn("Address should be more than 25 characters");
                  }
                }}
              >
                Add
              </button>
            </div>
          ) : (
            <button
              className="flex mx-auto items-center justify-center border-[1.5px] border-main-red w-2/3 mt-5 py-2 rounded-lg text-main-red font-[600]"
              onClick={() => setIsNewAddress(true)}
            >
              <span className="mr-[1px] text-[1.25rem] -mb-[0.0187rem]">
                <HiPlusSm />
              </span>
              Add New Address
            </button>
          )}
          <div
            className="bg-[#FAFAFB] absolute -top-[3rem] right-2 p-2 rounded-xl text-[1.3rem] font-[700] cursor-pointer"
            onClick={onClose}
          >
            <RxCross1 />
          </div>
        </div>
      </CentralModal>
    </>
  );
};

export default AddressModal;
