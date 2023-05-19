import React from "react";
import "./Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import bannerPhoto from "../../images/home2.png";
import Footer from "../Footer/Footer";
import PriceBoard from "../PriceBoard/PriceBoard";
import Menus from "../Menus/Menus";
import Blog from "../Blog/Blog";
import Welcome from "../Welcome/Welcome";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div id="homee">
      <div className="px-4 xl:px-16 container mx-auto ">
        <div className="flex flex-col md:flex-row md:gap-10 justify-between ">
          <div className="mt-10 lg:mt-24 ">
            <h2 className="text-3xl md:text-5xl text-center lg:text-6xl font-bold text-orange-400">
              Its Clucking Delicious
            </h2>
            {/* <p className="pt-2">Special deal on only Friday</p>
            <p className="text-2xl font-medium">Buy 2 Get 1 Free</p>
            <AnchorLink href="#menu">
              <button className="bg-orange-400 mt-10 p-2 hover:bg-lime-400 rounded-md  text-white text-xs font-semibold">
                ORDER NOW
              </button>
            </AnchorLink> */}
          </div>
          <div className="w-full flex justify-center">
            <img
              className="bg-white h-[180px] w-[360px] sm:h-[300px]  sm:w-[500px] md:h-[235px] md:w-[460px] lg:h-[350px] lg:w-[580px]  mt-10 hover:scale-110 transition duration-300 ease-in-out img-size"
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
