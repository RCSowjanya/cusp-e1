import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const JoinUs = () => {
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
        <div className="px-[5%] bg-white shadow-lg  max-w-3xl h-full mx-auto py-[2%]">
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6">
            {/* Company Name */}
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Company Name <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Company Name"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575]  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>

            {/* Flex items for Entity Type and Total Entities */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="entity-type"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-3"
                >
                  Business Role <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="empanelled-state"
                    className="ad p-3 text-[16px] block w-full cursor-pointer placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    style={{ color: "#757575" }}
                  >
                    <option value="" disabled hidden>
                      Business Role
                    </option>
                    <option value="state1">OEM</option>
                    <option value="state2">OEM & Installer</option>
                    <option value="state3">Installer</option>
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
              <div className="flex-1">
                <label
                  htmlFor="total-entities"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-3"
                >
                  Type Of Entity
                  <span className="text-[#004A9C]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="empanelled-state"
                    className="ad p-3 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    style={{ color: "#757575" }}
                  >
                    <option value="" disabled hidden>
                      Select Entity Type
                    </option>
                    <option value="state1">ProprietorShip</option>
                    <option value="state2">Unregistered PartnerShip</option>
                    <option value="state3">LLP</option>
                    <option value="state3">Incorporated Entity</option>

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
            </div>

            {/* Flex items for GST No, PAN No, TAN No */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="solar-installations"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  Total Years In Solar Installations
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="solar-installations"
                  type="Number"
                  placeholder="Enter Total Years"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="gst-no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  GST No
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="gst-no"
                  type="text"
                  placeholder="Enter GST No"
                  className="ad mt-1 p-3 block w-full   border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="pan-no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  PAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="pan-no"
                  type="text"
                  placeholder="Enter PAN No"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="tan-no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  TAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="tan-no"
                  type="text"
                  placeholder="Enter TAN No"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/* Register Office Address */}
            <div>
              <label
                htmlFor="register-office-address"
                className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
              >
                Registered Office Address
              </label>
              <input
                id="register-office-address"
                type="text"
                placeholder="Enter Building Name /Flat No"
                className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>

            {/* Flex items for Street, City, Pincode, State */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="street"
                  type="text"
                  placeholder="Enter Street"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="ad mt-1 p-3 block w-full   border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="pincode"
                  type="text"
                  placeholder="Enter Pincode"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  id="state"
                  type="text"
                  placeholder="Enter State"
                  className="ad mt-1 p-3 block w-full  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/* Next Button */}
            <div>
              <Link to="/joinusform">
                <button className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm">
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
