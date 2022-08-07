import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Sidebar from "components/Sidebar/Sidebar";
import Income from "pages/Income/Income";

const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="bg-box-color w-full pr-5 pt-5 pb-5 pl-1 rounded-b-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
