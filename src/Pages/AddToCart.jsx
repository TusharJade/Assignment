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

  const value = finalCart
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed();

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
          <div className="mt-4 flex flex-col space-y-4 mb-44">
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
        {finalCart?.length > 0 && (
          <>
            <div className="fixed bottom-[8.75rem] py-[3px] flex items-center justify-center font-[500] bg-[#617EE1] text-[0.75rem] w-full md:w-[65%] text-[#FEFEFE]">
              Avail FREE Standard Delivery on orders above ₹2000
            </div>
            <div className="flex items-center justify-between w-full md:w-[65%] px-4 py-2 bg-[#FBFBFF] fixed bottom-[4rem]">
              <style jsx>{`
                .long-line {
                  background-image: linear-gradient(
                    179.77deg,
                    rgba(206, 50, 110, 0) 0.19%,
                    #fc85b3 53.1%,
                    rgba(206, 50, 110, 0) 99.79%
                  );
                }
              `}</style>
              <div className="flex items-center">
                <div className="font-[600] text-[1.25rem]">
                  {finalCart?.length} Items
                </div>
                <div className="long-line w-[1.8px] h-12 mx-5"></div>
                <div>
                  <div className="text-[#aaacd0bf] text-[0.75rem] font-[500]">
                    Estimated Total
                  </div>
                  <div className="text-[#617EFF] text-[1.75rem]">
                    <span className="font-[600] text-[0.75rem]">$</span>
                    <span className="font-[700] ml-[0.0625rem]">
                      {value}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <button className="bg-main-red rounded-lg text-[#ffffff] font-[600] px-5 py-1.5">
                Place Order
              </button>
            </div>
          </>
        )}
        <ProductFooterParent />
      </div>
    </section>
  );
};

export default AddToCart;
