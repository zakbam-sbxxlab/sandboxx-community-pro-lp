import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-stagger',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.08,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100dvh] flex items-end pb-24 px-6 md:px-16 lg:px-24 overflow-hidden"
        >
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/assets/hero-bg-new.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1116] via-brand-sea/80 to-transparent"></div>
                <div className="absolute inset-0 bg-brand-sea/30 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center pt-20 px-2 sm:px-0">
                <h1 className="hero-stagger font-sans text-4xl leading-[1.05] sm:text-[2.5rem] md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                    <span className="block whitespace-nowrap">Stay Informed.</span>
                    <span className="block whitespace-nowrap">Stay Connected.</span>
                    <span className="block whitespace-nowrap">Stay Ready.</span>
                </h1>

                <p className="hero-stagger font-sans text-[1.05rem] sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light text-balance">
                    Get matched with families at the same stage of training. Access branch-specific guides for the entire journey. Know what to expect, what to say, and what comes next for their exact training path.
                </p>

                <div className="hero-stagger flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a href="#pricing" className="magnetic-btn bg-brand-orange text-white px-8 py-3.5 rounded-full font-sans font-bold tracking-wide shadow-xl shadow-brand-orange/20 text-base md:text-lg w-full sm:w-auto text-center hover:bg-brand-orange/90 transition-colors">
                        Join Community Pro &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
