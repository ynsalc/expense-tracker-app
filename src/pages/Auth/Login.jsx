import React from "react";

const Login = () => {
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
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-full-layer text-white hover:bg-second-box-color focus:outline-none my-1 mt-5"
          >
            Sign In to Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
