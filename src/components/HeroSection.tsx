import Logo from "../assets/images/logo.jpg";
import WaveBackground from "../assets/images/wave-background.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(${WaveBackground})`,
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img
            src={Logo}
            alt="ID Concept Logo"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto opacity-90 drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-12 tracking-wide leading-relaxed animate-fade-in-delayed">
          <span className="text-accent">Transforming spaces</span> into sanctuaries of{" "}
          <span className="text-accent">sound</span> and <span className="text-accent">style</span>
        </h2>

        {/* Service Tags */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in-delayed-2">
          {[
            "Concept",
            "Design",
            "Build"
          ].map((tag, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-accent tracking-wider uppercase hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

