import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/main logo.png";

export default function Contact() {
    return (
        <footer
            id="contact"
            className="relative bg-gradient-to-b from-[#033121] via-[#022617] to-[#011e14] text-[#fefce8] py-20 px-6 md:px-20"
        >
            {/* Curved Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    className="relative block w-full h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                >
                    <path
                        d="M321.39 56.44c58.06 0 87.86-20.87 144-32.65 60.48-12.63 130.1-9.25 186 6.42 47.58 13.24 90.52 35.76 157 42.19 72.63 7.22 136.31-5.83 209-24.25V0H0v27.35c77.36 19.64 144.46 29.09 229.15 30.09 73.59.86 128.83-10.74 192.24-0.99z"
                        fill="#022617"
                    ></path>
                </svg>
            </div>

            {/* Main Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
                {/* Column 1 */}
                <div>
                    <h2 className="text-2xl font-[Playfair_Display] text-[#d4af37] mb-4">
                        Amantranaa Caterers
                    </h2>
                    <p className="text-[#e4e4e4]/90 leading-relaxed">
                        Bringing exquisite flavors and heartfelt service to every occasion —
                        blending tradition, culture, and culinary art with a royal touch.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-xl font-[Playfair_Display] text-[#d4af37] mb-4">
                        Contact Info
                    </h3>
                    <div className="space-y-3 text-[#e4e4e4]/90">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#d4af37]" />
                            <span>Vijaya Nagar, Bangalore - 79</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#d4af37]" />
                            <a href="tel:+919009009001" className="hover:text-[#d4af37]">
                                +91 90090 90001
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[#d4af37]" />
                            <a
                                href="mailto:info@amantranaa.com"
                                className="hover:text-[#d4af37]"
                            >
                                info@amantranaa.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaClock className="text-[#d4af37]" />
                            <span>Available 24/7</span>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-xl font-[Playfair_Display] text-[#d4af37] mb-4">
                        Connect With Us
                    </h3>
                    <div className="flex space-x-5 mt-4">
                        <a
                            href="https://facebook.com/amantranaacaterers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/30 text-[#d4af37] text-xl transition-all duration-300"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://instagram.com/amantranaacaterers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/30 text-[#d4af37] text-xl transition-all duration-300"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com/company/amantranaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/30 text-[#d4af37] text-xl transition-all duration-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://wa.me/919009009001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/30 text-[#d4af37] text-xl transition-all duration-300"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#d4af37]/20 mt-16 mb-6"></div>

            {/* Logo + Credits */}
            <div className="flex flex-col items-center text-center space-y-3">
                <img
                    src={logo}
                    alt="Amantranaa Logo"
                    className="h-16 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <p className="text-sm text-[#e4e4e4]/70">
                    © {new Date().getFullYear()} Amantranaa Caterers. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
