import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ menu }) => {
  const { id, name, img, price } = menu;

  const [cartCount, setCartCount] = useState(0);

  const handleAddMenu = (menu) => {
    console.log(menu);
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    let menuExist = cartItems.find((item) => item.id === menu.id);

    if (menuExist) {
      cartItems = cartItems.map((item) =>
        item.id === menu.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              countPrice: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      cartItems = [
        ...cartItems,
        {
          ...menu,
          quantity: 1,
          countPrice: menu.price,
          totalPrice: menu.price,
        },
      ];
    }

    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartCount(cartCount + 1);
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
            <Link to="/cart">
              <button
                onClick={() => handleAddMenu(menu)}
                className="bg-orange-400 hover:bg-lime-400  text-white font-semibold p-2 rounded-btn"
              >
                {" "}
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
