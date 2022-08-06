import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <FaSearch size={20} color="white" />
      </div>
      <div className="flex items-center">
        <IoNotificationsSharp size={25} color="white" />
        <RiMessage2Fill size={25} color="white" className="ml-4" />
        <img
          className="ml-4 w-10 h-10 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
