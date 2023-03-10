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
    <footer className="w-full bg-main-red mt-6 p-6 rounded-t-[2rem] flex justify-center">
      <div className="max-w-[68.75rem] flex justify-center gap-x-12 lg:gap-x-32">
        <img className="mb-auto" src="assets/white-logo.svg" alt="icon" />
        <div className="flex flex-col text-[#FFFFFF] gap-y-4">
          {dummyData.firstRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col text-[#FFFFFF] gap-y-4">
          {dummyData.secondRow.map((item, index) => {
            return (
              <div key={index}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col text-[#FFFFFF] gap-y-4">
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
    </footer>
  );
};

export default Footer;
