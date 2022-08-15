import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { logout } from "firebase.js";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  }
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
        {user && (
          <button className="p-2 bg-green-600 text-white rounded-lg" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
