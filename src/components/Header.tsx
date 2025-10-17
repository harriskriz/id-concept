import { useState } from "react";
import { MailIcon } from "../assets/icons";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact Us", href: "#footer" },
  { label: "FaQ", href: "#faq" }
];

const TopBar = () => {
  return (
    <div className="bg-background text-textSecondary text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-10 space-x-6">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=admin@idconcept.pro&su=Inquiry%20from%20Website"
            className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors duration-300"
            aria-label="Email us at admin@idconcept.pro"
            target="_blank"
          >
            <MailIcon />
            <span>admin@idconcept.pro</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-textPrimary hover:text-accent transition-colors duration-300 font-medium capitalize"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-textPrimary hover:text-accent transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-textPrimary hover:text-accent transition-colors duration-300 font-medium capitalize"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <TopBar />
      <Navigation />
    </header>
  );
};
