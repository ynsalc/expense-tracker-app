import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "firebase.js";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await register(userData.email, userData.password);
    if(response){
      navigate("/login");
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-box-color px-6 py-8 rounded shadow-md text-black w-96">
          <h1 className="mb-8 text-3xl text-center text-white">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="Full Name"
            value={userData.username}
            onChange={handleChange}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            value={userData.confirm_password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-full-layer text-white hover:bg-second-box-color focus:outline-none my-1 mt-5"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
