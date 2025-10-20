import { useState } from "react";
import TheaterBackground from "../assets/images/theater-background.jpg";
import { faqs } from "../constants/faqs";
import GetInTouchLink from "./GetInTouchLink";
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${TheaterBackground})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-backgroundSecondary/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-glassmorphism to-glassmorphism/80 backdrop-blur-md border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer Panel */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 md:px-8 ${openIndex === index ? 'pb-8 pt-2' : 'pb-6'}`}>
                  <p className="text-textSecondary leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-br from-glassmorphism to-glassmorphism/80 backdrop-blur-md border border-border rounded-xl p-6 md:p-8 inline-block">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-textSecondary mb-6 max-w-md mx-auto">
              Our team is here to help. Contact us for personalized assistance with your project.
            </p>
            <GetInTouchLink text="Get in touch"/>
          </div>
        </div>
      </div>
    </section>
  );
};
