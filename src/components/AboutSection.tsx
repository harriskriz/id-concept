import OfficeBackground from "../assets/images/office-background.jpg";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${OfficeBackground})`,
      }}
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-backgroundSecondary/90 via-backgroundSecondary/80 to-backgroundSecondary/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">ID Concept</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            Discover our expertise in creating acoustically refined, serene environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-textSecondary">
              At <span className="text-accent font-medium">ID Concept</span>, we specialize in creating acoustically refined, serene environments that combine luxury with tranquility. Our expertise transforms spaces into sanctuaries of unparalleled peace and sophistication.
            </p>

            <p className="text-textSecondary">
              We focus on eliminating disruptive electromagnetic noise while delivering superior acoustics and seamless audio-visual integration. From home theaters and music studios to corporate boardrooms, each project is crafted with precision and care.
            </p>

            <p className="text-textSecondary">
              With years of expertise and an unwavering commitment to excellence, we bring visions to life through innovative solutions that exceed expectations and create lasting value for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

