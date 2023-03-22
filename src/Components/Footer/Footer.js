import React from "react";
import logo from "../../images/logo.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className=" bg-black">
      <footer className="footer container mx-auto lg:justify-items-center p-10 text-white grid lg:grid-cols-4">
        <div className="">
          <figure>
            <img className="h-20 w-16 -mt-1 ml-12" src={logo} alt="" />
          </figure>
          <p>
            <span className="font-bold text-orange-400 text-xl">Hotline</span>{" "}
            +91 657 3460
          </p>
          <p>2nd Floor, Navana DH Tower, Plot:06, Panthapath, Dhaka 1215</p>
          <p>Fry Frenzy</p>
          <div className="flex text-orange-400 gap-1">
            <a className="link link-hover">
              <FaFacebookSquare className="h-6 w-6" />
            </a>
            <a className="link link-hover">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a className="link link-hover">
              <FaInstagramSquare className="h-6 w-6" />
            </a>
            <a className="link link-hover">
              <FaTwitterSquare className="h-6 w-6" />
            </a>
          </div>
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
          <a className="link link-hover">Location</a>
        </div>
        <div>
          <span className="text-lg font-bold text-orange-400">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Data Management </a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-black text-white  justify-center ">
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
