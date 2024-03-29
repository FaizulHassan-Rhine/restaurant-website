import React from "react";
import "./Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import bannerPhoto from "../../images/home9.png";
import Footer from "../Footer/Footer";
import PriceBoard from "../PriceBoard/PriceBoard";
import Menus from "../Menus/Menus";
import Blog from "../Blog/Blog";
import Welcome from "../Welcome/Welcome";
import Reviews from "../Reviews/Reviews";
import MenuList from "../MenuList/MenuList";
import OurFlavours from "../OurFlavours/OurFlavours";

const Home = () => {
  return (
    <div id="homee" >
      <div className="w-full md:h-[450px] lg:h-[550px] bg-[#F7E43F]">
        <div className="px-4 xl:px-16 py-12 container mx-auto ">
          <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center ">
            <div className="mt-10 lg:mt-10 ">
              <h2 className="text-3xl md:text-5xl text-center lg:text-[70px] font-extrabold text-gray-700">
                It's Clucking Delicious<span className="lg:text-[60px] ml-1">!!</span>
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
                className=" h-[200px] w-[250px] sm:h-[300px]  sm:w-[365px] md:h-[250px] md:w-[300px] lg:h-[350px] lg:w-[420px]  mt-10 hover:scale-110 transition duration-300 ease-in-out img-size"
                src={bannerPhoto}

                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Welcome></Welcome>

      <PriceBoard></PriceBoard>
      <OurFlavours></OurFlavours>
      {/* <Menus></Menus> */}
      <MenuList></MenuList>
      {/* <Reviews></Reviews> */}
      {/* <Blog></Blog> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
