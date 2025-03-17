import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language === "id" ? "id" : "en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "id" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center gap-2 p-2">
      <span>🇬🇧</span>
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={lang === "id"}
          onChange={toggleLanguage}
        />
        <div className="w-12 h-6 bg-gray-300 rounded-full p-1 transition">
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
              lang === "id" ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
      <span>🇮🇩</span>
    </div>
  );
}
