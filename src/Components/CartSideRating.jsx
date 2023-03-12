import React from "react";
import { AiFillStar } from "react-icons/ai";

const CartSideRating = () => {
  return (
    <div className="scroller-none overflow-y-auto bg-[#3f4a74] h-screen pt-14 px-8 pb-8">
      <p className="text-[#ffffff] whitespace-pre-wrap text-[0.875rem font-[200] leading-[1.75rem] mt-12">
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
      <div className="flex gap-x-2 mt-6">
        {Array(5)
          .fill()
          .map((_, i) => {
            return <AiFillStar key={i} className="text-[#cdcd27]" />;
          })}
      </div>
      <div className="mt-7 flex gap-x-3">
        <img
          className="w-10 h-10 rounded-full"
          src="https://media.licdn.com/dms/image/C4D03AQEmATLHj2b0ww/profile-displayphoto-shrink_800_800/0/1657050285586?e=2147483647&v=beta&t=cEpMx4TVtip7J6OtnN5H8DP4sFc47qw_yKOTLvABXB4"
          alt="Tushar Jade"
        />
        <div>
          <p className="text-[0.875rem] text-[#ffffff]">Tushar Jade</p>
          <p className="text-[#f4b1b7] text-[0.875rem]">Fronted Developer</p>
        </div>
      </div>
    </div>
  );
};

export default CartSideRating;
