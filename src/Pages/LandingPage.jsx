import React from "react";
import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <section className="w-full">
      <Navbar />
      <img className="w-full" src="assets/banner.jpeg" alt="banner" />
      <div className="flex justify-center">
        <div className="text-[2.75rem] font-[600] max-w-[68.75rem] mt-[3rem] px-4 text-center">
          Most trusted tailoring experience for women and kids in Bangalore,
          Hyderabad, Chennai and Mumbai
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-4 font-[600] text-[1.125rem] rounded-lg my-8 py-3.5 bg-[#D6407A] text-[white] min-h-[2.75rem] min-w-[8rem]">
          Explore our services
        </button>
      </div>
      <div>
        <img src="assets/img.webp" alt="variety" />
      </div>
    </section>
  );
};

export default LandingPage;
