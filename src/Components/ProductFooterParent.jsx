import React from "react";
import ProductFooter from "./ProductFooter";
import { RiHome2Fill } from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const ProductFooterParent = ({ onClick }) => {
  return (
    <ProductFooter
      data={[
        { title: "Home", icon: <RiHome2Fill />, path: "/all-products" },
        { title: "Orders", icon: <BiNotepad />, path: "/orders" },
        { title: "Cart", icon: <BsFillCartFill />, path: "/cart" },
        { title: "Profile", icon: <CgProfile />, path: "/profile" },
      ]}
      onClick={onClick}
    />
  );
};

export default ProductFooterParent;
