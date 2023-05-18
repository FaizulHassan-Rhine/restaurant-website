import React from "react";
import "./Price.css";
import rotateLogo from "../../images/rotate-logo2.png"

const PriceBoard = () => {
  return (
    <div id="price-menu" className="mt-32 mb-1  ">

      <div className="container mx-auto text-white relative ">
        <div className="absolute top-0 left-0">
          <img className=" h-20 w-16 sm:h-28 sm:w-24 lg:h-64 lg:w-52 lg:-ml-5" src={rotateLogo} />
        </div>

        <h2 className="text-center font-bold text-4xl pt-12  ">
          Frenzy's Menu
        </h2>
        <div className="md:grid  md:grid-cols-2 lg:grid lg:grid-cols-3  justify-items-center  ">
          <div className="card w-96 ml-8   lg:ml-56 lg:mt-20">
            <div className="card-body ">
              <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
                Chicken Fry
              </h2>
              <div className="flex gap-8">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>
                  <p className="font-bold text-xl ">
                    Cheesiliano
                  </p>
                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 ml-8  lg:ml-36 lg:mt-20">
            <div className="card-body ">
              <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
                Chicken Lollypop
              </h2>
              <div className="flex gap-10">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 ml-8   lg:mt-20">
            <div className="card-body ">
              <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
                Brugers
              </h2>
              <div className="flex gap-8">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>

                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="card w-96 ml-8  lg:ml-56 ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
                Dips
              </h2>
              <div className="flex gap-8">
                <div>
                  <p className="font-bold text-xl ">
                    Honey Mustered
                  </p>
                  <p className="font-bold text-xl ">
                    Garlic Mayo
                  </p>
                  <p className="font-bold text-xl ">
                    Oh! You Sweet Dip

                  </p>
                  <p className="font-bold text-xl ">
                    Fire on Your Tounge
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-96 ml-8  lg:ml-36 ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
                Strips
              </h2>
              <div className="flex gap-8">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>
                  <p className="font-bold text-xl ">
                    TangyTingle
                  </p>
                  <p className="font-bold text-xl ">
                    Cheesiliano
                  </p>
                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 ml-8 ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
                Sides
              </h2>
              <div className="flex gap-8">
                <div>
                  <p className="font-bold text-xl ">
                    Coleslaw
                  </p>
                  <p className="font-bold text-xl ">
                    Hot Fries
                  </p>
                  <p className="font-bold text-xl ">
                    OG Fries
                  </p>
                  <p className="font-bold text-xl ">
                    Hot Wedges
                  </p>
                  <p className="font-bold text-xl ">
                    OG Wedges
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 ml-8 lg:-mt-10  lg:ml-56 ">
            <div className="card-body ">
              <h2 className=" font-extrabold text-white text-xl lg:text-3xl">
                Wings
              </h2>
              <div className="flex gap-8">
                <div>
                  <p className="font-bold text-xl ">
                    Signature
                  </p>

                  <p className="font-bold text-xl ">
                    Kashmiri Spice
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>
                  <p className="font-bold text-xl ">
                    300 tk
                  </p>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PriceBoard;
