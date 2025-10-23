import { motion } from "framer-motion";

export default function Services() {
    const services = [
        { icon: "👰‍♀️", title: "Weddings", subtitle: "Royal Sparkle" },
        { icon: "💼", title: "Corporate Events", subtitle: "Professional Touch" },
        { icon: "🎂", title: "Birthdays", subtitle: "Confetti Fun!" },
        { icon: "💍", title: "Engagements", subtitle: "Shining Moments" },
        { icon: "🧿", title: "Traditional Ceremonies", subtitle: "Mandala Blessings" },
        { icon: "🧁", title: "Private Parties", subtitle: "Colorful Vibes" },
    ];

    const premium = [
        { icon: "🔥", title: "Live Counters" },
        { icon: "🍽️", title: "Plated Service" },
        { icon: "🍛", title: "Buffet Setup" },
        { icon: "🎁", title: "Customized Menus" },
        { icon: "🎙️", title: "Emcee & Hosting" },
        { icon: "📷", title: "Photo-worthy Styling" },
    ];

    // Simple fade-up animation
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section
            id="services"
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
          OUR SERVICES
        </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#fefce8] mb-3">
                    ✨ Our Culinary Experiences
                </h2>
                <p className="text-[#e4e4e4] max-w-2xl mx-auto text-lg italic">
                    Crafting unforgettable moments through food & service
                </p>
            </motion.div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                {services.map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#012a1b]/70 border border-[#d4af37]/40 p-8 rounded-2xl shadow-lg hover:border-[#d4af37] hover:shadow-[#d4af37]/30 transition-all duration-300 transform hover:scale-[1.03]"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={i}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-2xl text-[#fefce8] font-semibold">
                            {item.title}
                        </h3>
                        <p className="text-[#d4af37] italic text-sm mt-2">
                            {item.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Premium Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {premium.map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#012a1b]/60 border border-[#d4af37]/30 py-6 px-3 rounded-xl hover:border-[#d4af37] transition-all duration-300"
                        variants={fadeUp}
                        custom={i}
                    >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="text-[#fefce8] text-sm font-medium">
                            {item.title}
                        </h4>
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer Badge */}
            <motion.div
                className="mt-10 text-[#d4af37] text-sm italic"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
            >
                🧠 AI Guest Preferences · 🌐 Digital Menu QR
            </motion.div>
        </section>
    );
}
