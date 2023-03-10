import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const dummyData = [
  { img: "assets/img.webp", title: "Ethnic Wear" },
  {
    img: "assets/img2.webp",
    title: "Western Wear",
  },
  {
    img: "assets/img3.webp",
    title: "Upsycling",
  },
  {
    img: "assets/img4.webp",
    title: "Kids Wear",
  },
  {
    img: "assets/img5.webp",
    title: "Accessories",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section className="w-full">
        <img
          className="w-full cursor-pointer"
          src="assets/banner.jpeg"
          onClick={() => navigate("/all-products")}
          alt="banner"
        />
        <div className="back">
          <style jsx>{`
            .back {
              background-image: linear-gradient(
                180deg,
                #fae4eb,
                #fff 99.99%,
                hsla(0, 0%, 100%, 0)
              );
            }
          `}</style>
          <div className="flex justify-center">
            <div className="text-[2.75rem] font-[600] max-w-[68.75rem] mt-[3rem] px-4 text-center text-[#271939]">
              Most trusted tailoring experience for women and kids in Bangalore,
              Hyderabad, Chennai and Mumbai
            </div>
          </div>
          <div className="flex mt-8 gap-6 w-full justify-center">
            {dummyData.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  <div className="flex items-center justify-center rounded-full bg-[rgba(214,64,122,.1)] w-[6.4rem] h-[6.4rem]">
                    <div className="rounded-full w-[4.125rem] h-[4.125rem] bg-[#EDBAC6]"></div>
                  </div>
                  <img
                    className="w-[7.5rem] h-[7.5rem] absolute top-[-9px]"
                    src={item.img}
                    alt="variety"
                  />
                  <div className="font-[600] w-[6.5rem] text-center">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 font-[600] text-[1.125rem] rounded-lg my-9 py-3.5 bg-[#D6407A] text-[white] min-h-[2.75rem] min-w-[8rem]"
              onClick={() => navigate("/all-products")}
            >
              Explore our services
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
