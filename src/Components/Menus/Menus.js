import React from "react";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

import p1 from '../Menu/Images/1.png';
import p2 from '../Menu/Images/2.png';
import p3 from '../Menu/Images/3.png';
import p4 from '../Menu/Images/4.png';
import p5 from '../Menu/Images/5.png';
import p6 from '../Menu/Images/6.png';
import p7 from '../Menu/Images/7.png';
import p8 from '../Menu/Images/8.png';





const Menus = () => {
  // const [menus, setmenus] = useState([]);
  const data = [

    {
      "id": 1,
      "img": p1,
      "name": "Chicken Fry",
      "price": 20
    },
    {
      "id": 2,
      "img": p2,
      "name": "Chicken Wings",
      "price": 15
    },
    {
      "id": 3,
      "img": p3,
      "name": "Chicken Shawarma",
      "price": 25
    },
    {
      "id": 4,
      "img": p4,
      "name": "Chicken Lollypop",
      "price": 10
    },
    {
      "id": 5,
      "img": p5,
      "name": "Chicken Burger",
      "price": 35
    },
    {
      "id": 6,
      "img": p6,
      "name": "Chicken Sausage",
      "price": 25
    },
    {
      "id": 7,
      "img": p7,
      "name": "Chicken Nuggets",
      "price": 20
    },
    {
      "id": 8,
      "img": p8,
      "name": "Chicken Kabab",
      "price": 30
    }


  ]

  return (
    <div id="menuss" className="container m-auto">
      <h2 className="text-center font-bold text-3xl mb-16 text-orange-400">
        {" "}
        Our Best Seller
      </h2>
      <div className="grid md:grid md:grid-cols-3 lg:grid-cols-4 mx-5 justify-items-center gap-y-20 ">
        {data.map((menu) => (
          <div>
            {console.log(menu)}

            <Menu key={menu.id} menu={menu}>

            </Menu>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
