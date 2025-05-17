// src/components/Header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BaseSetting } from "../constants/BaseConstant";
import logo from "../assets/id-concept-logo.jpg";
import { Menu } from "lucide-react";

const CustomLink = ({ title, url, currentPath, menuOpen, onClick }) => {
  return (
    <Link
      to={url}
      className={`text-base md:text-xl font-medium px-4 py-2 rounded-md hover:text-blue-600 transition ${
        currentPath === url ? "text-blue-600" : "text-secondary"
      }`}
    >
      {title}
    </Link>
  );
};

const LanguageSwitcher = ({ toggleLanguage, language }) => {
  return (
    <div
      className={`relative w-16 h-8 md:w-20 md:h-10 rounded-full cursor-pointer shadow-inner ${
        language === "en" ? "bg-blue-700" : "bg-red-700"
      }`}
      onClick={toggleLanguage}
    >
      <div
        className={`absolute top-1 ${
          language === "en" ? "left-1" : "right-1"
        } w-6 h-6 md:w-8 md:h-8 bg-white rounded-full transition-all duration-300`}
      ></div>
      <div
        className={`absolute top-[6px] left-2 text-xs md:text-sm font-semibold ${
          language === "en" ? "text-black" : "text-gray-400"
        }`}
      >
        EN
      </div>
      <div
        className={`absolute top-[6px] right-2 text-xs md:text-sm font-semibold ${
          language === "id" ? "text-black" : "text-gray-400"
        }`}
      >
        ID
      </div>
    </div>
  );
};

export default function Header({ toggleLanguage, language }) {
  const [useMultipleLanguage] = useState(BaseSetting.MultipleLanguageControl);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-primary shadow-md w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <Menu size={28} color="white"/>
          </button>

          {/* <div className="md:hidden ml-auto">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </div> */}
        </div>

        <nav className="hidden md:flex gap-4 items-center ml-auto md:justify-around md:w-full">
          <CustomLink title="Home" url="/" currentPath={location.pathname} menuOpen={menuOpen} onClick={toggleMenu} />
          <CustomLink title="Services" url="/services" currentPath={location.pathname} />
          <CustomLink title="Contact Us" url="/contact-us" currentPath={location.pathname} />
          <CustomLink title="FAQ" url="/faq" currentPath={location.pathname} />
          {useMultipleLanguage && (
            <LanguageSwitcher toggleLanguage={toggleLanguage} language={language} />
          )}
        </nav>

        <div className="flex items-center md:w-1/3 w-1/4 justify-center opacity-50">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm" onClick={toggleMenu}>
        <div
          className="absolute top-0 left-0 right-0 bg-[--color-primary] shadow-md animate-slideDown"
        >
          <div className="flex flex-col px-4 py-4 space-y-4">
            <CustomLink title="Home" url="/" currentPath={location.pathname} />
            <CustomLink title="Services" url="/services" currentPath={location.pathname} />
            <CustomLink title="Contact Us" url="/contact-us" currentPath={location.pathname} />
            <CustomLink title="FAQ" url="/faq" currentPath={location.pathname} />
            {useMultipleLanguage && (
              <div className="pt-2">
                <LanguageSwitcher toggleLanguage={toggleLanguage} language={language} />
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </header>
  );
}
