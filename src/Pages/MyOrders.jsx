import React from "react";
import { useNavigate } from "react-router-dom";
import CartSideRating from "../Components/CartSideRating";
import OrdersCard from "../Components/OrdersCard";
import ProductFooterParent from "../Components/ProductFooterParent";
import { useAuthContext } from "../Context/auth-context";
import { useOrderContext } from "../Context/orders-context";

const MyOrders = () => {
  const { isAuth } = useAuthContext();
  const { orders } = useOrderContext();
  const navigate = useNavigate();
  return (
    <section className="w-full flex">
      <div className="md:block hidden md:w-[35%]">
        <CartSideRating />
      </div>
      <div className="scroller-none w-[100%] overflow-y-auto md:w-[65%] bg-[#FBFBFF] h-screen relative z-[50]">
        <div className="px-6 py-4 mb-16">
          <img
            className="cursor-pointer"
            src="assets/binksIcon.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <div className="mt-4 mx-2 font-[700] text-[1.375rem]">
            Hello, {isAuth.userName} 👋
          </div>
          <div className="font-[300] mx-2 text-[1.125rem]">
            Here are your orders
          </div>
          {orders?.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center -z-[20]">
              Your didn't place any order ☹️...
            </div>
          )}
          <div className="flex flex-col mt-4 space-y-4">
            {orders.map((item, index) => {
              return (
                <div key={index}>
                  <OrdersCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
        <ProductFooterParent />
      </div>
    </section>
  );
};

export default MyOrders;
