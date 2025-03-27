// src/components/Header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BaseSetting } from "../constants/BaseConstant";
import logo from "../assets/id-concept-logo.jpg";
import logoBackground from "../assets/logo-background.png";
import '../components/Header.css'

const CustomLink = ({ title, url }) => {
  return (
    <Link
      to={url}
      className={`hover:text-blue-600 cursor-pointer ${
        useLocation().pathname == url ? "text-blue-600" : "text-secondary"
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
  const [useMultipleLanguage, setuseMultipleLanguage] = useState(
    BaseSetting.MultipleLanguageControl
  );
  return (
    <header className="bg-primary shadow-md">
      <div className="container p-2 flex justify-between items-center">
        <div className="flex flex- items-center w-1/3 justify-center">
          <img src={logo} width={60} height={60}/>
        </div>

        <nav className="flex justify-between items-center w-1/2 xl:w-1/3 px-2 space-x-6">
          <CustomLink title="Home" url="/" />
          <CustomLink title="Services" url="/services" />
          <CustomLink title="Contact Us" url="/contact-us" />
          <CustomLink title="FAQ" url="/faq" />
        </nav>

        {useMultipleLanguage === true ? 
          <div
            className="flex justify-center items-center w-1/4"
          >
            <LanguageSwitcer
              toggleLanguage={toggleLanguage}
              language={language}
            />
          </div> :
          <div
          className="flex justify-center items-center w-1/8">
        </div>
        }
      </div>
    </header>
  );
}
