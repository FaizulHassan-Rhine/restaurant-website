import React from "react";
import "./Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import bannerPhoto from "../../images/h_b2v.png";
import Footer from "../Footer/Footer";
import PriceBoard from "../PriceBoard/PriceBoard";
import Menus from "../Menus/Menus";
import Blog from "../Blog/Blog";
import Welcome from "../Welcome/Welcome";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div id="homee">
      <div className="px-16 container mx-auto ">
        <div className="lg:grid grid-cols-2">
          <div className="mt-10 lg:mt-24 ">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-orange-400">
              Naga Grilled Chicken
            </h2>
            <p className="pt-2">Special deal on only Friday</p>
            <p className="text-2xl font-medium">Buy 2 Get 1 Free</p>
            <AnchorLink href="#menuss">
              <button className="bg-orange-400 mt-10 p-2 hover:bg-lime-400 rounded-md  text-white text-xs font-semibold">
                ORDER NOW
              </button>
            </AnchorLink>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <img
              className="bg-white mt-10 hover:scale-110 transition duration-300 ease-in-out img-size"
              src={bannerPhoto}
              alt=""
            />
          </div>
        </div>
      </div>
      <Welcome></Welcome>
      <Menus></Menus>
      <PriceBoard></PriceBoard>
      {/* <Reviews></Reviews> */}
      {/* <Blog></Blog> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
