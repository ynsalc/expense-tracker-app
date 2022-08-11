import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsArrowLeft, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const location = useLocation();
  const { pathname } = location;
  const homeControl = pathname === "/" ? true : false;
  return (
    <div className="flex justify-between items-center">
      {!homeControl ? (
        <div className="flex text-white items-center">
          <BsArrowLeft size={20} color="white" />
          <span className="ml-2">Go to back</span>
        </div>
      ) : (
        <div className="flex text-white">
          <BsSearch size={20} color="white" />
        </div>
      )}
      <div className="flex items-center">
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
