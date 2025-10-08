import BottomLeftLogoBackground from "../assets/images/bottom-left-logo-background.jpg";
import SoundExplanationVideo from "../assets/videos/sound-explanation.mp4";

export const DemoSection = () => {
  return (
    <section
      id="demo"
      className="py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${BottomLeftLogoBackground})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-1 lg:order-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textPrimary mb-6 uppercase tracking-wide">
              Acoustic Treatment Demonstration
            </h3>
            <p className="text-sm md:text-sm text-textSecondary leading-relaxed">
              This video demonstrates the profound impact of different acoustic environments on a single sound source.
            </p>
          </div>

          {/* Right Column - Video Player */}
          <div className="order-2 lg:order-2">
            <div className="relative w-1/2 mx-auto">
              <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster={BottomLeftLogoBackground}
                  aria-label="Acoustic treatment demonstration video"
                >
                  <source src={SoundExplanationVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm text-textSecondary mt-2 text-end">
                Courtesy of Electro Voice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

