import { useState, useRef, useEffect } from "react";
import { allServiceSections } from "../constants/detailedServices";

interface ServiceCardProps {
  title: string;
  description: string;
}

// Flatten all services from detailedServices structure
const getAllServices = () => {
  const allServices: Array<{title: string; description: string}> = [];

  allServiceSections.forEach(section => {
    if (section.subsections) {
      section.subsections.forEach(subsection => {
        allServices.push({
          title: subsection.title,
          description: subsection.description
        });

        // Add items as separate services if they exist
        if (subsection.items) {
          subsection.items.forEach(item => {
            // Extract the service name from the item (format: "Service Name - description")
            const itemTitle = item.split(' - ')[0];
            const itemDescription = item.split(' - ')[1] || item;

            allServices.push({
              title: itemTitle,
              description: itemDescription
            });
          });
        }
      });
    }
  });

  return allServices;
};

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-to-br from-glassmorphism to-glassmorphism/80 backdrop-blur-md border border-borderAccent rounded-xl p-6 md:p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 group hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:w-8 transition-all duration-300"></div>
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-textSecondary leading-relaxed group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export const ServicesSection = () => {
  const allServices = getAllServices();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | undefined>(undefined);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && allServices.length > 3) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, allServices.length - 2));
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, allServices.length]);

  // Handle window resize for responsive card width
  useEffect(() => {
    const handleResize = () => {
      // Force re-render to update card width calculations
      setCurrentIndex(prev => prev);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) return 384; // md:w-96
      if (window.innerWidth >= 640) return 320; // sm:w-80
      return 288; // w-72
    }
    return 384; // default
  };

  const getCardMargin = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 640) return 32; // sm:mx-4
      return 16; // mx-2
    }
    return 32; // default
  };

  const nextSlide = () => {
    const maxIndex = allServices.length - (getCardWidth() >= 384 ? 3 : getCardWidth() >= 320 ? 2 : 1);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    const maxIndex = allServices.length - (getCardWidth() >= 384 ? 3 : getCardWidth() >= 320 ? 2 : 1);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < allServices.length - 3) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of acoustic, audio-visual, and electromagnetic noise harmonization solutions
          </p>
        </div>

        {/* Services Carousel */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons - Desktop Only */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full text-white hover:bg-accent hover:text-background transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous services"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= allServices.length - 3}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full text-white hover:bg-accent hover:text-background transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next services"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (getCardWidth() + getCardMargin())}px)` }}
            >
              {allServices.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-72 sm:w-80 md:w-96 mx-2 sm:mx-4">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, allServices.length - (getCardWidth() >= 384 ? 2 : getCardWidth() >= 320 ? 1 : 0)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent scale-125'
                    : 'bg-textSecondary/30 hover:bg-textSecondary/50'
                }`}
                aria-label={`Go to service group ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 mx-auto w-48 sm:w-64 h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500 ease-in-out rounded-full"
              style={{
                width: `${((currentIndex + 1) / Math.max(1, allServices.length - (getCardWidth() >= 384 ? 2 : getCardWidth() >= 320 ? 1 : 0))) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

