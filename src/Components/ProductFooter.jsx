import React from "react";
import { useNavigate } from "react-router-dom";

const ProductFooter = ({ data, onClick }) => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  return (
    <div className="fixed z-[20] right-0 md:w-[65%] w-[100%] bottom-0">
      <style jsx>{`
        .pink-line {
          background-image: linear-gradient(
            89.77deg,
            rgba(206, 50, 110, 0) 0.14%,
            #fc85b3 53.06%,
            rgba(206, 50, 110, 0) 99.74%
          );
        }
      `}</style>
      {location === "/all-products" && (
        <div
          onClick={onClick}
          className="bg-[#494b69] w-[3.3rem] h-[3.3rem] flex items-center justify-center rounded-full flex-col mb-3 cursor-pointer mx-auto"
        >
          <div class="flex flex-col items-center justify-between space-y-1 mt-[0.125rem]">
            <div class="h-px w-3 rounded-full bg-[#FFFFFF]"></div>
            <div class="h-px w-[18px] rounded-full bg-[#ffffff80]"></div>
            <div class="h-px w-3 rounded-full bg-[#FFFFFF]"></div>
          </div>
          <div className="text-[#ffffff] font-[500] text-[0.75rem] mt-[0.1875rem]">
            Menu
          </div>
        </div>
      )}
      <div className="w-full h-[0.0625rem] pink-line"></div>
      <div className="flex bg-[#FBFBFF] justify-center items-center h-[4rem] w-full gap-x-7">
        {data.map((item, index) => {
          return (
            <>
              {location === item.path ? (
                <div
                  className="text-main-red text-[0.875rem] font-[500] border-main-red py-1 rounded-full px-3 border-[1px] flex items-center justify-center cursor-pointer"
                  key={index}
                  onClick={() => navigate(item.path)}
                >
                  <span>{item.icon}</span>
                  <span className="ml-1">{item.title}</span>
                </div>
              ) : (
                <span
                  onClick={() => navigate(item.path)}
                  className="text-[1.1rem] bg-[white] cursor-pointer"
                >
                  {item.icon}
                </span>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFooter;
