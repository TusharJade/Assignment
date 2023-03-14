import React from "react";
import { useNavigate } from "react-router-dom";

const ProductFooter = ({ data }) => {
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
      <div className="w-full h-[0.0625rem] pink-line"></div>
      <div className="flex bg-[#FBFBFF] justify-center items-center h-[4rem] w-full gap-x-7">
        {data.map((item, index) => {
          return (
            <div key={index}>
              {location === item.path ? (
                <div
                  className="text-main-red text-[0.875rem] font-[500] border-main-red py-1 rounded-full px-3 border-[1px] flex items-center justify-center cursor-pointer"
                  onClick={() => navigate(item.path)}
                >
                  <span>{item.icon}</span>
                  <span className="ml-1">{item.title}</span>
                </div>
              ) : (
                <span
                  onClick={() => navigate(item.path)}
                  key={index}
                  className="relative text-[1.1rem] bg-[white] cursor-pointer"
                >
                  {item.icon}
                  {item.badge > 0 && (
                    <span className="absolute font-[500] -right-1.5 text-[0.75rem] flex items-center justify-center -top-[9.5px] bg-main-red rounded-[100%] px-[0.3125rem] text-[white]">
                      {item.badge}
                    </span>
                  )}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFooter;
