import { HomeLabel } from "../constants/HomeConstant";

const CustomTag = ({ name }) => (
  <p className="bg-gray-100 text-gray-700 w-24 py-2 text-center rounded-lg shadow-sm select-none">
    {name}
  </p>
);

const Section = ({
  title,
  children,
  center = false,
}) => (
  <div className="bg-white shadow-md rounded-lg p-6 my-6">
    <h2 className={`text-2xl font-semibold mb-4 ${center ? "text-center" : ""}`}>
      {title}
    </h2>
    {children}
  </div>
);

const CompanyProfile = ({ language }) => (
  <div className="text-center bg-gradient-to-b from-gray-100 to-white py-10 rounded-lg shadow-md">
    <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
      {HomeLabel.CompanyName[language]}
    </h1>
    <p className="text-gray-600 text-lg px-4 max-w-2xl mx-auto">
      {HomeLabel.CompanyDescription[language]}
    </p>
    <div className="flex justify-center mt-6 px-4">
    <div className="flex justify-around w-1/3">
      {["Concept", "Design", "Build"].map((tag) => (
        <CustomTag key={tag} name={tag} />
      ))}
    </div>
    </div>
  </div>
);

const History = ({ language }) => (
  <Section title={HomeLabel.History.title[language]}>
    {HomeLabel.History.Paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph.description[language]}
      </p>
    ))}
  </Section>
);

const CompetitiveAdvantages = ({ language }) => (
  <Section title={HomeLabel.CompetitiveAdvantages.title[language]}>
    {HomeLabel.CompetitiveAdvantages.Paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph.description[language]}
      </p>
    ))}
  </Section>
);

const Vision = ({ language }) => (
  <Section title={HomeLabel.Vision.title[language]} center>
    <p className="text-lg text-gray-700">{HomeLabel.Vision.description[language]}</p>
  </Section>
);

const Mission = ({ language }) => (
  <Section title={HomeLabel.Mission.title[language]} center>
    <div className="flex flex-col justify-start md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg shadow-sm">
      {HomeLabel.Mission.Points.map((point, index) => (
        <p key={index} className="text-gray-700 text-lg">
          {point.description[language]}
        </p>
      ))}
    </div>
  </Section>
);

export default function Home({ language }) {
  return (
    <div className="container mx-auto p-6">
      <CompanyProfile language={language} />
      <History language={language} />
      <CompetitiveAdvantages language={language} />
      <Vision language={language} />
      <Mission language={language} />
    </div>
  );
}
