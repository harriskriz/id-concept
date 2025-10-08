import TheaterBackground from "../assets/images/theater-background.jpg";
import { processSteps } from "../constants/services";
import { ConsultationIcon, DesignIcon, GearIcon } from "../assets/icons";

export const ProcessSection = () => {
  const stepIcons = [ConsultationIcon, DesignIcon, GearIcon];

  return (
    <section
      id="process"
      className="py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${TheaterBackground})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            OUR PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {processSteps.map((step, index) => {
            const IconComponent = stepIcons[index];
            return (
              <div key={step.step} className="text-center group">
                {/* Step Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-8 border border-white/30 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="w-10 h-10 text-accent">
                    <IconComponent />
                  </div>
                </div>

                {/* Step Description */}
                <p className="text-white/90 leading-relaxed text-base md:text-lg max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

