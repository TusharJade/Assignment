import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    })();
  }, []);
  console.log(products);

  return (
    <>
      <ProductCard />
    </>
  );
};

export default ProductListingPage;
