import Logo from "../assets/images/logo.jpg";
import CompanyEmail from "./CompanyEmail";
import { MailIcon } from "../assets/icons";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-backgroundSecondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src={Logo}
              alt="ID Concept Logo"
              className="h-12 w-auto"
            />
            <p className="text-textSecondary text-sm leading-relaxed max-w-md">
              Transforming spaces into sanctuaries of sound and style through expert acoustic interior design and audio-visual solutions.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-textPrimary uppercase tracking-wide">
              Reach Us
            </h3>
            <div className="space-y-3">
              <CompanyEmail icon={<MailIcon /> } />
              <a
                href="tel:+62816357000"
                className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors duration-300"
                aria-label="Call us at +62 816 357 000"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+62 816 357 000</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-textMuted text-sm">
            © 2007 ID Concept. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

