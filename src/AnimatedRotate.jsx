import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedRotate() {
    const containerRef = useRef(null);
    const innerRingRef = useRef(null);
    const outerRingRef = useRef(null);

    const innerWord = "Sandboxx";
    const outerWord = "Community";

    // Split words into characters for circular positioned arrangement
    const innerChars = innerWord.split('');
    const outerChars = outerWord.split('');

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Inner ring rotating clockwise
            gsap.to(innerRingRef.current, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'linear'
            });

            // Outer ring rotating counter-clockwise
            gsap.to(outerRingRef.current, {
                rotation: -360,
                duration: 25,
                repeat: -1,
                ease: 'linear'
            });

            // Hover scale effect
            gsap.to(containerRef.current, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });

            containerRef.current.addEventListener('mouseenter', () => {
                gsap.to(containerRef.current, { scale: 1.05, duration: 0.4, ease: 'back.out(1.5)' });
            });
            containerRef.current.addEventListener('mouseleave', () => {
                gsap.to(containerRef.current, { scale: 1, duration: 0.4, ease: 'power2.out' });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Helper to calculate positions in a circle
    const createCircularText = (chars, radius) => {
        return chars.map((char, i) => {
            const rot = (i * 360) / chars.length;
            return (
                <span
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-bold"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${rot}deg) translateY(-${radius}px)`,
                    }}
                >
                    {char}
                </span>
            );
        });
    };

    return (
        <section className="w-full py-32 bg-white flex flex-col items-center justify-center overflow-hidden">
            <div
                ref={containerRef}
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center cursor-pointer"
            >
                {/* Center SVG Icon (Sandboxx Logo) */}
                <div className="absolute z-10 w-16 h-16 flex items-center justify-center transform drop-shadow-md relative">
                    <img src="/assets/sandboxx-icon.png" alt="Sandboxx Logo" className="w-full h-full object-contain" />
                </div>

                {/* Simulated Avatar bubbles floating around */}
                <div className="absolute top-[18%] left-[18%] w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg z-0 overflow-hidden transform hover:scale-110 transition-transform">
                    <img src="/profile-1.png" alt="Supporter" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-[20%] left-[26%] w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white shadow-lg z-0 overflow-hidden transform hover:scale-110 transition-transform">
                    <img src="/profile-2.png" alt="Member" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-[32%] right-[10%] w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg z-0 overflow-hidden transform hover:scale-110 transition-transform">
                    <img src="/profile-3.jpg" alt="Community Guide" className="w-full h-full object-cover" />
                </div>

                {/* Inner Ring (Clockwise) */}
                <div
                    ref={innerRingRef}
                    className="absolute inset-0 text-3xl md:text-4xl text-brand-sea"
                >
                    {createCircularText(innerChars, 60)}
                </div>

                {/* Outer Ring (Counter-clockwise) */}
                <div
                    ref={outerRingRef}
                    className="absolute inset-0 text-4xl md:text-5xl text-brand-sea"
                >
                    {createCircularText(outerChars, 120)}
                </div>
            </div>

            {/* Descriptive Text matching the reference layout */}
            <div className="text-center max-w-2xl px-6 mt-16 mt-8 flex flex-col items-center">
                <h3 className="font-sans text-2xl md:text-3xl text-brand-sea leading-tight font-medium mb-8">
                    <span className="font-bold">Support starts with connection.</span> Community Pro brings expert guidance and shared experience together to help you show up with more clarity and confidence.
                </h3>
                <a href="#pricing" className="magnetic-btn bg-brand-orange text-white px-8 py-4 rounded-full font-sans font-medium tracking-wide shadow-xl shadow-brand-orange/20 text-lg w-full sm:w-auto text-center group transition-transform hover:-translate-y-1 inline-block">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Join Community Pro &rarr;
                    </span>
                </a>
            </div>
        </section>
    );
}
