// Detailed services data for comprehensive service sections
export interface ServiceSection {
  title: string;
  description?: string;
  subsections?: ServiceSubsection[];
}

export interface ServiceSubsection {
  title: string;
  description: string;
  items?: string[];
}

// Core Services Section
export const coreServices: ServiceSection = {
  title: "Core Services",
  subsections: [
    {
      title: "Acoustic Interior Design",
      description: "We create acoustically optimized spaces that are not only sound-balanced but also free from disruptive noise, ensuring an environment of comfort and tranquility. Our design process focuses on achieving a harmonious balance, using high-quality materials and advanced soundproofing techniques. Whether it's a private retreat or a corporate setting, we ensure your space fosters a peaceful auditory experience."
    },
    {
      title: "Audio-Visual Solutions",
      description: "We design and implement state-of-the-art audio-visual systems that integrate seamlessly with the architecture of any room. From home theaters to corporate meeting rooms and music studios, our solutions are tailored to deliver crystal-clear audio, stunning visuals, and an immersive experience that exceeds expectations. Our systems are both high-performance and user-friendly, elevating your environment to a level of sophistication."
    },
    {
      title: "Electromagnetic Noise Harmonization",
      description: "Our commitment to well-being extends beyond acoustic and visual design. We focus on harmonizing Electromagnetic Noise in every space we design, ensuring a healthier environment for those who occupy it. By mitigating Electromagnetic Noise exposure, we create balanced, safe spaces that promote better health and peace of mind."
    }
  ]
};

// Specialized Services Section
export const specializedServices: ServiceSection = {
  title: "Specialized Services",
  subsections: [
    {
      title: "Personalized Acoustic Design for Every Space",
      description: "We offer tailored acoustic designs for a variety of spaces, each with distinct acoustic requirements.",
      items: [
        "Acoustic Customization for Different Room Functions - We offer tailored acoustic designs for a variety of spaces, such as home theaters, music rooms, meeting rooms, and bedrooms. Each room has distinct acoustic requirements, and we provide the perfect solutions for each.",
        "Custom Acoustic Material Selection - We provide a wide range of acoustic materials that can be customized to match the room's aesthetic. Options include paintable acoustic panels, premium fabric wraps, and natural materials such as wood or stone, adding a luxurious touch to your space.",
        "Acoustic Adjustment for Large and Small Spaces - Whether large or small, every room requires a unique approach to sound control. We design solutions that optimize acoustics in expansive spaces like auditoriums or ballrooms, as well as in more intimate settings like music studios or bedrooms."
      ]
    },
    {
      title: "Custom Audio-Visual Solutions",
      description: "Tailored audio-visual systems for various environments.",
      items: [
        "Custom Home Theater Systems - We design home theater systems with premium screens, speakers, and sound systems tailored to your room layout and audiophile preferences. This includes soundproofing options and speaker layout design, ensuring the ultimate cinematic experience.",
        "Audio-Visual Solutions for Corporate Spaces - We provide customized audio-visual systems for conference rooms, meeting spaces, and presentation areas. Our solutions integrate sound systems, projectors, screens, and video conferencing equipment, prioritizing ease of use and optimal sound quality.",
        "Whole-House Music Systems - For clients who desire high-quality music throughout their home or office, we offer customized multi-room audio systems that are seamlessly integrated with the interior design, complete with central control or smart automation features."
      ]
    },
    {
      title: "Acoustic Solutions for Homes and Offices",
      description: "Specialized acoustic solutions for residential and commercial spaces.",
      items: [
        "Custom Acoustic Design for Homes - We design living spaces such as living rooms, bedrooms, or family rooms with a focus on comfort and noise reduction. Our innovative solutions may include soundproof windows or furniture layouts that optimize sound quality.",
        "Office and Workspace Acoustic Design - For corporate clients, we offer design solutions that create quiet, distraction-free working environments. This may include open spaces with optimized acoustic layouts or conference rooms designed for privacy and tranquility."
      ]
    },
    {
      title: "Custom Solutions for Music Studios and Production",
      description: "Professional audio solutions for music production environments.",
      items: [
        "Professional Studio Design - We offer custom acoustic design for music studios or recording spaces, with precise calculations to maintain sound quality and ensure professional-level recordings.",
        "Advanced Sound Processing Systems - We provide professional audio equipment and sound processing systems (DSP) tailored to meet the needs of music production clients or audiophile producers."
      ]
    },
    {
      title: "Acoustic and Aesthetic Optimization for Reception or Event Spaces",
      description: "Solutions for large venues and presentation areas.",
      items: [
        "Acoustic Design for Large Events - For event spaces or ballrooms, we offer acoustic designs that ensure clear and even sound distribution for larger audiences. This may include acoustic panels, custom-designed ceilings, or integrated sound systems for live events.",
        "Setup for Presentation Spaces - For conference or seminar rooms, we create fully integrated audio-visual systems that provide crisp visual presentations and clear audio, with easy-to-use system controls."
      ]
    },
    {
      title: "Personalized Design for Aesthetic Appeal",
      description: "Design-focused services that combine aesthetics with functionality.",
      items: [
        "Interior Design Tailored to Client Style - We create designs that focus not only on acoustics and technology but also on aesthetics. We customize interior design themes to suit your personal style, whether minimalist, contemporary, or traditional with a modern touch.",
        "Acoustic Furniture Solutions - We design furniture that also serves acoustic purposes, such as chairs, sofas, or tables wrapped in acoustic materials to help control sound within the space."
      ]
    },
    {
      title: "Custom Lighting Design",
      description: "Integrated lighting solutions that enhance both function and ambiance.",
      items: [
        "Adjustable Lighting Design - Lighting plays a crucial role in creating a comfortable and elegant atmosphere. We offer customizable lighting solutions, such as dimmable LED lights and smart lighting systems that can be adjusted to suit different times of day or moods.",
        "Integrated Acoustic Lighting - We integrate lighting elements with acoustic treatments, such as acoustic panels that also serve as soft lighting fixtures. This creates a calming visual effect while enhancing the room's acoustic performance."
      ]
    },
    {
      title: "Custom Smart Technology Solutions",
      description: "Modern smart home and office automation solutions.",
      items: [
        "Home Automation System Integration - We integrate smart home automation systems, allowing for easy control of lighting, temperature, and audio/video devices through apps or voice commands.",
        "Centralized Audio-Visual and Lighting Control - Our solutions include centralized control via apps or touchscreens, enabling seamless adjustments to volume, lighting modes, and room temperature to create a uniquely curated experience."
      ]
    },
    {
      title: "Custom Designs for Electromagnetic Noise Harmonization",
      description: "Specialized solutions for electromagnetic well-being.",
      items: [
        "Electromagnetic Wellness Design - We integrate advanced design principles that harmonize Electromagnetic Noise — a subtle yet impactful factor influencing human well-being. Through precise material selection and spatial configuration, our approach promotes balanced environments that enhance comfort, focus, and holistic health."
      ]
    }
  ]
};

// All services sections combined for easy mapping
export const allServiceSections: ServiceSection[] = [coreServices, specializedServices];
