import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaFileDownload } from "react-icons/fa";

export default function Menu() {
    const [openIndex, setOpenIndex] = useState(null);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const menu = [
        {
            category: "South Indian Roti",
            items: [
                "Akki Roti",
                "Masala Akki Roti",
                "Plain Akki Roti",
                "Ragi Roti",
                "Jolada Roti",
                "Kadak Jolada Roti",
                "Sajje Roti",
                "Mangalore Dry Roti",
                "Rumali Roti",
                "Menthya Rumali Roti",
                "Wheat Rumali Roti",
                "Tandoor Roti",
                "Veg. Stuffed Parota",
                "Potato Parota",
                "Pulka",
                "Channa Batora",
                "Tandoori Nan",
                "Butter Nan",
                "Stuffed Nan",
                "Garlic Nan",
                "Cheese Nan",
            ],
        },
        {
            category: "South Indian Curry",
            items: [
                "Veg Sagu",
                "Bombay Sagu",
                "Samebadhnekai Sagu",
                "M.T.R. Sagu",
                "Pitik Poppu",
                "Batani Kootu",
                "Perch Kootu",
                "Hirekai Kootu",
                "Alu+Brinjal Nati Kootu",
                "Kadalekalu Kootu",
                "Avarekalu Kootu",
                "Alasandekalu Kootu",
                "Huralikalu Kootu",
                "Hesarukalu Kootu",
            ],
        },
        {
            category: "Bajji",
            items: [
                "Ridge Gourd Bajji",
                "Banana Bajji",
                "Chilli Bajji",
                "Alu Bajji",
                "Big Chilli Bajji",
                "Onion Bajji",
                "Veg Bonda",
                "Alu Bonda",
                "Maddur Vada",
                "Rava Vada",
                "Masala Vada",
                "Ambode",
                "Pakoda",
                "Rava Pakoda",
                "Pudi Pakoda",
                "Mandalore Bajji",
                "Curd Vada",
                "Masala Curd Vada",
                "Betel Leaves Bajji",
                "Paneer Pakoda",
                "Masala Chilli Bajji",
            ],
        },
        {
            category: "Rice Bath Items",
            items: [
                "Veg Palav",
                "Ghee Rice",
                "Veg Dhum Biryani",
                "Menthya Bath",
                "Bisibele Bath",
                "Peas Palav",
                "Veg Fried Rice",
                "Mushroom Fried Rice",
                "Paneer Fried Rice",
                "Mushroom Biryani",
                "Paneer Palav",
                "Alu Biryani",
                "Jeera Rice",
                "Bread Palav",
                "Hyderabadi Biryani",
                "Mogalai Biryani",
                "Navaratna Palav",
                "Dhum Vangibath",
                "Kalasida Vangibath",
                "Lemon Ricebath",
                "Veg Lemon Ricebath",
                "Capsicum Peas Lemon Rice Bath",
                "Pudeena Rice Bath",
                "Puliyogare",
                "Coconut Rice Bath",
                "Curry Leaves Bath",
                "Shavige Bath",
                "Bread Mix Shavigi Vangibath",
                "Chinese Noodles",
            ],
        },
        {
            category: "North Indian Curries",
            items: [
                "Paneer Butter Masala",
                "Palak Paneer Masala",
                "Shahi Paneer",
                "Chenna Masala",
                "Malai Koftha",
                "Kadai Paneer",
                "Baby Corn Masala",
                "Khaju Masala",
                "Mushroom Masala",
                "Bhendi Masala",
                "Alu Ghobi",
                "Alu Chenna",
                "Alu Matter",
                "Dhum Alu",
                "Veg Shahi Kurma",
                "Mix Vegetables Curry",
                "Green Peas Masala",
                "Green Peas Capsicum Masala",
            ],
        },
    ];

    return (
        <section
            id="menu"
            className="py-24 text-center px-6 md:px-20 font-[Playfair_Display]"
        >
            {/* Header */}
            <motion.div
                className="flex flex-col items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
        <span className="bg-[#d4af37] text-[#022617] px-5 py-1 rounded-full text-sm font-semibold tracking-wide mb-4">
          OUR MENU
        </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#fefce8] mb-3">
                    🍛 A Feast of Flavors
                </h2>
                <p className="text-[#e4e4e4] max-w-2xl mx-auto text-lg italic">
                    Explore our handcrafted dishes — rooted in tradition, served with love.
                </p>
            </motion.div>

            {/* Accordion Menu */}
            <div className="max-w-3xl mx-auto space-y-6">
                {menu.map((block, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={i}
                        viewport={{ once: true, amount: 0.3 }}
                        className="border border-[#d4af37]/40 rounded-xl bg-[#012a1b]/70 overflow-hidden shadow-lg hover:border-[#d4af37] transition-all duration-300"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center text-left px-6 py-4 text-[#fefce8] text-xl font-semibold tracking-wide"
                        >
                            {block.category}
                            {openIndex === i ? (
                                <FaChevronUp className="text-[#d4af37]" />
                            ) : (
                                <FaChevronDown className="text-[#d4af37]" />
                            )}
                        </button>

                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.ul
                                    className="px-6 pb-5 text-left text-[#fefce8]/90 text-sm space-y-2"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {block.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="hover:text-[#d4af37] transition-colors"
                                        >
                                            • {item}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Download Button */}
            <motion.div
                className="mt-14 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <a
                    href="/menu.pdf" // <-- Replace this with your actual menu file path
                    download
                    className="flex items-center gap-2 bg-[#d4af37] text-[#022617] px-6 py-3 rounded-full font-semibold hover:bg-[#fefce8] transition-all duration-300 shadow-md hover:shadow-[#d4af37]/40"
                >
                    <FaFileDownload /> Download Full Menu
                </a>
            </motion.div>
        </section>
    );
}
