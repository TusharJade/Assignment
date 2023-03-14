import React from "react";
import ProductFooter from "./ProductFooter";
import { RiHome2Fill } from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useAddToCart } from "../Context/cart-context";

const ProductFooterParent = () => {
  const { cartState } = useAddToCart();
  const badge = cartState.cart.filter((item) => item.quantity > 0).length;
  return (
    <ProductFooter
      data={[
        { title: "Home", icon: <RiHome2Fill />, path: "/all-products" },
        { title: "Orders", icon: <BiNotepad />, path: "/orders" },
        {
          title: "Cart",
          icon: <BsFillCartFill />,
          path: "/cart",
          badge: badge,
        },
        { title: "Profile", icon: <CgProfile />, path: "/profile" },
      ]}
    />
  );
};

export default ProductFooterParent;
