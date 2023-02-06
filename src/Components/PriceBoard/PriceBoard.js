import React from "react";
import "./Price.css";

const PriceBoard = () => {
  return (
    <div id="price-menu" className="mt-32 mb-32  ">
      <h2 className="text-center text-4xl pt-28  ">
        <span className="font-bold   text-white">Frenzy's</span> Menu{" "}
      </h2>
      <div className="md:grid  md:grid-cols-2 lg:grid lg:grid-cols-2 justify-items-center  ">
        <div className="card w-96   lg:ml-56 lg:mt-20">
          <div className="card-body ">
            <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
              COMBO PACKAGE
            </h2>
            <p className="font-bold text-xl ">
              Frenzy's Combo --------- <span>$80</span>
              <br />
              <p className="text-xs font-bold  ">Chicken Nuggets,Fries,Wings</p>
            </p>
            <p className="font-bold text-xl ">
              Family Combo ----------- <span>$120</span>
              <br />
              <p className="text-xs font-bold  ">Chicken Nuggets,Fries,Wings</p>
            </p>
            <p className="font-bold text-xl ">
              Couple Combo ----------- <span>$50</span>
              <br />
              <p className="text-xs font-bold   ">
                Chicken Nuggets,Fries,Wings
              </p>
            </p>
            <p className="font-bold text-xl ">
              Kids Combo --------------- <span>$60</span>
              <br />
              <p className="text-xs font-bold   ">
                Chicken Nuggets,Fries,Wings
              </p>
            </p>
          </div>
        </div>
        <div className="card w-96  lg:ml-20 lg:mt-20">
          <div className="card-body ">
            <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
              SNACKS
            </h2>
            <p className="font-bold text-xl ">
              Chicken Fry ------------- <span>$20</span>
              <br />
              <p className="text-xs font-bold  ">Regular,Naga</p>
            </p>
            <p className="font-bold text-xl ">
              Chicken Wings --------- <span>$15</span>
              <br />
              <p className="text-xs font-bold   ">Garlic,Naga,Crispy</p>
            </p>
            <p className="font-bold text-xl ">
              Chicken Lollypop ----- <span>$12</span>
              <br />
              <p className="text-xs font-bold   ">Regular,Garlic,Sweet,Naga</p>
            </p>
            <p className="font-bold text-xl ">
              Fries ------------------------- <span>$10</span>
              <br />
              <p className="text-xs font-bold   ">Small,Large</p>
            </p>
          </div>
        </div>
        <div className="card w-96  lg:ml-56 lg:mt-20">
          <div className="card-body ">
            <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
              FRENZY SPECIAL
            </h2>
            <p className="font-bold text-xl ">
              Chicken Burger --------- <span>$50</span>
              <br />
              <p className="text-xs font-bold   ">Extra Spicy/Cheese</p>
            </p>
            <p className="font-bold text-xl">
              Chicken Sausage ------ <span>$30</span>
              <br />
              <p className="text-xs font-bold   ">Small/Medium/Large</p>
            </p>
            <p className="font-bold text-xl ">
              Chicken Kabab --------- <span>$30</span>
              <br />
              <p className="text-xs font-bold   ">Extra Spicy</p>
            </p>
            <p className="font-bold text-xl ">
              Chiken Shawarma ----- <span>$60</span>
              <br />
              <p className="text-xs font-bold   ">Small/Medium/Large</p>
            </p>
          </div>
        </div>
        <div className="card w-96  lg:ml-20 lg:mt-20">
          <div className="card-body ">
            <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
              Combo Package
            </h2>
            <p className="font-bold text-xl ">
              Frenzy's Combo --------- <span>$80</span>
              <br />
              <p className="text-xs font-bold  ">Chicken Nuggets,Fries,Wings</p>
            </p>
            <p className="font-bold text-xl ">
              Family Combo ----------- <span>$120</span>
              <br />
              <p className="text-xs font-bold   ">
                Chicken Nuggets,Fries,Wings
              </p>
            </p>
            <p className="font-bold text-xl ">
              Couple Combo ----------- <span>$50</span>
              <br />
              <p className="text-xs font-bold   ">
                Chicken Nuggets,Fries,Wings
              </p>
            </p>
            <p className="font-bold text-xl ">
              Kids Combo --------------- <span>$60</span>
              <br />
              <p className="text-xs font-bold   ">
                Chicken Nuggets,Fries,Wings
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBoard;
