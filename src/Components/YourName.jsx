import React from "react";
import { FaRegUser } from "react-icons/fa";
const YourName = ({ formData, handleChange }) => {
  return (
    <div className="">
      <h2 className="text-[#004A9C] ad font-[600] text-[16px] text-center pb-6">
        Your Name
      </h2>
      <div className="flex items-center w-full border quote  rounded-md bg-[#FFFDF9]">
        <div className="border-r border-r-[#8A6112] p-2">
          <FaRegUser className="text-[#8A6112] ml-3" />
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=" px-4 py-5 text-[16px] font-[400]  rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
          placeholder="Please Enter your name"
          required
        />
      </div>
    </div>
  );
};

export default YourName;
