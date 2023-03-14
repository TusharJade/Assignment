import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CartSideRating from "../Components/CartSideRating";
import ProductCard from "../Components/ProductCard";
import { useAuthContext } from "../Context/auth-context";
import ProductFooterParent from "../Components/ProductFooterParent";
import { RxCross1 } from "react-icons/rx";

const dummyData = [
  {
    img: "assets/men.png",
    title: "Men's Clothing",
    categories: "men's clothing",
  },
  {
    img: "assets/img2.webp",
    title: "Women's Clothing",
    categories: "women's clothing",
  },
  {
    img: "assets/jewellery.png",
    title: "Jewellery",
    categories: "jewelery",
  },
  {
    img: "assets/electronics.png",
    title: "Electronics",
    categories: "electronics",
  },
  {
    img: "assets/all.png",
    title: "All Products",
    categories: "",
  },
];

const ProductListingPage = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCartegories, setIsCartegories] = useState(false);

  const filterProducts = (product, search) => {
    return search === ""
      ? product
      : products.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
  };

  const filterCategories = (product, variety) => {
    return categories === ""
      ? product
      : products.filter((item) => item.category === variety);
  };

  const finalFilter = filterCategories(
    filterProducts(products, search),
    categories
  ).map((item) => ({ ...item, quantity: 0 }));

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setLoading(false);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <section className="w-full flex">
        <div className="md:block hidden md:w-[35%]">
          <CartSideRating />
        </div>

        <div className="scroller-none w-[100%] overflow-y-auto md:w-[65%] bg-[#FBFBFF] relative z-[10] h-screen">
          <div className="px-6 pt-4 pb-0">
            <img
              className="cursor-pointer"
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
                className="w-full text-[#5E6477] text-[0.875rem] mt-6 sm:mt-8 h-[3.5rem] placeholder:text-[#5E6477] p-5 sm:p-6 border-[#EDBAC6] rounded-full border-[0.0625rem] focus:outline-none"
                placeholder="Search your product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="rounded-full w-[2.6rem] flex items-center justify-center bg-main-red h-[2.6rem] absolute sm:right-[0.625rem] sm:top-[2.5rem] top-[2rem] right-[8px]">
                <FiSearch className="text-[1.3rem] text-[#ffffff]" />
              </div>
              <div className="font-[600] text-[1.25rem] mt-3 mb-4 sm:mb-4">
                {categories === ""
                  ? "All Products"
                  : categories[0].toUpperCase(1) + categories.slice(1)}
              </div>
            </div>
          </div>

          <div className="flex sm:w-full flex-col space-y-4 items-center justify-center mb-16">
            {finalFilter.map((item, index) => {
              return (
                <div className="w-[90%] sm:w-[85%]" key={index}>
                  <ProductCard data={item} />
                </div>
              );
            })}
            {loading && <div>Loading...</div>}
            {finalFilter.length === 0 && !loading && (
              <div>No product found...</div>
            )}
          </div>

          {finalFilter?.length > 0 && (
            <div
              onClick={() => setIsCartegories(true)}
              className="bg-[#494b69] fixed left-0 sm:left-[35%] right-0 mx-auto bottom-[4rem] z-[20] w-[3.3rem] h-[3.3rem] flex items-center justify-center rounded-full flex-col mb-3 cursor-pointer"
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

          {isCartegories && (
            <div className="fixed inset-0 z-[100]  h-full min-h-[100vh] w-full min-w-[100vw] bg-[rgba(0,0,0,0.5)] flex items-center">
              <div className="absolute left-0 sm:left-[35%] mx-auto right-0 w-3/4 sm:w-[31.25rem] z-[30] flex justify-around flex-wrap gap-x-2 sm:gap-x-9 gap-y-4 sm:gap-y-5 bg-[#FAFAFB] rounded-[2.25rem] sm:pb-8 sm:pt-0 py-6 px-2 sm:px-8">
                {dummyData.map((item, index) => {
                  return (
                    <div
                      className="flex cursor-pointer mt-0 sm:mt-8 sm:gap-6 w-max justify-center"
                      key={index}
                      onClick={() => {
                        setCategories(item.categories);
                        setIsCartegories(false);
                      }}
                    >
                      <div className="relative">
                        <div className="flex items-center justify-center rounded-full bg-[rgba(214,64,122,.1)] w-[6.4rem] h-[6.4rem]">
                          <div className="rounded-full w-[4.125rem] h-[4.125rem] bg-[#EDBAC6]"></div>
                        </div>
                        <img
                          className={`${
                            index === 2 && "mt-[6px]"
                          } absolute top-[-9px]  w-[7.5rem] h-[7.5rem]`}
                          src={item.img}
                          alt="variety"
                        />
                        <div className="font-[600] w-[6.5rem] text-center">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div
                  className="absolute -bottom-[3.5rem] cursor-pointer bg-[#FAFAFB] p-3 rounded-xl"
                  onClick={() => setIsCartegories(false)}
                >
                  <RxCross1 className="left-[50%] text-[black] font-[700] text-[1.2rem]" />
                </div>
              </div>
            </div>
          )}
          <ProductFooterParent />
        </div>
      </section>
    </>
  );
};

export default ProductListingPage;
