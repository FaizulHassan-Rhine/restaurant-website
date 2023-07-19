import React, { useState } from "react";
import './menulist.css'

import p1 from '../../images/FryFrenzy/1.Coleslaw.jpg';
import p2 from '../../images/FryFrenzy/2.Dips.jpg';
import p3 from '../../images/FryFrenzy/3.Green Carnival Rice Bowl.jpg';
import p4 from '../../images/FryFrenzy/4.Hot Fries.jpg';
import p5 from '../../images/FryFrenzy/5.Hot Wedges.jpg';
import p6 from '../../images/FryFrenzy/6.Kashmiri Spice Burger.jpg';
import p7 from '../../images/FryFrenzy/7.Kashmiri Spice Fry.jpg';
import p8 from '../../images/FryFrenzy/8.Kashmiri Spice Lollipop.jpg';
import p9 from '../../images/FryFrenzy/9.Kashmiri Spice Strips.jpg';
import p10 from '../../images/FryFrenzy/10.Kashmiri Spice Wings.jpg';
import p11 from '../../images/FryFrenzy/11.OG Fries.jpg';
import p12 from '../../images/FryFrenzy/12.OG Wedges.jpg';
import p13 from '../../images/FryFrenzy/13.Parmaroma Fry.jpg';
import p14 from '../../images/FryFrenzy/14.Parmaroma Strips.jpg';
import p15 from '../../images/FryFrenzy/15.Scarlet Rice Bowl.jpg';
import p16 from '../../images/FryFrenzy/16.Signature Burger.jpg';
import p17 from '../../images/FryFrenzy/17.Signature Fry.jpg';
import p18 from '../../images/FryFrenzy/18.Signature Lollipop.jpg';
import p19 from '../../images/FryFrenzy/19.Signature Strips.jpg';
import p20 from '../../images/FryFrenzy/20.Signature Wings.jpg';
import p21 from '../../images/FryFrenzy/21.Tangy Tingle Wings.jpg';
import p22 from '../../images/FryFrenzy/22.TangyTingle Burger.jpg';
import p23 from '../../images/FryFrenzy/23.TangyTingle Fry.jpg';
import p24 from '../../images/FryFrenzy/24.TangyTingle Lollipop.jpg';
import p25 from '../../images/FryFrenzy/25.TangyTingle Strips.jpg';



const MenuList = () => {




    const [getImage, setImage] = useState();
    const [getClose, setClose] = useState("hidden");
    const [getDetails, setDetails] = useState();

    const HandleImage = (img, details) => {
        setImage(img);
        setClose("block");
        setDetails(details);
    };

    const HandleClose = () => {
        setClose("hidden");
    };







    const data = [


        {
            "id": 1,
            "image_url": p1,
            "name": "Coleslaw",
            "price": 85
        },

        {
            "id": 2,
            "image_url": p2,
            "name": "Dips",
            "price": 45
        },

        {
            "id": 3,
            "image_url": p3,
            "name": "Green Carnival Rice Bowl",
            "price": 279
        },

        {
            "id": 4,
            "image_url": p4,
            "name": "Hot Fries",
            "price": 145
        },

        {
            "id": 5,
            "image_url": p5,
            "name": "Hot Wedges",
            "price": 155
        },

        {
            "id": 6,
            "image_url": p6,
            "name": "Kashmiri Spice Burger",
            "price": 339
        },

        {
            "id": 7,
            "image_url": p7,
            "name": "Kashmiri Spice Fry",
            "price": 149
        },

        {
            "id": 8,
            "image_url": p8,
            "name": "Kashmiri Spice Lollipop",
            "price": 239
        },

        {
            "id": 9,
            "image_url": p9,
            "name": "Kashmiri Spice Strips",
            "price": 309
        },

        {
            "id": 10,
            "image_url": p10,
            "name": "Kashmiri Spice Wings",
            "price": 239
        },

        {
            "id": 11,
            "image_url": p11,
            "name": "OG Fries",
            "price": 129
        },

        {
            "id": 12,
            "image_url": p12,
            "name": "OG Wedges",
            "price": 139
        },

        {
            "id": 13,
            "image_url": p13,
            "name": "Parmaroma Fry",
            "price": 149
        },

        {
            "id": 14,
            "image_url": p14,
            "name": "Parmaroma Strips",
            "price": 309
        },

        {
            "id": 15,
            "image_url": p15,
            "name": "Scarlet Rice Bowl",
            "price": 299
        },

        {
            "id": 16,
            "image_url": p16,
            "name": "Signature Burger",
            "price": 299
        },

        {
            "id": 17,
            "image_url": p17,
            "name": "Signature Fry",
            "price": 139
        },

        {
            "id": 18,
            "image_url": p18,
            "name": "Signature Lollipop",
            "price": 199
        },

        {
            "id": 19,
            "image_url": p19,
            "name": "Signature Strips",
            "price": 289
        },

        {
            "id": 20,
            "image_url": p20,
            "name": "Signature Wings",
            "price": 199
        },

        {
            "id": 21,
            "image_url": p21,
            "name": "Tangy Tingle Wings",
            "price": 239
        },

        {
            "id": 22,
            "image_url": p22,
            "name": "TangyTingle Burger",
            "price": 339
        },

        {
            "id": 23,
            "image_url": p23,
            "name": "TangyTingle Fry",
            "price": 149
        },

        {
            "id": 24,
            "image_url": p24,
            "name": "TangyTingle Lollipop",
            "price": 239
        },
        {
            "id": 25,
            "image_url": p25,
            "name": "TangyTingle Strips",
            "price": 309
        }


    ]



    return (
        <div className="container lg:pt-5 mx-auto py-24">
            <h2 className="text-center font-bold text-3xl my-16 text-orange-400">
                {" "}
                Our Best Seller
            </h2>
            <div className={`grid md:grid md:grid-cols-2 lg:grid-cols-4 mx-5 mb-12 justify-items-center gap-y-12 md:gap-y-10 `}>
                {data.map((data, index) => (
                    <div onClick={() => HandleImage(data.image_url, data.name)}>
                        {console.log(data)}
                        <div className="card card-compact w-64 md:w-56 lg:w-52 xl:w-64 hover:shadow-xl transform transition duration-500 hover:scale-105 bg-base-100 shadow-xl">
                            <figure>
                                <img className="h-44 w-full p-1   rounded-lg" src={data.image_url} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className=" text-base font-bold">{data.name}</h2>
                                <p className="text-lg font-bold text-red-700" >Starts From ৳ {data.price}</p>
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

            <div
                id="imgPopupWrap"
                className={"fixed top-0 z-10 left-0 w-full h-full  " + getClose}
            >
                <div onClick={HandleClose} className="bgshadow"></div>
                <div className="product-container flex gap-8">
                    <img className="w-[440px]" src={getImage} />
                    <p className="text-white w-full self-center text-justify  mb-2">
                        {getDetails}
                    </p>
                </div>
                <span onClick={HandleClose} className="closeBtn cursor-pointer">
                    X
                </span>
            </div>

        </div>
    );
};

export default MenuList;



