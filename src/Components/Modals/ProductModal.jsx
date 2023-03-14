import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import { useAddToCart } from "../../Context/cart-context";

const ProductModal = ({ data, onClose }) => {
  const { cartState, cartDispatch } = useAddToCart();
  const itemQuantity = cartState.cart.find(
    (cartItem) => cartItem.id === data.id
  )?.quantity;
  return (
    <div className="fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-[50]">
      <div className="absolute left-0 right-0 md:left-[35%] mx-auto w-1/2 lg:w-[65%] h-full z-[50] flex justify-center items-center">
        <div className="bg-[#FAFAFB] justify-between flex-col lg:flex-row flex rounded-[2.25rem] px-5 sm:px-6 sm:py-5 pt-4 pb-5 relative">
          <div className="mr-0 sm:mr-6 my-auto">
            <img
              className="sm:w-[10rem] mx-auto w-[5rem] h-[5rem] sm:h-[10rem]"
              src={data.image}
              alt="product"
            />
            {itemQuantity > 0 ? (
              <div className="border-main-red mt-2 border-[1.5px] font-[600] rounded-md flex items-center justify-center">
                <button
                  className="px-2 py-2 text-main-red"
                  onClick={() =>
                    cartDispatch({
                      type: "DECREASE_QUANTITY",
                      payload: data.id,
                    })
                  }
                >
                  <TiMinus />
                </button>
                <span className="-mt-[2px]">{itemQuantity}</span>
                <button
                  className="px-2 py-2 text-main-red"
                  onClick={() =>
                    cartDispatch({
                      type: "INCREASE_QUANTITY",
                      payload: data.id,
                    })
                  }
                >
                  <GoPlus />
                </button>
              </div>
            ) : (
              <button
                className="border-[1.5px] font-[600] px-3 rounded-md py-1 border-main-red text-main-red mt-2 w-full"
                onClick={() =>
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: { ...data, quantity: 1 },
                  })
                }
              >
                Add
              </button>
            )}
          </div>
          <div className="min-w-[13.5rem] sm:max-w-[22rem] lg:max-w-[28rem] space-y-1 my-auto">
            <div className="font-[600] text-[1rem] sm:text-[1.25rem] lg:mt-0 mt-2">
              {data.title}
            </div>
            <div className="text-[0.7813rem] sm:text-[1rem] break-words">
              {data.description}
            </div>
            <div className="text-[#617EFF] font-Gilroy">
              <span className="text-[0.75rem] font-[500] text-[#6c6e8bbf]">
                Price :
              </span>
              <span className="font-[600] text-[0.625rem]"> $</span>
              <span className="font-[700] ml-[0.0625rem]">{data.price}</span>
            </div>
            <div className="text-[#6c6e8bbf] font-[500] text-[0.75rem] flex items-center gap-x-[0.1875rem]">
              <div className="text-main-red">
                <AiFillStar />
              </div>
              {data.rating.rate} ({data.rating.count})
            </div>
          </div>
          <div
            className="bg-[#FAFAFB] absolute -top-[3rem] right-2 p-2 rounded-xl text-[1.3rem] font-[700] cursor-pointer"
            onClick={onClose}
          >
            <RxCross1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
