import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useAddToCart } from "../Context/cart-context";
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import ProductModal from "./Modals/ProductModal";

const ProductCard = ({ data }) => {
  const { cartState, cartDispatch } = useAddToCart();
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const itemQuantity = cartState.cart.find(
    (cartItem) => cartItem.id === data.id
  )?.quantity;

  return (
    <>
      <div className="bg-[rgba(255,255,255,1)] flex justify-between sm:px-4 rounded sm:py-2 px-4 py-4 shadow-[0_8px_16px_rgba(138,106,205,0.08)]">
        <div className="flex flex-col">
          <div className="leading-[1.4rem] sm:leading-normal sm:text-[1.125rem]">
            {data?.title?.slice(0, 24)}
          </div>
          <div className="text-[#617EFF] font-Gilroy sm:mt-0 mt-1.5">
            <span className="font-[600] text-[0.625rem]">$</span>
            <span className="font-[700] ml-[0.0625rem]">
              {data?.price}
            </span>{" "}
            <span className="text-[0.75rem] font-[500] text-[#6c6e8bbf]">
              onwards
            </span>
          </div>
          <div className="text-[#6c6e8bbf] font-[500] text-[0.75rem] flex items-center gap-x-[0.1875rem] sm:mt-0 mt-1">
            <div className="text-main-red">
              <AiFillStar />
            </div>
            {data?.rating?.rate} ({data?.rating?.count})
          </div>
          <div
            className="cursor-pointer sm:leading-[1.4rem] leading-none w-max sm:mt-auto font-[600] text-main-red text-[0.875rem] mt-auto"
            onClick={() => setIsModalOpen(true)}
          >
            View Details
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[4rem] h-[4rem]" src={data?.image} alt="product" />
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
      </div>
      {IsModalOpen && (
        <ProductModal data={data} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ProductCard;
