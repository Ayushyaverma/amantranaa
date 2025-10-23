import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/main logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#011e14]/60 border-b border-[#d4af37]/20 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
                {/* --- Logo (Centered on Mobile) --- */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <img
                        src={logo}
                        alt="Amantranaa Logo"
                        className="h-14 w-auto rounded-md drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* --- Desktop Links --- */}
                <ul className="hidden md:flex space-x-10 text-[#fefce8] font-[Playfair_Display] tracking-wide text-lg">
                    {["ABOUT", "SERVICES", "MENU", "GALLERY", "CONTACT"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="relative group"
                            >
                <span className="group-hover:text-[#d4af37] transition-colors duration-300">
                  {item}
                </span>
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* --- Mobile Menu Button --- */}
                <div className="absolute right-6 md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-[#d4af37] text-3xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* --- Mobile Dropdown Menu --- */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#01271b]/90 backdrop-blur-lg border-t border-[#d4af37]/30 shadow-xl animate-slideDown">
                    <ul className="flex flex-col items-center space-y-6 py-8 text-[#fefce8] font-[Playfair_Display] text-lg">
                        {["ABOUT", "SERVICES", "MENU", "GALLERY", "CONTACT"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-[#d4af37] transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
