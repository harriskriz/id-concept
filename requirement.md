# Landing Page Functional Requirements: ID Concept

## 1.0 Overview

This document outlines the functional and design requirements for the new "ID Concept" landing page. The goal is to create a professional, visually engaging, and informative single-page website that showcases the company's expertise in acoustic interior design, audio-visual solutions, and electromagnetic noise harmonization.

## 2.0 Global Requirements & Technical Stack

* **2.1 Frontend Framework:** React with TypeScript
* **2.2 Styling:** Tailwind CSS
* **2.3 Design Philosophy:** Mobile-First. All components and layouts must be fully responsive, ensuring an optimal experience on mobile, tablet, and desktop devices.
* **2.4 Assets:** All static assets (images, videos, logos, icons) should be optimized for the web to ensure fast loading times.

## 3.0 Page Structure & Components

### 3.1 Header (`<Header />`)

The header is composed of two parts: a top bar for contact info and a main navigation bar. It should be fixed or sticky on scroll for easy access.

* **3.1.1 Top Bar (`<TopBar />`)**
    * **Layout:** A thin horizontal bar at the very top of the page.
    * **Content:**
        * Email Address: Preceded by an **email icon**. Links to `mailto:your.email@idconcept.com`.
        * WhatsApp Number: Preceded by a **WhatsApp icon**. Links to `https://wa.me/yourphonenumber`.
    * **Styling:** Subtle background color, legible text. Content should be aligned (e.g., right-aligned).

* **3.1.2 Navigation Bar (`<Navbar />`)**
    * **Layout:** Positioned below the Top Bar.
    * **Content (Left):** Company Logo.
    * **Content (Right):** Navigation links that scroll smoothly to the corresponding sections on the page.
        * Home (Scrolls to Hero section)
        * Services (Scrolls to Core Services section)
        * About (Scrolls to About section)
        * Contact Us (Scrolls to Footer section)
        * FAQ (Note: FAQ section is not defined below. To be added or link removed).
    * **Responsiveness:** On mobile/tablet viewports, the navigation links should collapse into a hamburger menu icon. Clicking the icon will reveal the links in a drawer or overlay.

### 3.2 Hero Section (`<HeroSection />`)

The first view when a user visits the page. It should be visually impactful and clearly state the company's value proposition.

* **Layout:** Full-screen width and height (viewport height). All content is vertically and horizontally centered.
* **Background:** A custom image or graphic named `wave-background`.
* **Content:**
    1.  **Logo:** The primary company logo, prominently displayed in the center.
    2.  **Moto/Tagline:** A `<h2>` or `<h3>` tag below the logo with the text: "Transforming spaces into sanctuaries of sound and style".
        * **Styling:** Green color, elegant font.
    3.  **Service Tags:** Three styled tags/pills displayed in a row below the motto.
        * `{ Concept }`
        * `{ Design }`
        * `{ Build }`

### 3.3 About Section (`<AboutSection />`)

This section introduces the company's philosophy and detailed expertise.

* **Layout:** Full-width section with padding.
* **Background:** An image of a professional office setting (`office-background`). An overlay (e.g., dark semi-transparent) should be applied to ensure text is readable.
* **Content:** A centered block of text containing the following quote:
    > "At ID Concept, we specialize in the creation of acoustically refined, serene environments that exude both luxury and tranquility. From private sanctuaries to elite corporate spaces, our expertise in Acoustic Interior Design transforms every room into a sanctuary of unparalleled serenity. We meticulously curate environments free from disruptive Electromagnetic Noise, cultivating a healthier, more balanced atmosphere for optimal well-being.
    >
    > Our tailored solutions are designed to deliver superior acoustics and seamless audio-visual integration, including home theaters, music studios, boardrooms, and more. Each space we design is a masterpiece of craftsmanship, offering exceptional acoustics, immersive visuals, and enduring elegance. With years of expertise and a commitment to perfection, we bring your vision to life with unmatched precision, style, and sophistication."

### 3.4 Acoustic Demonstration Section (`<DemoSection />`)

This section provides a practical demonstration of the company's value.

* **Layout:** A two-column grid on desktop/tablet.
    * **Left Column:** Text content.
    * **Right Column:** Video player.
