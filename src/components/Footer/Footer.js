import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-secondary sm:p-6 dark:bg-gray-900 text-white">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={require("../../assets/images/Logo/Logopeworld.png")}
              className="h-8 mr-3"
              alt="FlowBite Logo"
            />
          </a>
          <p className="w-[18rem] text-[1rem] pt-5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between ">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Peworld™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <div>Telpon</div>
          <div>Email</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
