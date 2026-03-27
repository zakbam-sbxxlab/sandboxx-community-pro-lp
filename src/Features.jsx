import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, GraduationCap, Map, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ id, imgSrc, imgAlt, title, subtitle, description, icon: Icon, delay = 0 }) => {
    const cardRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 85%',
                    },
                    delay,
                }
            );
        }, cardRef);
        return () => ctx.revert();
    }, [delay]);

    return (
        <div
            id={id}
            ref={cardRef}
            className="bg-brand-sea/40 border border-white/5 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col backdrop-blur-sm group h-full"
        >
            <div className="p-8 pb-0 relative h-[300px] shrink-0 flex items-center justify-center bg-brand-sea/20 mt-4 mx-4 rounded-3xl border border-white/5 overflow-hidden cursor-pointer md:cursor-default"
                onClick={() => {
                    if (window.innerWidth < 768) {
                        setIsClicked(true);
                        setTimeout(() => setIsClicked(false), 600);
                    }
                }}
            >
                {/* Abstract subtle grid background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <img 
                    src={imgSrc} 
                    alt={imgAlt} 
                    className={`absolute bottom-0 w-[65%] max-w-[220px] h-auto object-contain drop-shadow-2xl origin-bottom \
                        translate-x-[7px] md:translate-x-[15px] \
                        translate-y-[35%] md:translate-y-[55%] \
                        transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] \
                        md:group-hover:translate-y-[35%] md:group-hover:scale-[1.03] \
                        ${isClicked ? 'scale-[1.2]' : 'scale-100'}`} 
                />
            </div>
            <div className="p-8 flex flex-col flex-1 relative">
                <div className="flex justify-center mb-6 w-full">
                    <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 text-brand-orange border border-brand-orange/20 shadow-sm shadow-brand-orange/10">
                        <Icon size={28} />
                    </div>
                </div>
                
                <div className="flex flex-col text-left w-full flex-1">
                    <div className="min-h-[5.5rem] xl:min-h-[6.5rem] mb-3">
                        <h3 className="font-sans text-xl font-bold text-brand-dust leading-tight border-b border-brand-orange/20 pb-2 mb-2 inline-block">
                            {title}
                        </h3>
                        {subtitle && (
                            <h4 className="font-sans text-[15px] font-medium text-brand-dust/90 leading-snug">
                                {subtitle}
                            </h4>
                        )}
                    </div>
                    <p className="font-sans text-sm text-brand-dust/70 leading-relaxed font-light mt-1">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Features() {
    const sectionRef = useRef(null);

    return (
        <section id="features" ref={sectionRef} className="py-32 px-6 md:px-16 lg:px-24 bg-brand-sea overflow-hidden relative">
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="mb-16 md:mb-24 text-center md:text-left px-2 sm:px-0">
                    <h2 className="font-sans text-[2.25rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 text-balance">
                        Everything you need. <br className="hidden sm:block" />
                        <span className="text-brand-orange font-light italic">When you need it.</span>
                    </h2>
                    <p className="font-sans text-brand-dust/70 font-light max-w-2xl md:text-lg mx-auto md:mx-0 text-balance text-[1.05rem] sm:text-base">
                        A comprehensive suite of tools specifically engineered for the unique challenges <br className="hidden md:block" />of military life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                    <FeatureCard
                        id="group"
                        delay={0}
                        icon={Users}
                        imgSrc={`${import.meta.env.BASE_URL}assets/feature-group.png`}
                        imgAlt="Battle Buddies Group"
                        title="Battle Buddies Group"
                        subtitle="Small-group support with other families"
                        description="A private group chat matching you with people whose recruits are in the exact same week of training. Share daily updates, swap graduation travel plans, and navigate the emotional highs and lows with people who actually get it."
                    />

                    <FeatureCard
                        id="guidebook"
                        delay={0.15}
                        icon={Map}
                        imgSrc={`${import.meta.env.BASE_URL}assets/feature-guidebook.png`}
                        imgAlt="Community Guidebook"
                        title="Community Guidebook"
                        subtitle="Guides you can actually use today"
                        description="A complete, week-by-week roadmap for your recruit's journey. You'll know exactly when to expect that first phone call, what to write in your letters, and how to plan for graduation without feeling overwhelmed."
                    />

                    <FeatureCard
                        delay={0.3}
                        icon={BookOpen}
                        imgSrc={`${import.meta.env.BASE_URL}assets/feature-agents.png`}
                        imgAlt="Pocket Guide AI Agents"
                        title="Pocket Guide AI Agents"
                        subtitle="Instant answers for your specific branch"
                        description="Smart, branch-specific AI assistants available 24/7. Instantly find out your base's exact mailing rules, what specific items are allowed at boot camp, and what your recruit is experiencing right now."
                    />

                    <FeatureCard
                        id="academy"
                        delay={0.45}
                        icon={GraduationCap}
                        imgSrc={`${import.meta.env.BASE_URL}assets/feature-academy.png`}
                        imgAlt="Community Academy"
                        title="Community Academy"
                        subtitle="Master military communication"
                        description="A practical crash course on navigating the military mail system and preparing for communication blackouts. You'll learn how to write letters that boost morale and manage your own nerves while waiting for a phone call."
                    />

                </div>
            </div>
        </section>
    );
}
