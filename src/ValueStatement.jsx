import { useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const AnimatedButton = ({ text, colorClass, href, icons }) => {
    const containerRef = useRef(null);
    const iconRefs = useRef([]);

    const handleMouseEnter = () => {
        // GSAP animation to "explode" icons from center
        gsap.fromTo(
            iconRefs.current,
            { scale: 0, x: 0, y: 0, opacity: 0, rotation: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.5)',
                stagger: 0.03,
                x: (index, target) => parseFloat(target.dataset.x),
                y: (index, target) => parseFloat(target.dataset.y),
                rotation: (index, target) => parseFloat(target.dataset.rot)
            }
        );
    };

    const handleMouseLeave = () => {
        gsap.to(iconRefs.current, {
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
            duration: 0.4,
            ease: 'power2.in'
        });
    };

    return (
        <span
            ref={containerRef}
            className="relative inline-flex items-center justify-center mx-2 my-2 align-middle z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Hidden explosion icons */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                {icons.map((icon, i) => (
                    <div
                        key={i}
                        ref={el => iconRefs.current[i] = el}
                        className="absolute text-4xl md:text-5xl drop-shadow-md opacity-0 select-none"
                        data-x={icon.x}
                        data-y={icon.y}
                        data-rot={icon.rot}
                    >
                        {icon.emoji}
                    </div>
                ))}
            </div>

            <a
                href={href}
                className={`relative z-10 flex items-center gap-3 px-6 py-1 pb-2 md:py-2 md:pb-3 rounded-[3rem] font-sans font-medium text-white transition-transform hover:scale-105 ${colorClass} shadow-xl`}
            >
                <span className="translate-y-[2px]">{text}</span>
                <div className="bg-white text-black rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center translate-y-[2px] shadow-sm">
                    <ArrowDown className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                </div>
            </a>
        </span>
    );
};

export default function ValueStatement() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white flex flex-col items-center justify-center text-center overflow-hidden border-b border-brand-sea/5">
            <div className="max-w-5xl text-3xl md:text-5xl font-sans font-medium text-brand-sea leading-[1.8] md:leading-[1.8]">
                With Community Pro, we help you
                <AnimatedButton
                    text="understand"
                    href="#features"
                    colorClass="bg-[#2A526A]"
                    icons={[
                        { emoji: '🧠', x: -80, y: -70, rot: -15 },
                        { emoji: '🔍', x: 90, y: -60, rot: 25 },
                        { emoji: '💡', x: -70, y: 80, rot: -10 },
                        { emoji: '📑', x: 80, y: 70, rot: 15 }
                    ]}
                />
                military life,
                <AnimatedButton
                    text="communicate"
                    href="#academy"
                    colorClass="bg-[#3B82F6]"
                    icons={[
                        { emoji: '💌', x: -90, y: -60, rot: -20 },
                        { emoji: '📱', x: 80, y: -80, rot: 20 },
                        { emoji: '💬', x: -80, y: 70, rot: -15 },
                        { emoji: '📬', x: 90, y: 60, rot: 10 }
                    ]}
                />
                directly with other unit supporters, and
                <AnimatedButton
                    text="navigate"
                    href="#guidebook"
                    colorClass="bg-brand-orange"
                    icons={[
                        { emoji: '🗺️', x: -80, y: -60, rot: -15 },
                        { emoji: '📅', x: 90, y: -70, rot: 25 },
                        { emoji: '⭐', x: 0, y: -100, rot: 0 },
                        { emoji: '📍', x: -70, y: 80, rot: -10 },
                        { emoji: '🧭', x: 80, y: 60, rot: 20 }
                    ]}
                />
                each stage of the journey.
            </div>
        </section>
    );
}
