// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";

export default function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header toggleLanguage={toggleLanguage} language={language} />

        <main className="flex-grow bg-primary">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route path="/contact-us" element={<ContactUs language={language} />} />
            <Route path="/faq" element={<Faq language={language} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}