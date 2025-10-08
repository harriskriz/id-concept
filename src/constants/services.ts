// Core services data for the Services section
export interface Service {
  title: string;
  description: string;
}

export const coreServices: Service[] = [
  {
    title: "Acoustic Interior Design",
    description: "We create acoustically optimized environments that balance sound clarity and aesthetic elegance, ensuring every space is both beautiful and functional."
  },
  {
    title: "Audio-Visual Solutions",
    description: "We design and implement state-of-the-art audio-visual systems that deliver immersive experiences for home theaters, conference rooms, and entertainment spaces."
  },
  {
    title: "Electromagnetic Noise Harmonization",
    description: "Our specialized techniques mitigate electromagnetic interference to create healthier, more balanced environments free from disruptive electronic noise."
  }
];

// Process steps data for the Process section
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Detailed Consultation",
    description: "We begin with an in-depth consultation to understand your vision, requirements, and the unique characteristics of your space."
  },
  {
    step: 2,
    title: "Customized Plan",
    description: "Our team develops a tailored design plan incorporating acoustic optimization, audio-visual integration, and aesthetic considerations."
  },
  {
    step: 3,
    title: "Implementation & Approval",
    description: "We execute the plan with precision craftsmanship and ensure your complete satisfaction with the final result."
  }
];

// Competitive advantages data
export interface Advantage {
  title: string;
  description: string;
}

export const competitiveAdvantages: Advantage[] = [
  {
    title: "Proven Experience",
    description: "What sets us apart is our extensive experience in creating comprehensive acoustic and audio-visual solutions, seamlessly integrating technical expertise with elegant design to craft harmonious environments. As a company driven by innovation, we offer fully integrated services---from consultation and design to construction---ensuring that every project embodies the highest standards of quality, performance, and functionality."
  },
  {
    title: "Detail-Oriented Excellence",
    description: "Moreover, we distinguish ourselves with a unique focus on harmonizing Electromagnetic Noise, an often overlooked but critical aspect of creating healthy spaces. We are committed to delivering environments that not only excel in acoustics and visuals but also support holistic wellness by minimizing the negative impacts of Electromagnetic Noise. This dedication ensures our spaces offer a safer, more balanced experience for all who inhabit them."
  },
  {
    title: "Electromagnetic Awareness",
    description: "We understand Electromagnetic Noise as a disruptive subset of man-made Electromagnetic Radiation (EMR), often caused by modern devices. When uncontrolled, it contributes to Electromagnetic Pollution, affecting both sensitive electronics and human well-being. Our deep awareness allows us to design environments that reduce such interference---promoting reliability, safety, and healthier living spaces."
  }
];

