import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard/Dashboard";
import Register from "pages/Auth/Register";
import Login from "pages/Auth/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <div className="container mx-auto">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
