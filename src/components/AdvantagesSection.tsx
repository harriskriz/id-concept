import OfficeBackground from "../assets/images/office-background.jpg";

export const AdvantagesSection = () => {
  return (
    <section
      id="advantages"
      className="py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${OfficeBackground})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-backgroundSecondary/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Competitive <span className="text-accent">Advantages</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-textSecondary">
              <span className="text-accent font-medium">Proven Experience:</span> What sets us apart is our extensive experience in creating comprehensive acoustic and audio-visual solutions, seamlessly integrating technical expertise with elegant design to craft harmonious environments. As a company driven by innovation, we offer fully integrated services—from consultation and design to construction—ensuring that every project embodies the highest standards of quality, performance, and functionality.
            </p>

            <p className="text-textSecondary">
              <span className="text-accent font-medium">Detail-Oriented Excellence:</span> Moreover, we distinguish ourselves with a unique focus on harmonizing Electromagnetic Noise, an often overlooked but critical aspect of creating healthy spaces. We are committed to delivering environments that not only excel in acoustics and visuals but also support holistic wellness by minimizing the negative impacts of Electromagnetic Noise. This dedication ensures our spaces offer a safer, more balanced experience for all who inhabit them.
            </p>

            <p className="text-textSecondary">
              <span className="text-accent font-medium">Electromagnetic Awareness:</span> We understand Electromagnetic Noise as a disruptive subset of man-made Electromagnetic Radiation (EMR), often caused by modern devices. When uncontrolled, it contributes to Electromagnetic Pollution, affecting both sensitive electronics and human well-being. Our deep awareness allows us to design environments that reduce such interference—promoting reliability, safety, and healthier living spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

