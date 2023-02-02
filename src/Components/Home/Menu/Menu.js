import React, { useState } from "react";
import Cart from "../../Cart/Cart";

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
      <div className="card card-compact w-60   bg-base-100 shadow-xl">
        <figure>
          <img className="h-48 w-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>${price}</p>
          <div className="card-actions justify-end">
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
