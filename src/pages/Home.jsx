import { HomeLabel } from "../constants/HomeConstant";

const CustomTag = ({ name }) => (
  <p className="bg-secondary-button text-secondary w-24 py-2 text-center rounded-lg shadow-sm select-none">
    {name}
  </p>
);

const Section = ({
  title,
  children,
  center = false,
}) => (
  <div className="shadow-md rounded-lg p-6 my-6">
    <h2 className={`text-2xl font-semibold mb-4 text-secondary ${center ? "text-center" : ""}`}>
      {title}
    </h2>
    {children}
  </div>
);

const CompanyProfile = ({ language }) => (
  <div className="text-center py-10 rounded-lg shadow-md">
    <h1 className="text-5xl font-extrabold mb-4 text-secondary">
      {HomeLabel.CompanyName[language]}
    </h1>
    <p className="text-secondary text-lg px-4 max-w-2xl mx-auto">
      {HomeLabel.CompanyDescription[language]}
    </p>
    <div className="flex justify-center mt-6 px-4">
    <div className="flex justify-around w-full xl:w-1/3">
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
      <p key={index} className="mb-4 text-secondary bg-primary leading-relaxed">
        {paragraph.description[language]}
      </p>
    ))}
  </Section>
);

const CompetitiveAdvantages = ({ language }) => (
  <Section title={HomeLabel.CompetitiveAdvantages.title[language]}>
    {HomeLabel.CompetitiveAdvantages.Paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-4 text-secondary leading-relaxed">
        {paragraph.description[language]}
      </p>
    ))}
  </Section>
);

const Vision = ({ language }) => (
  <Section title={HomeLabel.Vision.title[language]} center>
    <p className="text-lg text-secondary">{HomeLabel.Vision.description[language]}</p>
  </Section>
);

const Mission = ({ language }) => (
  <Section title={HomeLabel.Mission.title[language]} center>
    <div className="flex flex-col justify-start md:grid-cols-2 gap-4 p-6 rounded-lg shadow-sm">
      {HomeLabel.Mission.Points.map((point, index) => (
        <p key={index} className="text-secondary text-lg">
          {point.description[language]}
        </p>
      ))}
    </div>
  </Section>
);

export default function Home({ language }) {
  return (
    <div className="container mx-auto p-6 bg-[url(assets/logo-background.png)]">
      <CompanyProfile language={language} />
      <History language={language} />
      <CompetitiveAdvantages language={language} />
      <Vision language={language} />
      <Mission language={language} />
    </div>
  );
}
