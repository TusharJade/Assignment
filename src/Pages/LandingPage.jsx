import React from "react";

const LandingPage = () => {
  return (
    <section className="w-full ">
      <img className="w-full" src="assets/banner.jpeg" alt="banner" />
      <div className="flex justify-center">
        <div className="text-[2.75rem] font-[600] max-w-[68.75rem] mt-[3rem] px-4 text-center">
          Most trusted tailoring experience for women and kids in Bangalore,
          Hyderabad, Chennai and Mumbai
        </div>
      </div>
      <button>Explore our services</button>
    </section>
  );
};

export default LandingPage;
