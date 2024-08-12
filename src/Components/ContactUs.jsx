import React from "react";
import contactbg from "../Images/contactus-bg.webp";
import cuspbg from "../Images/cusp-contact.webp";
const ContactUs = () => {
  return (
    <div>
      <div className="bg-contact">
        <img src={contactbg} className="p-[3%] h-auto" alt="contact-bg" />
        <div className="absolute top-[20%] left-[10%] ">
          <h2 className="text-[48px] font-[600] text-white max-[1000px]:text-[30px] ">
            Get in touch with us
          </h2>
          <p className="text-[24px] font-[500] leading-[36px] mt-2 text-white max-[1000px]:text-[16px] max-[1000px]:leading-[20px]">
            Empowering communities with <br />
            Sustainable Solar Solutions
          </p>
        </div>
      </div>
      {/*--form---*/}
      <div className="p-[5%] drop-shadow-2xl bg-white">
        <div className="flex items-center justify-center h-full max-[1000px]:flex-col">
          <div className="w-1/2 max-[1000px]:w-full">
            <img src={cuspbg} className="w-full h-auto" alt="cuspbg" />
          </div>
          <div className="w-1/2 max-[1000px]:w-full">
            <div className="max-w-4xl mx-auto p-5">
              <form className="space-y-7">
                <div>
                  <label
                    htmlFor="fullName"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="w-full text-[16px] font-[500] text-[#A45D17] ad"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  />
                </div>
                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block w-full text-[16px] font-[500] text-[#A45D17] ad"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@mail.com"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block w-full text-[16px] font-[500] text-[#A45D17]"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="123-456-7890"
                      className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#A45D17]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows="4"
                    className="mt-1 block w-full px-3 py-4 border border-[#9A4F09] rounded-md shadow-sm focus:outline-none focus:ring-0 sm:text-sm placeholder-[#8E6034]"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#A45D17]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*---form close---*/}
    </div>
  );
};

export default ContactUs;
