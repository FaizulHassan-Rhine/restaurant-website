import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div id="contact">
      <footer className="footer p-10 bg-black text-white grid lg:grid-cols-4">
        <div>
          <figure>
            <img className="h-20 w-20 -mt-1 ml-12" src={logo} alt="" />
          </figure>
          <p>
            <span className="font-bold text-orange-400 text-xl">Hotline</span>{" "}
            +91 657 3460
          </p>
          <p>2nd Floor, Navana DH Tower, Plot:06, Panthapath, Dhaka 1215</p>
          <p>Fry Frenzy</p>
        </div>
        <div>
          <span className="text-lg font-bold text-orange-400">
            Openig hours
          </span>
          <p>Mon.........................9:00 -- 23:00</p>
          <p>Tue............................9:00 -- 23:00</p>
          <p>Wed.........................9:00 -- 23:00</p>
          <p>Thu...........................9:00 -- 23:00</p>
          <p>Fri..............................9:00 -- 23:00</p>
          <p>Sat............................9:00 -- 23:00</p>
          <p>Sun...........................Close</p>
        </div>
        <div>
          <span className="text-lg font-bold text-orange-400 ">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="text-lg font-bold text-orange-400">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-black text-white  justify-center  border-base-300">
        <div className="items-center grid-flow-col">
          <p className="text-center">
            <span className="text-orange-400">Fry Frenzy</span> <br />
            Providing Delicious Food since 2023
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
