import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "firebase.js";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await login(userData.email, userData.password);
    if (response) {
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-box-color px-6 py-8 rounded shadow-md text-black w-96">
          <h1 className="mb-8 text-3xl text-center text-white">Sign In</h1>
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

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-full-layer text-white hover:bg-second-box-color focus:outline-none my-1 mt-5"
            onClick={handleSubmit}
          >
            Sign In to Account
          </button>
          <p className="text-white text-sm text-center mt-3">
            If you haven't registered
          </p>
          <p className="text-center py-3 rounded bg-full-layer text-white hover:bg-second-box-color focus:outline-none my-1 mt-5">
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
