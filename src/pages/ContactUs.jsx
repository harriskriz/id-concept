import { HeaderLabel, ContactList } from "../constants/ContactUsConstant";

const Contact = ({ icon, title, description, link, linkText, language}) => {
  return (
    <>
      <div className="p-6 bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-secondary">{title[language]}</h3>
        <p className="text-secondary mt-2">{description[language]}</p>
        <a
          href={link}
          className="text-blue-600 font-medium mt-2 hover:underline"
        >
          {linkText}
        </a>
      </div>
    </>
  );
};

const ContactSection = ({ language }) => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-8 text-center">
      <h2 className="text-4xl font-bold text-secondary">
        {HeaderLabel.ContactUs[language]}
      </h2>
      <p className="text-secondary mt-2">
        {HeaderLabel.ContactUsDescription[language]}
      </p>

      <div className="grid md:grid-cols-3 gap-12 mt-12">
        {ContactList.map((contact, index) => (
          <Contact key={index} icon={contact.icon} title={contact.title} description={contact.description} link={contact.link} linkText={contact.linkText} language={language}/>
        ))}
      </div>
    </section>
  );
};

export default function ContactUs({ language }) {
  return (
    <>
      <ContactSection language={language} />
    </>
  );
}
