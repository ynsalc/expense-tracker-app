import React from "react";
import DoughnutChart from "components/DoughnutChart/DoughnutChart";
import LineChart from "components/LineChart/LineChart";
import TotalCountBox from "components/TotalCountBox/TotalCountBox";
import Sidebar from "components/Sidebar/Sidebar";
import Navbar from "components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto bg-box-color p-5 rounded-b-lg">
      <div className="flex">
        <Sidebar />
        <div className="w-4/5 rounded-lg ml-4">
          <Navbar />
          <div className="flex justify-between mt-5">
            <TotalCountBox
              title="Total Income"
              count="12500"
              ml={false}
              color="green"
            />
            <TotalCountBox
              title="Total Expense"
              count="3500"
              ml={true}
              color="red"
            />
            <TotalCountBox
              title="Balance"
              count="9000"
              ml={true}
              color="blue"
            />
          </div>
          <div className="flex mt-5">
            <div className="bg-full-layer p-4 text-white rounded-lg">
              <DoughnutChart />
            </div>
            <div className="bg-full-layer justify-end p-4 text-white rounded-lg ml-4 w-full">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
