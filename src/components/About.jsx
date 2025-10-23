import { motion } from "framer-motion";
import dosaImage from "../assets/Dosa about us main photo.png"; // adjust path if needed

export default function About() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const values = [
        {
            title: "Tradition in Taste",
            text: "Authentic regional recipes, perfected over generations.",
        },
        {
            title: "Royal Presentation",
            text: "Every setup designed with elegance and detail.",
        },
        {
            title: "Personalized Experience",
            text: "Menus curated to reflect your vision and culture.",
        },
        {
            title: "Excellence in Service",
            text: "Hospitality that feels as warm as home.",
        },
    ];

    return (
        <section
            id="about"
            className="bg-gradient-to-b from-[#022617] via-[#033121] to-[#064e3b] text-[#fefce8] py-24 px-6 md:px-20"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* --- TEXT SIDE --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="flex justify-start mb-4">
            <span className="bg-[#d4af37] text-[#022617] px-5 py-1 rounded-full text-sm font-semibold tracking-wide">
              ABOUT US
            </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-semibold font-[Playfair_Display] mb-4 text-[#fefce8]">
                        Amantranaa – A Warm Invitation to Taste & Tradition
                    </h2>

                    <p className="text-lg leading-relaxed text-[#e4e4e4] mb-6 italic">
                        Derived from the Sanskrit word <span className="text-[#d4af37]">Amantranaa</span>,
                        meaning <em>“invitation”</em> or <em>“warm welcome”</em>, our name reflects our philosophy —
                        every meal is an invitation to experience love, culture, and celebration.
                    </p>

                    <p className="text-lg leading-relaxed text-[#e4e4e4] mb-8">
                        At <span className="text-[#d4af37] font-semibold">Amantranaa Caterers</span>, we craft
                        culinary experiences that blend tradition with elegance. From handcrafted thalis to curated
                        buffets, every dish embodies the richness of Indian heritage — served with grace, warmth, and
                        a royal touch.
                    </p>

                    {/* --- VALUES GRID --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        {values.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="border-l-4 border-[#d4af37] pl-4 hover:bg-[#033121]/50 rounded-lg transition-all duration-300"
                            >
                                <h4 className="text-[#d4af37] font-semibold text-lg mb-1">{item.title}</h4>
                                <p className="text-sm text-[#fefce8]/90">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- IMAGE SIDE --- */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-end"
                >
                    <img
                        src={dosaImage}
                        alt="Amantranaa South Indian Cuisine"
                        className="rounded-2xl shadow-2xl shadow-[#d4af37]/30 w-full max-w-md border border-[#d4af37]/30"
                    />
                </motion.div>
            </div>
        </section>
    );
}
