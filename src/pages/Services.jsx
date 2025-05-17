import { ServicesLabel } from "../constants/ServicesConstant";

const Service = ({ serviceTitle, serviceDetail, language }) => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-start mb-12 text-secondary">
        {serviceTitle[language]}
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {serviceDetail.map((service, index) => (
          <div key={index} className="p-6 bg-primary rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              {service.title[language]}
            </h3>
            <p className="text-secondary mb-4">
              {service.description[language]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Services({ language }) {
  return (
    <>
      <div className="p-6">
        {ServicesLabel.map((service, index) => (
          <Service
            serviceTitle={service.Type}
            serviceDetail={service.List}
            language={language}
          />
        ))}
      </div>
    </>
  );
}
