import React from "react";
import bannerPhoto from "../../images/h_b2-.png";

const HomeBanner = () => {
  return (
    <div className="px-16">
      <div className="grid grid-cols-2">
        <div className="mt-24 ">
          <h2 className="text-6xl font-bold text-orange-400">
            Naga Grilled Chicken
          </h2>
          <p className="pt-2">Special deal on only Friday</p>
          <p className="text-2xl font-medium">Buy 2 Get 1 Free</p>
          <button className="bg-orange-400 mt-10 p-2 rounded-md text-white text-xs font-medium">
            ORDER NOW
          </button>
        </div>
        <div>
          <img className="bg-white mt-6" src={bannerPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
