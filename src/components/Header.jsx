// src/components/Header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CustomLink = ({ title, url }) => {
  return (
    <Link
      to={url}
      className={`hover:text-blue-600 cursor-pointer ${
        useLocation().pathname == url ? "text-blue-600" : "text-gray-700"
      }`}
    >
      {title}
    </Link>
  );
};

const LanguageSwitcer = ({ toggleLanguage, language }) => {
  return (
    <div
      className={`relative w-20 h-10 rounded-full cursor-pointer shadow-md ${
        language === "en" ? "bg-blue-700" : "bg-red-700"
      }`}
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
  );
};

export default function Header({ toggleLanguage, language }) {
  return (
    <header className="bg-white shadow-md">
      <div className="container p-4 flex justify-between items-center">
        <div className="flex items-center w-1/8 justify-center">
          <p className="text-xl font-bold text-blue-600">Logo</p>
        </div>

        <nav className="flex justify-between items-center w-1/3 px-2 space-x-6">
          <CustomLink title="Home" url="/" />
          <CustomLink title="Services" url="/services" />
          <CustomLink title="Contact Us" url="/contact-us" />
          <CustomLink title="FAQ" url="/faq" />
        </nav>

        <div className="flex justify-center items-center w-1/8">
          <LanguageSwitcer toggleLanguage={toggleLanguage} language={language} />
        </div>

      </div>
    </header>
  );
}
