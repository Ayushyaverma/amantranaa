import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
    return (
        <div className="bg-gradient-to-b from-[#064e3b] via-[#04402e] to-[#011d13] text-[#fefce8] font-serif min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Menu />
            <Testimonials />
            <Gallery />
            <Contact />
        </div>
    );
}

export default App;
