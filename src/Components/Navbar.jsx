import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/auth-context";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuthContext();
  return (
    <nav className="w-full justify-between flex px-14 mt-[1.25rem] mb-10">
      <div className="flex w-1/2 justify-between">
        <div className="flex text-main-red font-[600] gap-7 items-center">
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
        <div className="relative w-[5.625rem] cursor-pointer translate-x-1/2">
          <img src="assets/binksIcon.svg" alt="icon" />
          <div className="text-[0.75rem] font-[300] absolute top-[1.6rem] left-8">
            Yours Truly
          </div>
        </div>
      </div>
      {isAuth.isLogin ? (
        <button
          className="text-main-red font-[600] rounded-md px-4 bg-[#fce4e8] cursor-pointer"
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
          className="text-main-red font-[600] rounded-md px-4 bg-[#fce4e8] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login / Sign Up
        </button>
      )}
    </nav>
  );
};

export default Navbar;
