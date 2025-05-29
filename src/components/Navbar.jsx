import React, { useState } from "react";

const NavLink = ({title, link}) => {
  return(
    <a className="text-primary hover:text-blue-600 cursor-pointer" href={link}>{title}</a>
  );
};

export default function Navbar() {
  // State to manage the current language
  const [language, setLanguage] = useState("en"); // Default to English

  // Function to toggle between languages
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex justify-center items-center w-1/8">
        <p className="text-xl font-bold text-blue-600">Logo</p>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center w-1/2 px-2 space-x-6">
        <NavLink title="Home" link="#"/>
        <NavLink title="Services" link="#"/>
        <NavLink title="Contact Us" link="#"/>
        <NavLink title="FAQ" link="#"/>
      </div>

      {/* Sliding Language Switcher */}
      <div className="flex justify-center items-center w-1/8">
        <div
          className={`relative w-20 h-10 rounded-full cursor-pointer shadow-md ${language === "en" ? "bg-blue-700" : "bg-red-700"}`}
          onClick={toggleLanguage}
        >
          <div
            className={`absolute top-1 ${
              language === "en" ? "left-1" : "right-1"
            } w-9 h-8 bg-white rounded-full transition-all duration-300 ease-in-out`}
          ></div>
          <div
            className={`absolute top-3 left-3 font-bold text-xs ${
              language === "en" ? "text-black" : "text-gray-500"
            }`}
          >
            {language === "en" ? "EN" : ""}
          </div>
          <div
            className={`absolute top-3 right-3 font-bold text-xs ${
              language === "id" ? "text-black" : "text-gray-500"
            }`}
          >
            {language === "id" ? "ID" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}