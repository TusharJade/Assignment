import React from "react";
import { AiFillStar } from "react-icons/ai";

const CartSideRating = () => {
  return (
    <div className="scroller-none w-[28.75rem] overflow-y-auto bg-[#3f4a74] h-screen pt-14 px-8 pb-8">
      <p className="text-[#ffffff] whitespace-pre-wrap text-[0.875rem font-[200] leading-[1.75rem]">
        The best part of the process was definitely the home-pick-up and design
        consultation they offer. So much simpler and more manageable than
        spending an hour going back and forth to my older boutique! And the
        inputs from their designers are very clued into what will work for your
        planned use, body, overall outfit look. And so creative - we had
        leftover fabric from one of the saree blouses and they suggested making
        a super stylish saree belt with it! I was also very happy with the cut
        and fit of the formal skirt they stitched for me (with pockets!) and
        have received multiple queries and compliments about that every time
        I've worn it!
      </p>
      <div className="flex gap-x-2">
        {Array(5)
          .fill()
          .map((_, i) => {
            return <AiFillStar className="text-[#cdcd27]" />;
          })}
      </div>
    </div>
  );
};

export default CartSideRating;
