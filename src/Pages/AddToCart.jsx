import { useNavigate } from "react-router-dom";
import CartSideRating from "../Components/CartSideRating";
import ProductCard from "../Components/ProductCard";
import ProductFooterParent from "../Components/ProductFooterParent";
import { useAuthContext } from "../Context/auth-context";
import { useAddToCart } from "../Context/cart-context";

const AddToCart = () => {
  const { isAuth } = useAuthContext();
  const { cartState } = useAddToCart();
  const navigate = useNavigate();
  const finalCart = cartState.cart.filter((item) => item.quantity > 0);
  return (
    <section className="w-full flex">
      <div className="md:block hidden md:w-[35%]">
        <CartSideRating />
      </div>
      <div className="scroller-none relative w-[100%] overflow-y-auto md:w-[65%] bg-[#FBFBFF] h-screen">
        <div className="px-6 py-4">
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
            Here is your cart items
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            {finalCart.map((item, index) => (
              <div key={index}>
                <ProductCard data={item} />
              </div>
            ))}
          </div>
          {finalCart?.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              Your cart is emprty ☹️...
            </div>
          )}
        </div>

        <ProductFooterParent />
      </div>
    </section>
  );
};

export default AddToCart;
