import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-700 flex items-center gap-2 sm:gap-4 md:gap-8 ${scrolled
                ? 'top-6 px-4 sm:px-6 py-3 rounded-full translate-y-0 bg-white/90 backdrop-blur-md border border-brand-sea/10 shadow-lg shadow-brand-sea/5 w-[95%] max-w-5xl'
                : 'top-0 h-24 px-4 sm:px-6 md:px-16 lg:px-24 w-full bg-transparent border-transparent'
                }`}
        >
            <div className="flex-1 flex items-center shrink-0">
                <a href="#" className="flex items-baseline gap-1.5 transition-opacity hover:opacity-80 shrink-0 min-w-0">
                    <img src={`${import.meta.env.BASE_URL}assets/media__1773254697960.png`} alt="Sandboxx Logo" className="h-[14px] sm:h-[16px] md:h-[16px] lg:h-[20px] w-auto object-contain object-left shrink-0 translate-y-0.5" />
                    <span className="font-sans font-bold text-[15px] sm:text-[17px] md:text-lg lg:text-xl tracking-tight text-brand-sea transition-colors duration-300 whitespace-nowrap">
                        Community <span className="text-brand-orange">Pro</span>
                    </span>
                </a>
            </div>

            <div className="hidden md:flex items-center gap-4 lg:gap-8 font-mono text-[10px] lg:text-xs tracking-widest transition-colors duration-300 text-brand-sea/80">
                <a href="#features" className="hover:text-brand-orange transition-colors interactive-lift">FEATURES</a>
                <a href="#reviews" className="hover:text-brand-orange transition-colors interactive-lift">REVIEWS</a>
                <a href="#pricing" className="hover:text-brand-orange transition-colors interactive-lift">PRICING</a>
                <a href="#faq" className="hover:text-brand-orange transition-colors interactive-lift">FAQ</a>
            </div>

            <div className="flex-1 flex justify-end items-center shrink-0">
                <a href="#pricing" className="magnetic-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-sans font-medium text-xs sm:text-sm inline-block transition-colors duration-300 bg-brand-orange text-white shadow-lg shadow-brand-orange/20 whitespace-nowrap">
                    <span className="relative z-10">Join Now</span>
                </a>
            </div>
        </nav>
    );
}
