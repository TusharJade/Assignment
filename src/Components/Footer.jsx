import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const dummyData = {
  firstRow: ["Contact Us", "Privacy Policy", "Love", "Refund & Cancellation"],
  secondRow: ["Blog", "About Us", "Pricing"],
  thirdRow: ["Teams", "Wedding BFF", "FAQs"],
  location: ["Bangalore", "Hyderabad", "Chennai", "Mumbai"],
  icon: [
    <AiOutlineInstagram />,
    <AiOutlineTwitter />,
    <FaLinkedinIn />,
    <FaFacebookF />,
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-main-red md:mt-6 mt-0 py-3 px-6 md:p-6 rounded-t-[2rem] md:flex md:justify-center">
      <div className="w-full md:max-w-[68.75rem] flex items-center md:items-start justify-between md:justify-center md:gap-x-12 lg:gap-x-32">
        <img
          className="w-[4.5rem] h-[4.5rem] md:h-auto md:w-auto md:mb-auto"
          src="assets/white-logo.svg"
          alt="icon"
        />
        <div className="hidden md:flex flex-col text-[#FFFFFF] gap-y-4">
          {dummyData.firstRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div className="hidden md:flex flex-col text-[#FFFFFF] gap-y-4">
          {dummyData.secondRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div className="hidden md:flex flex-col text-[#FFFFFF] gap-y-4">
          {dummyData.thirdRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div className="text-[white] flex gap-x-4">
          {dummyData.icon.map((item, index) => {
            return (
              <div className="text-[1.5rem]" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:hidden block h-[1px] bg-footerLine"></div>
      <div className="flex w-full font-[400] justify-between px-2 text-[12px] mt-4 mb-2 md:hidden">
        <div className="flex-col flex text-[#FFFFFF] gap-y-2">
          {dummyData.firstRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div className="flex-col flex text-[#FFFFFF] gap-y-2">
          {dummyData.secondRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div className="flex-col flex text-[#FFFFFF] gap-y-2">
          {dummyData.thirdRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
