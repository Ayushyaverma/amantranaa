import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        {
            text: `"Amantranaa Caterers transformed our wedding from a beautiful event to an unforgettable celebration. Their attention to detail, impeccable service, and delicious food made our guests rave about the entire experience."`,
            author: "Priya & Amit, Wedding Couple",
        },
        {
            text: `"The team at Amantranaa was incredibly professional and accommodating. Their buffet setup was a hit at our corporate event, and the feedback from our attendees was overwhelmingly positive."`,
            author: "Rahul Sharma, CEO, TechCorp",
        },
        {
            text: `"We had a small intimate gathering, and Amantranaa delivered a personalized menu that perfectly matched our preferences. The presentation and service were impeccable."`,
            author: "Anjali Patel, Birthday Celebrant",
        },
    ];

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

    return (
        <section className="relative font-[Playfair_Display]">
            {/* --- TOP WAVE --- */}
            <div className="absolute -top-1 left-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="w-full"
                >
                    <path
                        fill="#022617"
                        fillOpacity="1"
                        d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </svg>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="py-24 text-center px-6 md:px-20 bg-gradient-to-b from-[#022617] via-[#033121] to-[#064e3b] relative z-10">
                {/* Header */}
                <motion.div
                    className="flex flex-col items-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
          <span className="bg-[#d4af37] text-[#022617] px-5 py-1 rounded-full text-sm font-semibold tracking-wide mb-4">
            TESTIMONIALS
          </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#fefce8] mb-3">
                        What Our Clients Say
                    </h2>
                    <p className="text-[#e4e4e4] max-w-2xl mx-auto text-lg italic">
                        Our culinary excellence speaks for itself.
                    </p>
                </motion.div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={i}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#012a1b]/70 border border-[#d4af37]/40 rounded-2xl p-8 text-[#fefce8] shadow-md hover:shadow-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300"
                        >
                            <p className="italic leading-relaxed text-[#fefce8]/90 mb-6">
                                {t.text}
                            </p>
                            <p className="text-[#d4af37] font-semibold">- {t.author}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- BOTTOM WAVE --- */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="w-full rotate-180"
                >
                    <path
                        fill="#064e3b"
                        fillOpacity="1"
                        d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
