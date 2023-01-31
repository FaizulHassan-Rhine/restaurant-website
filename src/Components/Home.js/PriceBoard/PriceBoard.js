import React from "react";
import "./Price.css";

const PriceBoard = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl mb-6 pt-6 ml-2">
        <span className="font-bold text-orange-400">Frenzy's</span> Menu{" "}
      </h2>
      <div id="price-menu" className="mt-10 ">
        <div className="grid lg:grid-cols-2 lg:ml-20 ">
          <div className="card w-60  ml-60 mt-16">
            <div className="card-body ">
              <h2 className=" font-bold text-white text-xl">Combo Package</h2>
              <p>
                Frenzy's Combo <span>$80</span>
              </p>
              <p>
                Family Combo <span>$120</span>
              </p>
              <p>
                Couple Combo <span>$50</span>
              </p>
              <p>
                Kids Combo <span>$60</span>
              </p>
            </div>
          </div>
          <div className="card w-60  ml-10 mt-16">
            <div className="card-body ">
              <h2 className=" font-bold text-white text-xl">Combo Package</h2>
              <p>
                Frenzy's Combo <span>$80</span>
              </p>
              <p>
                Family Combo <span>$120</span>
              </p>
              <p>
                Couple Combo <span>$50</span>
              </p>
              <p>
                Kids Combo <span>$60</span>
              </p>
            </div>
          </div>
          <div className="card w-60  ml-60 mt-36">
            <div className="card-body ">
              <h2 className=" font-bold text-white text-xl">Combo Package</h2>
              <p>
                Frenzy's Combo <span>$80</span>
              </p>
              <p>
                Family Combo <span>$120</span>
              </p>
              <p>
                Couple Combo <span>$50</span>
              </p>
              <p>
                Kids Combo <span>$60</span>
              </p>
            </div>
          </div>
          <div className="card w-60  ml-10 mt-36">
            <div className="card-body ">
              <h2 className=" font-bold text-white text-xl">Combo Package</h2>
              <p>
                Frenzy's Combo <span>$80</span>
              </p>
              <p>
                Family Combo <span>$120</span>
              </p>
              <p>
                Couple Combo <span>$50</span>
              </p>
              <p>
                Kids Combo <span>$60</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBoard;
