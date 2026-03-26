import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Map, BookOpen, GraduationCap, Users, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.pricing-fade-up',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="pricing"
            ref={sectionRef}
            className="py-32 px-6 md:px-16 lg:px-24 bg-brand-tan text-brand-sea relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-brand-sea/5 mix-blend-multiply opacity-50"></div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                <div className="pricing-fade-up text-center mb-16 px-2 sm:px-0">
                    <h2 className="font-sans text-[2.25rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-balance">
                        Community Pro <span className="text-brand-orange font-light italic">Perks</span>
                    </h2>
                    <p className="font-sans text-brand-sea/70 font-light text-[1.05rem] sm:text-lg text-balance">
                        Unlock exclusive perks and premium resources designed <br className="hidden md:block" />to help military supporters every step of the journey.
                    </p>
                </div>

                <div className="pricing-fade-up w-full max-w-2xl bg-brand-sea/40 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-md">
                    {/* Plan Toggles */}
                    <div className="flex flex-col md:flex-row gap-4 mb-10">
                        {/* Monthly */}
                        <div
                            onClick={() => setSelectedPlan('monthly')}
                            className={`flex-1 relative cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${selectedPlan === 'monthly'
                                ? 'bg-brand-sea border-brand-orange shadow-[inherit] shadow-brand-orange/20 scale-[1.02] z-10'
                                : 'bg-black/20 border-white/5 hover:border-white/20 hover:bg-black/40'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-mono text-sm tracking-widest text-brand-dust/70 uppercase">Monthly</span>
                                {selectedPlan === 'monthly' && (
                                    <div className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                                        <Check size={12} className="text-white" strokeWidth={3} />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="font-sans text-3xl font-medium text-white">$2.99</span>
                                <span className="font-mono text-xs text-brand-dust/50">/month</span>
                            </div>
                        </div>

                        {/* Annual */}
                        <div
                            onClick={() => setSelectedPlan('annual')}
                            className={`flex-1 relative cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${selectedPlan === 'annual'
                                ? 'bg-brand-sea border-brand-orange shadow-lg shadow-brand-orange/20 scale-[1.02] z-10'
                                : 'bg-black/20 border-white/5 hover:border-white/20 hover:bg-black/40'
                                }`}
                        >
                            <div className="absolute -top-3 right-6 bg-brand-orange text-white text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-md shadow-brand-orange/30">
                                Save 44%
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-mono text-sm tracking-widest text-brand-dust/70 uppercase">Annual</span>
                                {selectedPlan === 'annual' && (
                                    <div className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                                        <Check size={12} className="text-white" strokeWidth={3} />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="font-sans text-3xl font-medium text-white">$19.99</span>
                                <span className="font-mono text-xs text-brand-dust/50">/year</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                    {/* Summary UI */}
                    <div className="space-y-6">

                        <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                            <span className="font-sans text-brand-dust/80">Total due today</span>
                            <span className="font-mono text-xl font-medium text-white">
                                {selectedPlan === 'monthly' ? '$2.99 USD' : '$19.99 USD'}
                            </span>
                        </div>

                        {/* What's included */}
                        <div className="pt-8 mb-8 text-left">
                            <h3 className="font-sans text-xl font-bold text-white mb-6">What's included:</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/20">
                                        <Users size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-sans text-lg font-bold text-white mb-0.5">Battle Buddies Group</h4>
                                        <h5 className="font-sans text-sm font-medium text-brand-dust/90 mb-2">Small-group support with other families</h5>
                                        <p className="font-sans text-brand-dust/70 text-sm leading-relaxed">
                                            A private group chat matching you with people whose recruits are in the exact same week of training. Share daily updates, swap graduation travel plans, and navigate the emotional highs and lows with people who actually get it.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/20">
                                        <Map size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-sans text-lg font-bold text-white mb-0.5">Community Guidebook</h4>
                                        <h5 className="font-sans text-sm font-medium text-brand-dust/90 mb-2">Guides you can actually use today</h5>
                                        <p className="font-sans text-brand-dust/70 text-sm leading-relaxed">
                                            A complete, week-by-week roadmap for your recruit's journey. You'll know exactly when to expect that first phone call, what to write in your letters, and how to plan for graduation without feeling overwhelmed.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/20">
                                        <BookOpen size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-sans text-lg font-bold text-white mb-0.5">Pocket Guide AI Agents</h4>
                                        <h5 className="font-sans text-sm font-medium text-brand-dust/90 mb-2">Instant answers for your specific branch</h5>
                                        <p className="font-sans text-brand-dust/70 text-sm leading-relaxed">
                                            Smart, branch-specific AI assistants available 24/7. Instantly find out your base's exact mailing rules, what specific items are allowed at boot camp, and what your recruit is experiencing right now.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/20">
                                        <GraduationCap size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-sans text-lg font-bold text-white mb-0.5">Community Academy</h4>
                                        <h5 className="font-sans text-sm font-medium text-brand-dust/90 mb-2">Master military communication</h5>
                                        <p className="font-sans text-brand-dust/70 text-sm leading-relaxed">
                                            A practical crash course on navigating the military mail system and preparing for communication blackouts. You'll learn how to write letters that boost morale and manage your own nerves while waiting for a phone call.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="magnetic-btn w-full bg-brand-orange text-white py-4 rounded-full font-sans font-medium text-lg shadow-xl shadow-brand-orange/20 mt-8 group overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Join Community Pro &rarr;
                            </span>
                        </button>

                        <p className="text-center text-xs font-sans text-brand-dust/50 mt-4">
                            Secure checkout powered by Stripe.
                        </p>
                    </div>

                </div>

                {/* Sandboxx Email Info Block */}
                <div className="pricing-fade-up mt-8 w-full max-w-2xl bg-white/40 ring-1 ring-brand-sea/10 backdrop-blur-md rounded-2xl p-4 flex items-start md:items-center justify-center gap-3 shadow-sm">
                    <Info size={24} className="text-brand-orange shrink-0 mt-0.5 md:mt-0" />
                    <p className="font-sans text-[15px] text-brand-sea font-medium leading-snug">
                        <strong className="font-bold">Important: </strong> 
                        Use the same email address you use for Sandboxx so we can connect your Community Pro access (including Battle Buddies).
                    </p>
                </div>

                {/* FAQ CTA */}
                <div className="pricing-fade-up mt-8 w-full max-w-sm">
                    <a 
                        href="#faq" 
                        className="w-full bg-white text-[#1a3545] border border-[#1a3545] font-sans font-medium text-lg py-4 rounded-full transition-all hover:bg-gray-50 hover:scale-[1.02] flex items-center justify-center"
                    >
                        Read our FAQ &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
