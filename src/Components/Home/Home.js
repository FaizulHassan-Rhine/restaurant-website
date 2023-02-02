import React from "react";
import bannerPhoto from "../../images/h_b2-.png";
import Blog from "../Blog/Blog";
// import Navbar from "../Navbar/Navbar";

import Footer from "./Footer/Footer";
import Menus from "./Menus/Menus";
import PriceBoard from "./PriceBoard/PriceBoard";
import Reviews from "./Reviews/Reviews";
import Welcome from "./Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <div className="px-16">
        <div className="lg:grid grid-cols-2">
          <div className="mt-24 ">
            <h2 className="text-6xl font-bold text-orange-400">
              Naga Grilled Chicken
            </h2>
            <p className="pt-2">Special deal on only Friday</p>
            <p className="text-2xl font-medium">Buy 2 Get 1 Free</p>
            <button className="bg-orange-400 mt-10 p-2 hover:bg-lime-400 rounded-md  text-white text-xs font-semibold">
              ORDER NOW
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <img
              style={{ width: "580px", height: "380px" }}
              className="bg-white mt-6 hover:scale-110 transition duration-300 ease-in-out"
              src={bannerPhoto}
              alt=""
            />
          </div>
        </div>
      </div>

      <Welcome></Welcome>
      <Menus></Menus>
      <PriceBoard></PriceBoard>
      <Reviews></Reviews>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
