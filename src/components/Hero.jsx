export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center">

        <h1 className="text-5xl md:text-7xl font-serif text-[#d4af37] mb-4 drop-shadow-lg">
                Amantranaa Caterers
            </h1>
            <p className="text-lg md:text-xl italic mb-8 max-w-xl">
                An invitation to flavor, tradition & celebration
            </p>
            <div className="flex gap-4">
                <a
                    href="#menu"
                    className="px-6 py-3 rounded-full border-2 border-[#d4af37] text-[#d4af37]
                    hover:bg-[#d4af37] hover:text-[#064e3b] transition"
                >
                    Explore Menu
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-[#d4af37] text-[#064e3b] font-semibold
                    hover:bg-[#fffbe6] transition"
                >
                    Book Now
                </a>
            </div>
        </section>
    );
}
