import React, { useState } from "react";
import CartSideRating from "../Components/CartSideRating";
import ProductFooterParent from "../Components/ProductFooterParent";
import { useAuthContext } from "../Context/auth-context";
import { SlLocationPin } from "react-icons/sl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";
import AddressModal from "../Components/Modals/AddressModal";

const MyProfile = () => {
  const { isAuth, setIsAuth } = useAuthContext();
  const navigate = useNavigate();
  const [isAddress, setIsAddress] = useState(false);
  return (
    <section className="w-full flex">
      <div className="md:block hidden md:w-[35%]">
        <CartSideRating />
      </div>
      <div className="scroller-none w-[100%] overflow-y-auto md:w-[65%] bg-[#FBFBFF] h-screen">
        <div className="bg-main-red rounded-bl-[3.3rem] pb-4">
          <div className="font-[600] text-[white] text-xl py-6 flex items-center justify-center bg-main-red">
            Profile
          </div>
          <div className="h-[1px] w-full bg-horizontalLine"></div>
          <div className="mx-8 text-[white] mt-6 flex items-center justify-between">
            <div>
              <div className="text-[0.75rem] font-[500]">Hello,</div>
              <div className="text-[1.375rem] font-[700] mt-2">
                {isAuth.isLogin ? (
                  isAuth.userName
                ) : (
                  <div className="text-[1.1rem] font-[600]">
                    Please Login first...
                  </div>
                )}
              </div>
            </div>
            {isAuth.isLogin ? (
              <button
                className="font-[600]"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userName");
                  navigate("/");
                  toast.success("Logged Out Successfully");
                  setIsAuth((prev) => ({
                    ...prev,
                    token: "",
                    userName: "",
                    isLogin: false,
                  }));
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="font-[600]"
                onClick={() => {
                  navigate("/login");
                  toast.error("Please Login First");
                }}
              >
                Login
              </button>
            )}
          </div>
          <div
            className="w-[65%] mx-auto sm:mt-2 mt-5 font-[600] bg-[#FFFFFB] flex items-center px-3.5 py-3 sm:p-4 text-blue-text justify-between sm:rounded-[0.875rem] rounded-xl cursor-pointer"
            onClick={() => {
              if (isAuth.isLogin) {
                setIsAddress(true);
              } else {
                toast.error("Please Login First");
                navigate("/login");
              }
            }}
          >
            <div className="flex items-center">
              <div className="text-[1.3rem]">
                <SlLocationPin />
              </div>
              <div className="text-[1rem] ml-2">Addresses</div>
            </div>
            <BsCaretRightFill className="text-[1.25rem]" />
          </div>
        </div>

        {isAddress && <AddressModal onClose={() => setIsAddress(false)} />}
        <ProductFooterParent />
      </div>
    </section>
  );
};

export default MyProfile;
