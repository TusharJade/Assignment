import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/auth-context";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuthContext();
  return (
    <nav className="w-full justify-between flex px-4 lg:px-14 mt-[1.25rem] lg:mb-10 mb-[1.5rem]">
      <div className="flex w-1/2 justify-between">
        <div className="lg:flex hidden text-main-red font-[600] gap-7 items-center">
          <a
            href="https://getbinks.com/about/"
            rel="noreferrer"
            target="_blank"
          >
            About
          </a>
          <button onClick={() => navigate("/cart")}>Cart</button>
          <button onClick={() => navigate("/all-products")}>
            All Products
          </button>
          <a href="https://getbinks.com/blog/" rel="noreferrer" target="_blank">
            Blog
          </a>
          <button onClick={() => navigate("/orders")}>Track Order</button>
        </div>
        <div
          className="relative w-[5.625rem] cursor-pointer lg:translate-x-1/2"
          onClick={() => navigate("/all-products")}
        >
          <img src="assets/binksIcon.svg" alt="icon" />
          <div className="text-[0.75rem] font-[300] absolute top-[1.6rem] left-8 w-[4rem]">
            Yours Truly
          </div>
        </div>
      </div>
      {isAuth.isLogin ? (
        <button
          className="text-main-red text-[0.9375rem] lg:text-[1rem] font-[600] rounded-md px-3 lg:px-4 bg-[#fce4e8] "
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
          className="text-main-red text-[0.9375rem] font-[600] rounded-md px-3 lg:px-4 bg-[#fce4e8] lg:text-[1rem]"
          onClick={() => navigate("/login")}
        >
          Login / Sign Up
        </button>
      )}
    </nav>
  );
};

export default Navbar;
