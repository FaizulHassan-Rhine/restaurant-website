import React from "react";
import food from "../../../images/d_food.png";
import chef from "../../../images/chef.png";
import service from "../../../images/f_service.png";

const Welcome = () => {
  return (
    <div className="my-32">
      <h2 className="text-center text-3xl  mb-20">
        Welcome to <span className="font-bold text-orange-400">Fry Frenzy</span>
      </h2>
      <div className=" grid md:grid md:grid-cols-2 lg:grid-cols-3 mx-10">
        <div className="card card-compact w-96 bg-base-100 ">
          <figure>
            <img className="h-36 w-36 ml-2 " src={food} alt="" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title ">Delicious Food</h2>
            <p>
              We provide you with different cuisines of food to satisfy your
              hunger.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 ">
          <figure>
            <img className="h-36 w-36 ml-2" src={chef} alt="" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Experienced Cheif</h2>
            <p>
              If you're a happy person around food, we have the right chef for
              you.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 ">
          <figure>
            <img className="h-36 w-36 ml-2" src={service} alt="" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Quality Services</h2>
            <p>Fry Frenzy provides the best services for their customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
