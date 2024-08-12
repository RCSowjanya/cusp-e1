import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const JoinusForm = () => {
  const [isEmpanelled, setIsEmpanelled] = useState(false);

  const handleToggle = () => {
    setIsEmpanelled(!isEmpanelled);
  };
  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full ">
        <div className="aboutbg flex items-center">
          <h2 className="text-4xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Join Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*---form---*/}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[3%] bg-white shadow-lg  max-w-3xl h-full mx-auto py-[2%]">
          <Link to="/JoinUs">
            <button className="py-2 px-4 flex gap-2 text-[#0BB68D] text-[16px] font-[500]">
              <FiArrowLeftCircle className="mt-1" />
              Back
            </button>
          </Link>
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6">
            <div className="flex items-center  space-x-1">
              <span className="text-[14px] font-semibold text-[#004A9C] mr-7">
                Empanelled with Electricity Board
                <span className="text-[#004A9C]">*</span>
              </span>
              <div
                onClick={handleToggle}
                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                  isEmpanelled ? "bg-[#0BB68D]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full p-0.5 shadow-md transform ${
                    isEmpanelled ? "translate-x-6" : ""
                  } transition-transform duration-300`}
                />
              </div>
              <span
                className={`text-[14px] font-semibold ${
                  isEmpanelled ? "text-[#0BB68D]" : "text-gray-400"
                }`}
              >
                {isEmpanelled ? "Yes" : "No"}
              </span>
            </div>
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Name Of Electricity Boards Empanelled With{" "}
                <span className="text-[#004A9C]">*</span>
              </label>
              <div className="relative">
                <select
                  id="empanelled-state"
                  className="ad p-3 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">
                    Empanelled boards (multi select drop-down)
                  </option>
                  <option value="state1">ProprietorShip</option>
                  <option value="state2">Unregistered PartnerShip</option>
                  <option value="state3">LLP</option>
                  <option value="state4">Incorporated Entity</option>
                  {/* Add more options as needed */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <MdOutlineKeyboardArrowDown
                    size={24}
                    className="text-[#757575]"
                  />
                </div>
              </div>
            </div>
            {/* Dropdown Fields in Flex */}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              {/* Empanelled with Capacity*/}
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="ad company-name"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Combined Capacity Of total installations done till date
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="solar-installations"
                  type="Number"
                  placeholder="Enter Combined Capacity  KW"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>

              {/*  Installation capacity*/}
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="ad company-name"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Installation capacity of the largest project worked on
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="solar-installations"
                  type="Number"
                  placeholder="Enter Installation Capacity  KW"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            {/*----List of products----*/}
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                List of product brands <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Brand1,Brand2,Brand3"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575]  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Geographical Regions
                <span className="text-[#004A9C]">*</span>
              </label>
              <div className="relative">
                <select
                  id="empanelled-state"
                  className="ad p-3 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">Select State (multi-select DD)</option>
                  <option value="state1">ProprietorShip</option>
                  <option value="state2">Unregistered PartnerShip</option>
                  <option value="state3">LLP</option>
                  <option value="state4">Incorporated Entity</option>
                  {/* Add more options as needed */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <MdOutlineKeyboardArrowDown
                    size={24}
                    className="text-[#757575]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              {/* Empanelled with Capacity*/}
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="ad company-name"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total No.of Employees
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="total-employees"
                  type="Number"
                  placeholder="Enter Total Employees"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>

              {/*  Installation capacity*/}
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="ad company-name"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total No.of Installation Crews
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="installations"
                  type="Number"
                  placeholder="Enter total Installation Crews"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/*---reference detailes----*/}
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Reference Site Details
                <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="details"
                type="text"
                placeholder="Reference Site Details"
                className="ad  p-3 block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>

            {/* submit Button */}
            <div className="flex gap-5">
              <div className="w-1/2 max-[600px]:w-full">
                <Link to="/">
                  <button className="px-4 py-3 border border-[#0BB68D] text-[#0BB68D] w-full rounded-md shadow-sm  focus:outline-none ">
                    Previous
                  </button>
                </Link>
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <Link to="/JoinUsUploads">
                  <button className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm">
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </form>
          {/*---form---*/}
        </div>
      </div>
    </div>
  );
};

export default JoinusForm;
