import React from "react";

const CentralModal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-back-blur z-50">
      <div className="fixed w-full md:w-[65%] h-screen flex items-center justify-center top-0 right-0">
        {children}
      </div>
    </div>
  );
};

export default CentralModal;
