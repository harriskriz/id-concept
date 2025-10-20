import { useMemo } from 'react';

interface CompanyEmailProps {
  text: string
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

const GetInTouchLink : React.FC<CompanyEmailProps> = ({ text }) => {
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
            className="bg-accent hover:bg-accentVariant text-background font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 inline-block text-center"
            aria-label={`Email us at ${EMAIL_ADDRESS}`}
        >
            <span>{text}</span>
        </a>
    );
};

export default GetInTouchLink;