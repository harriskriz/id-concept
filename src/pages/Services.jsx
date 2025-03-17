import { ServicesLabel } from "../constants/ServicesConstant";

const Service = ({ serviceTitle, serviceDetail, language }) => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-start mb-12 text-gray-800">
        {serviceTitle[language]}
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {serviceDetail.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {service.title[language]}
            </h3>
            <p className="text-gray-600 mb-4">
              {service.description[language]}
            </p>
            {/* <a href="#" className="text-blue-600 font-semibold flex items-center hover:underline">Read More &rarr;</a> */}
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
