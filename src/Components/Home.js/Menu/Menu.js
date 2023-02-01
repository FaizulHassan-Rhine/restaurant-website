import React from "react";
// import { HiShoppingCart } from "react-icons/hi";

const Menu = (props) => {
  const { id, name, img, price } = props.menu;
  return (
    <div>
      <div className="card card-compact w-60   bg-base-100 shadow-xl">
        <figure>
          <img className="h-48 w-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="bg-orange-400  text-white font-semibold p-2 rounded-btn">
              {" "}
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
