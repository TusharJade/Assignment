import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CartSideRating from "../Components/CartSideRating";
import ProductCard from "../Components/ProductCard";
import { useAuthContext } from "../Context/auth-context";

const ProductListingPage = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const filterProducts = products.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    })();
  }, []);
  console.log(products);

  return (
    <section className="w-full flex">
      <div className="md:block hidden md:w-[35%]">
        <CartSideRating />
      </div>
      <div className="scroller-none w-[100%] overflow-y-auto md:w-[65%] bg-[#FBFBFF] px-6 py-4 h-screen">
        <img
          src="assets/binksIcon.svg"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <div className="mt-4 mx-2 font-[700] text-[1.375rem]">
          Hello, {isAuth.userName} 👋
        </div>
        <div className="font-[300] mx-2 text-[1.125rem]">
          What are you looking for?
        </div>
        <div className="relative">
          <input
            className="w-full text-[#5E6477] text-[0.875rem] mt-8 h-[3.5rem] placeholder:text-[#5E6477] p-6 border-[#EDBAC6] rounded-full border-[0.0625rem] focus:outline-none"
            placeholder="Search your product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="rounded-full w-[2.6rem] flex items-center justify-center bg-main-red h-[2.6rem] absolute right-[10px] top-[2.5rem]">
            <FiSearch className="text-[1.3rem] text-[#ffffff]" />
          </div>
          <div className="font-[600] text-[1.25rem] mt-3 mb-8">
            Men's Clothing
          </div>
          <div className="flex w-full flex-col space-y-4 items-center justify-center">
            {filterProducts.map((item, index) => {
              return (
                <div className="w-[90%]" key={index}>
                  <ProductCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListingPage;
