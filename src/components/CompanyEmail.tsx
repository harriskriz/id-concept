import { useMemo } from 'react';

interface CompanyEmailProps {
  icon: React.ReactNode
}

const EMAIL_ADDRESS = "admin@idconcept.pro";
const SUBJECT = "Inquiry from Website";

const isMobileDevice = () => {
    if (typeof window === 'undefined' || !window.navigator) {
        return false; // Safely return false if not in a browser environment
    }
    const userAgent = window.navigator.userAgent.toLowerCase();
    
    return /android|iphone|ipad|ipod|windows phone/i.test(userAgent);
};

const CompanyEmail : React.FC<CompanyEmailProps> = ({ icon }) => {
    const href = useMemo(() => {
        const isMobile = isMobileDevice();
        
        if (isMobile) {
            const encodedSubject = encodeURIComponent(SUBJECT);
            return `mailto:${EMAIL_ADDRESS}?subject=${encodedSubject}`;
        } 
        else {
            const encodedSubject = encodeURIComponent(SUBJECT);
            return `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=${encodedSubject}`;
        }
    }, []);

    const target = href.startsWith('mailto:') ? '_self' : '_blank';

    return (
        <a
            href={href}
            target={target} 
            className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors duration-300"
            aria-label={`Email us at ${EMAIL_ADDRESS}`}
        >
            {icon}
            <span>{EMAIL_ADDRESS}</span>
        </a>
    );
};

export default CompanyEmail;