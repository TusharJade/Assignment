import axios from "axios";
import React, { useEffect, useState } from "react";
import CartSideRating from "../Components/CartSideRating";

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
    <section className="fixed">
      <CartSideRating />
    </section>
  );
};

export default ProductListingPage;
