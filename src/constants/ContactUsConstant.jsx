import { Mail, Phone, MapPin } from "lucide-react";
import whatsappIcon from "../assets/whatsapp.png";

export const HeaderLabel = {
  ContactUs: {
    en: "Contact Us",
    id: "Hubungi Kami",
  },
  ContactUsDescription: {
    en: "We'd love to hear from you!",
    id: "Kami mendengarkan dengan senang hati!",
  },
};

export const ContactList = [
  {
    icon: <Mail size={40} className="text-secondary" />,
    title: { en: "Email", id: "Email" },
    description: {
      en: "Reach us at admin@idconcept.pro for inquiries and support.",
      id: "Hubungi kami di admin@idconcept.pro untuk informasi lebih lanjut."
    },
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=admin@idconcept.pro",
    linkText: "admin@idconcept.pro",
  },
  {
    icon: <Phone size={40} className="text-secondary" />,
    title: { en: "Phone", id: "Telepon" },
    description: {
      en: "Call us at your convenience.",
      id: "Telepon kami dengan penuh kenyamanan."
    },
    link: "tel:+15550000000",
    linkText: "+1 (555) 000-0000",
  },
  {
    icon: <img src={whatsappIcon} width={40} height={40}/>,
    title: { en: "WhatsApp", id: "WhatsApp" },
    description: {
      en: "Chat with us for immediate assistance.",
      id: "Kirim pesan kepada kami"
    },
    link: "https://api.whatsapp.com/send/?phone=6282285301199&text&type=phone_number&app_absent=0",
    linkText: "+62 822 8530 1199",
  },
];
