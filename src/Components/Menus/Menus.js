import React from "react";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

import p1 from '../Menu/Images/fry.jpg';
import p2 from '../Menu/Images/lollypoop.jpg';
import p3 from '../Menu/Images/burger.jpg';
import p4 from '../Menu/Images/wings.jpg';
import p5 from '../Menu/Images/strips.jpg';
import p6 from '../Menu/Images/sides.jpg';
import p7 from '../Menu/Images/dips.jpg';






const Menus = () => {
  // const [menus, setmenus] = useState([]);
  const data = [

    {
      "id": 1,
      "img": p1,
      "name": "Chicken Fry",
      "price": 139
    },
    {
      "id": 2,
      "img": p2,
      "name": "Chicken Lollypop",
      "price": 199
    },
    {
      "id": 3,
      "img": p3,
      "name": "Burgers",
      "price": 299
    },
    {
      "id": 4,
      "img": p4,
      "name": "Wings",
      "price": 199
    },


  ]
  const data2 = [

    {
      "id": 5,
      "img": p5,
      "name": "Strips",
      "price": 289
    },
    {
      "id": 6,
      "img": p6,
      "name": "Sides",
      "price": 85
    },
    {
      "id": 7,
      "img": p7,
      "name": "Dips",
      "price": 45
    }



  ]

  return (
    <div id="menu" className="container lg:pt-5 mx-auto py-24">
      <h2 className="text-center font-bold text-3xl my-16 text-orange-400">
        {" "}
        Our Best Seller
      </h2>
      <div className={`grid md:grid md:grid-cols-2 lg:grid-cols-4 mx-5 mb-12 justify-items-center gap-y-12 md:gap-y-10 `}>
        {data.map((menu, index) => (
          <div>
            {console.log(menu)}
            <div className="card card-compact w-64 md:w-56 lg:w-52 xl:w-64 hover:shadow-xl transform transition duration-500 hover:scale-105 bg-base-100 shadow-xl">
              <figure>
                <img className="h-44 w-full p-1   rounded-lg" src={menu.img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{menu.name}</h2>
                <p className="text-lg font-bold text-red-700" >Start from ৳ {menu.price}</p>
                {/* <div className="card-actions justify-center">
            <Link to="/cart">
              <button
                onClick={() => handleAddMenu(menu)}
                className="bg-orange-400 hover:bg-lime-400  text-white font-semibold p-2 rounded-btn"
              >
                {" "}
                Add To Cart
              </button>
            </Link>
          </div> */}
              </div>
            </div>


          </div>
        ))}
      </div>
      <div className={`grid md:grid md:grid-cols-2 lg:grid-cols-3 mx-5 justify-items-center gap-y-12 md:gap-y-10 md:mt-16 lg:px-28 `}>
        {data2.map((menu, index) => (
          <div>
            {console.log(menu)}
            <div className="card card-compact w-64 md:w-56 lg:w-52 xl:w-64 hover:shadow-xl transform transition duration-500 hover:scale-105 bg-base-100 shadow-xl">
              <figure>
                <img className="h-44 w-full p-1   rounded-lg" src={menu.img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{menu.name}</h2>
                <p className="text-lg font-bold text-red-700">{menu.id != 7 && "Start from"} ৳ {menu.price}</p>
                {/* <div className="card-actions justify-center">
            <Link to="/cart">
              <button
                onClick={() => handleAddMenu(menu)}
                className="bg-orange-400 hover:bg-lime-400  text-white font-semibold p-2 rounded-btn"
              >
                {" "}
                Add To Cart
              </button>
            </Link>
          </div> */}
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;



