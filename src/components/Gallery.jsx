import React from "react";

// Import all images
import dosa from "../assets/Dosa.jpg";
import dosaCounter from "../assets/dosa counter.jpg";
import thali from "../assets/South indian thail.jpg";
import buffet from "../assets/buffet indian.jpg";
import idliVada from "../assets/idli vada .jpg";
import paneer from "../assets/Paneer masala curry in copper bowl.jpg";
import vegBiryani from "../assets/Veg biryani in banana leaf.jpg";
import kurma from "../assets/Vegetable kurma bowl.jpg";
import gheeRice from "../assets/ghee rice with curry.jpg";
import lemonRice from "../assets/lemon rice with chutney.jpg";
import payasam from "../assets/Payasam in silver bowl.jpg";
import filterCoffee from "../assets/filter coffee.jpg";
import tableDecor from "../assets/Table decore catering.jpg";

export default function Gallery() {
    const images = [
        { src: thali, title: "South Indian Thali" },
        { src: dosa, title: "Crispy Masala Dosa" },
        { src: dosaCounter, title: "Live Dosa Counter" },
        { src: buffet, title: "Buffet Setup" },
        { src: idliVada, title: "Idli & Vada Combo" },
        { src: vegBiryani, title: "Veg Biryani in Banana Leaf" },
        { src: kurma, title: "Vegetable Kurma" },
        { src: paneer, title: "Paneer Masala Curry" },
        { src: gheeRice, title: "Ghee Rice" },
        { src: lemonRice, title: "Lemon Rice with Chutney" },
        { src: payasam, title: "Payasam Dessert" },
        { src: filterCoffee, title: "Filter Coffee" },
        { src: tableDecor, title: "Catering Table Decor" },
    ];

    return (
        <section id="gallery" className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#022617] via-[#033121] to-[#011e14] text-[#fefce8]">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-semibold text-[#d4af37] mb-4">
                    Our Culinary Gallery
                </h2>
                <p className="text-[#e4e4e4]/90 text-lg">
                    A glimpse into our kitchen — where tradition meets flavor and presentation.
                </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#d4af37]/20"
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                            <p className="text-[#d4af37] font-[Playfair_Display] text-xl">
                                {img.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
