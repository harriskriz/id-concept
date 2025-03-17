import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HeaderLabel, Faqs } from "../constants/FaqConstant";

export default function FAQPage({ language }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-secondary">
        {HeaderLabel.Title[language]}
      </h2>
      <p className="text-center text-gray-600 mb-6 text-secondary">
        {HeaderLabel.Description[language]}
      </p>
      <div className="space-y-4">
      {Faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md transition-all"
          >
            <button
              className="flex items-center justify-between w-full p-4 text-left text-lg font-medium text-secondary"
              onClick={() => toggleFAQ(index)}
            >
              {faq.Question[language]}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-secondary">{faq.Answer[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
