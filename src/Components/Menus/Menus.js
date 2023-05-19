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
      "price": 300
    },
    {
      "id": 2,
      "img": p2,
      "name": "Chicken Lollypop",
      "price": 300
    },
    {
      "id": 3,
      "img": p3,
      "name": "Brugers",
      "price": 300
    },
    {
      "id": 4,
      "img": p4,
      "name": "Wings",
      "price": 300
    },
    {
      "id": 5,
      "img": p5,
      "name": "Strips",
      "price": 300
    },
    {
      "id": 6,
      "img": p6,
      "name": "Sides",
      "price": 300
    },
    {
      "id": 7,
      "img": p7,
      "name": "Dips",
      "price": 300
    }



  ]

  return (
    <div id="menu" className="container lg:pt-5 m-auto">
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
