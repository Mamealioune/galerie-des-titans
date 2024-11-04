import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="../images/pngegg (1).png"
          alt="logo"
          className="absolute md:w-36 w-16 left-4 top-2"
        />
        <a href="/">
          {" "}
          <div className=" fixed left-64 top-[-14px] bg-white h-16 w-12 rounded-b-lg z-40 hover:bg-blue-700 hover:text-w ease-in-out duration-300">
            <button className="absolute top-6 left-2 text-blue-700 ">
              <IoHomeOutline title="Aller à l'accueil" className="w-8 h-8 hover:text-white ease-in-out duration-300" />
            </button>
          </div>
        </a>
        <div className=" fixed right-24 top-[-14px] bg-white h-16 w-12 rounded-b-lg z-40">
          <button className="absolute top-6 left-2 text-blue-700 ">
            <FiLinkedin className="w-8 h-8 " />
          </button>
        </div>
        <div className=" fixed right-44 top-[-14px] bg-white h-16 w-12 rounded-b-lg z-40">
          <button className="absolute top-6 left-2 text-sky-500">
            <FaFacebook className="w-8 h-8 fill-blue-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
