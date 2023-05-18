import React from "react";
import logo from "../../images/logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Footer = () => {
  return (
    <div className=" bg-black">
      <footer className="footer container mx-auto lg:justify-items-center p-10 text-white grid lg:grid-cols-4">
        <div className="">
          <figure>
            <img className="h-20 w-16 -mt-1 ml-12" src={logo} alt="" />
          </figure>
          <p>
            <span className="font-bold text-orange-400 text-xl">Hotline</span>{" "}
            01327-364140
          </p>
          <p className="flex gap-2"><MdEmail className="text-white text-xl" />eat@fryfrenzy.com</p>
          <p>2nd Floor, Navana DH Tower, Plot:06, Panthapath, Dhaka 1215</p>
          <p>Fry Frenzy</p>
          <div className="flex text-orange-400 gap-1">
            <a href="https://www.facebook.com/fryfrenzyofficial" target="_blank" className="link link-hover">
              <FaFacebookSquare className="h-10 w-10 lg:h-6 lg:w-6" />
            </a>
            <a href="https://www.instagram.com/fryfrenzyofficial/" target="_blank" className="link link-hover">
              <FaInstagramSquare className="h-6 w-6" />
            </a>
            <a href="https://wa.me/+8801327364140" target="_blank" className="link link-hover">
              <FaWhatsappSquare className="h-6 w-6" />
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
          <Link to="/contact-us" className="link link-hover">Contact</Link>
          {/* <AnchorLink href="#blog">
            <a className="link link-hover">Blog</a>
          </AnchorLink> */}
          <a className="link link-hover">Location</a>
        </div>
        <div>
          <span className="text-lg font-bold text-orange-400">Legal</span>
          <Link to="/terms-condition" className="link link-hover">Terms of use</Link>
          <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
          <Link to="/cookie" className="link link-hover">Cookie policy</Link>

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
