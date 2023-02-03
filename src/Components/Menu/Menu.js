import React, { useState } from "react";

const Menu = ({ menu }) => {
  const { name, img, price } = menu;

  const [cartItems, setCartItems] = useState([]);

  const HandleAddMenu = (menu) => {
    console.log("add", menu);
    const MenuExist = cartItems.find((item) => item.id === menu.id);
    if (MenuExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === menu.id
            ? {
                ...MenuExist,
                quantity: MenuExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...menu, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className="card card-compact w-60 hover:shadow-xl transform transition duration-500 hover:scale-105 bg-base-100 shadow-xl">
        <figure>
          <img className="h-48 w-52  rounded-md" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-lg font-bold text-red-700">${price}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => HandleAddMenu(menu)}
              className="bg-orange-400 hover:bg-lime-400  text-white font-semibold p-2 rounded-btn"
            >
              {" "}
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Menu;
