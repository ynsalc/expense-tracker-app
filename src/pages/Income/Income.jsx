import React from "react";
import Navbar from "components/Navbar/Navbar";

const Income = () => {
  return (
    <div className="rounded-lg ml-4">
      <Navbar />
      <div className="bg-full-layer w-full mt-5 rounded-lg p-4">
        <div>
          <label className="text-white">Add Income</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg"
            placeholder="Add Income..."
          />
        </div>
        <div className="mt-6">
          <label className="text-white">Add Income</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg"
            placeholder="Add Income..."
          />
        </div>
        <div className="mt-6">
          <label className="text-white">Add Income</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg"
            placeholder="Add Income..."
          />
        </div>
        <div className="mt-6">
          <label className="text-white">Add Income</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg"
            placeholder="Add Income..."
          />
        </div>
        <div className="mt-6">
          <button className="p-3 text-white bg-box-color rounded-lg">Add Income</button>
        </div>
      </div>
    </div>
  );
};

export default Income;