* **Responsiveness:** On mobile, the columns should stack vertically (text block first, video player below it).
* **Background:** A background image named `bottom-left-logo-background`.
* **Content (Left Column):**
    * **Heading:** `<h3>Acoustic Treatment Demonstration</h3>`
    * **Paragraph:** "This video demonstrates the profound impact of different acoustic environments on a single sound source."
* **Content (Right Column):**
    * An embedded video player component.
    * **Source:** The video file located at `assets/video/sound-explanation.mp4`.
    * **Functionality:** Should include standard video controls (play, pause, volume, fullscreen). It should not auto-play with sound.

### 3.5 Competitive Advantages Section (`<AdvantagesSection />`)

Highlights key differentiators of the company.

* **Layout:** A full-width section containing a three-column grid for the advantages on desktop.
* **Responsiveness:** Columns should stack into a single column on mobile.
* **Background:** Re-use the `office-background` image with a suitable overlay.
* **Content:** Each advantage should be presented clearly, perhaps in its own card-like element.
    1.  **Proven Experience:**
        * **Title:** `<h4>Proven Experience</h4>`
        * **Text:** "What sets us apart is our extensive experience..."
    2.  **Detail-Oriented Excellence:**
        * **Title:** `<h4>Detail-Oriented Excellence</h4>`
        * **Text:** "Moreover, we distinguish ourselves with a unique focus..."
    3.  **Electromagnetic Awareness:**
        * **Title:** `<h4>Electromagnetic Awareness</h4>`
        * **Text:** "We understand Electromagnetic Noise as a disruptive subset..."

### 3.6 Core Services Section (`<ServicesSection />`)

Displays the main services offered. The data for this section should be managed dynamically.

* **Data Source:** Create a file `src/constants/services.ts` that exports an array of service objects. Each object should have a `title` and `description` property.
    ```typescript
    // src/constants/services.ts
    export const coreServices = [
      {
        title: "Acoustic Interior Design",
        description: "We create acoustically optimized environments that balance sound clarity and aesthetic elegance, ensuring every space is both beautiful and functional."
      },
      // ... more services
    ];
    ```
* **Layout:** A responsive grid of service cards. (e.g., 3 columns on desktop, 2 on tablet, 1 on mobile).
* **Component:** A reusable `<ServiceCard />` component that accepts `title` and `description` as props.
* **Initial Content:**
    1.  **Acoustic Interior Design:** "We create acoustically optimized..."
    2.  **Audio-Visual Solutions:** "We design and implement state-of-the-art audio-visual..."
    3.  **Electromagnetic Noise Harmonization:** "Our specialized techniques mitigate electromagnetic interference..."

### 3.7 Our Process Section (`<ProcessSection />`)

Outlines the client engagement process in three simple steps.

* **Layout:** A visually distinct section that guides the user through the steps horizontally. Numbered steps or icons should be used to clearly delineate the process.
* **Responsiveness:** Steps should stack vertically on mobile.
* **Background:** A background image named `theater-background`.
* **Content:**
    1.  **Step 1:** Detailed Consultation
    2.  **Step 2:** Customized Plan
    3.  **Step 3:** Implementation & Approval

### 3.8 Footer (`<Footer />`)

The final section of the page with contact information and legal notices.

* **Layout:** A clean, multi-column layout on desktop, stacking vertically on mobile.
* **Content:**
    * **Column 1 (Brand):** Company Logo and a brief tagline.
    * **Column 2 (Contact):**
        * **Heading:** "Reach Us"
        * Email: `info@idconcept.com` (with icon, `mailto:` link)
        * Phone: `+XX XXXX XXXX` (with icon, `tel:` link)
        * WhatsApp: `+XX XXXX XXXX` (with icon, `wa.me` link)
    * **Bottom Bar:**
        * Copyright Text: `© 2025 ID Concept. All Rights Reserved.`

## 4.0 Asset Checklist

* **Icons:**
    * `email-icon.svg`
    * `whatsapp-icon.svg`
* **Images:**
    * `logo.png` (and potentially a favicon version)
    * `wave-background.jpg` (or `.svg`, `.png`)
    * `office-background.jpg`
    * `bottom-left-logo-background.jpg`
    * `theater-background.jpg`
* **Video:**
    * `assets/video/sound-explanation.mp4`