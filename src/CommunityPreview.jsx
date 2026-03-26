import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityPreview() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Float animation for the entire window
            gsap.to('.mockup-window', {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // Sequence animation simulating "in-use" behavior when scrolled into view
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.mockup-window',
                    start: 'top 50%',
                }
            });

            // 1. Cursor moves in and hovers the button
            tl.fromTo('.mockup-cursor',
                { x: 300, y: 550, opacity: 0 },
                { x: 750, y: 340, opacity: 1, duration: 1.2, ease: 'power2.out' }
            )
                .to('.mockup-cursor', { scale: 0.8, duration: 0.1 })
                // 2. Highlight card button
                .to('.pro-perk-button', { backgroundColor: 'rgba(42, 82, 106, 0.2)', scale: 0.95, duration: 0.1 }, '<')
                .to('.mockup-cursor', { scale: 1, duration: 0.1 })
                .to('.pro-perk-button', { scale: 1, duration: 0.1 }, '<')
                // 3. Cursor moves away and fades
                .to('.mockup-cursor', { x: 900, y: 500, opacity: 0, duration: 1, ease: 'power2.inOut', delay: 0.8 })
                .set('.pro-perk-button', { clearProps: 'all' }, '<0.2');



        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full pt-32 pb-24 overflow-hidden border-brand-sea/5">
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

            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24 px-2 sm:px-0">
                    <h2 className="font-sans text-4xl leading-[1.05] sm:text-[2.5rem] md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                        <span className="block whitespace-nowrap">Stay Informed.</span>
                        <span className="block whitespace-nowrap">Stay Connected.</span>
                        <span className="block whitespace-nowrap">Stay Ready.</span>
                    </h2>
                    <p className="font-sans text-white/90 font-light max-w-3xl mx-auto text-[1.05rem] sm:text-lg md:text-xl leading-relaxed mb-10 text-balance">
                        Get matched with families at the same stage of training. Access branch-specific guides for the entire journey. Know what to expect, what to say, and what comes next for their exact training path.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#pricing"
                            className="magnetic-btn inline-block bg-brand-orange text-white px-8 py-4 rounded-[2rem] font-sans text-lg font-medium shadow-[0_10px_30px_rgba(255,85,34,0.3)] hover:shadow-[0_15px_40px_rgba(255,85,34,0.4)] hover:bg-brand-orange/90 transition-all duration-300">
                            Join Community Pro &rarr;
                        </a>
                    </div>
                </div>

                {/* Browser Mockup Window */}
                <div className="mockup-window w-full max-w-5xl bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-200 overflow-hidden relative">

                    {/* Mockup Header (Safari style) */}
                    <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="bg-white border border-gray-200 h-7 rounded-md w-1/3 max-w-[400px] flex items-center justify-center text-[10px] text-gray-400 font-mono">
                            community.sandboxx.us
                        </div>
                        <div className="w-16"></div> {/* Spacer for symmetry */}
                    </div>

                    {/* Mockup Body (App Layout) */}
                    <div className="flex h-[500px] md:h-[600px] bg-white relative">

                        {/* Very Narrow Icons Sidebar */}
                        <div className="w-16 border-r border-gray-100 flex flex-col items-center py-4 gap-4 bg-gray-50/50">
                            <div className="w-10 h-10 rounded-xl bg-gray-200/50 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </div>
                        </div>

                        {/* Sidebar Navigation */}
                        <div className="w-64 border-r border-gray-100 hidden md:flex flex-col py-6 px-4 gap-6 bg-[#FAFAFA] overflow-y-auto">

                            <div>
                                <h5 className="text-[10px] font-bold text-gray-400 mb-3 tracking-widest uppercase font-mono">New Members</h5>
                                <div className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors">
                                    <span className="text-yellow-500">👋</span> Start Here
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors mt-1">
                                    <span>📜</span> Community Guidelines
                                </div>
                            </div>

                            <div>
                                <h5 className="text-[10px] font-bold text-gray-400 mb-3 tracking-widest uppercase font-mono">Sandboxx</h5>
                                <div className="flex flex-col gap-1">
                                    {['Forward Updates', 'Monthly Poll', 'Bulletin Board'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> {item}
                                        </div>
                                    ))}
                                    <div className="nav-community-events flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Community Events
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Sandboxx Stories
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-[10px] font-bold text-brand-blue mb-3 tracking-widest uppercase font-mono">Community Pro</h5>
                                <div className="flex items-center gap-3 text-sm bg-brand-blue text-white p-2 rounded-lg cursor-pointer shadow-sm mt-1">
                                    <span>✨</span> Pro Perks
                                </div>
                            </div>

                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 bg-white flex flex-col overflow-hidden relative">
                            {/* Internal Header */}
                            <div className="h-14 border-b border-gray-100 flex items-center px-8 justify-between shrink-0">
                                <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                                    <span>☰</span>
                                    <span className="text-gray-900 font-sans font-medium text-sm ml-2">Pro Perks</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-lg">+</div>
                                    <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs font-bold">SB</div>
                                </div>
                            </div>

                            {/* Feed Content */}
                            <div className="flex-1 p-8 overflow-y-auto bg-[#FAFAFA]">
                                {/* Hero Banner inside App */}
                                <div className="w-full h-40 bg-brand-blue text-white rounded-2xl flex flex-col items-center justify-center mb-8 relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDIwTDIwIDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMjAgMjBMMCAyMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
                                    <h1 className="text-3xl font-bold font-sans text-center z-10 tracking-tight">
                                        Community Pro Perks
                                    </h1>
                                    <p className="font-sans font-light mt-2 z-10 text-white/90 max-w-md text-center text-sm md:text-base">Exclusive perks and premium guides to help you navigate training.</p>
                                </div>

                                {/* Article Content Simulation - Pro Perks Cards */}
                                <div className="max-w-3xl flex flex-col gap-4">

                                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
                                        <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 font-bold text-2xl flex items-center justify-center shrink-0">🤝</div>
                                        <div className="flex-1">
                                            <h3 className="font-sans font-bold text-gray-900 text-lg mb-1">Pro Perk: Battle Buddies Group</h3>
                                            <p className="font-sans text-sm text-gray-500">A private group chat matching you with people whose recruits are in the exact same week of training. Share daily updates, swap graduation travel plans, and navigate the emotional highs and lows with people who actually get it.</p>
                                        </div>
                                        <a href="#pricing" className="bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 block">Join Pro To Jump In</a>
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
                                        <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-500 font-bold text-2xl flex items-center justify-center shrink-0">📖</div>
                                        <div className="flex-1">
                                            <h3 className="font-sans font-bold text-gray-900 text-lg mb-1">Pro Perk: Community Guidebook</h3>
                                            <p className="font-sans text-sm text-gray-500">A complete, week-by-week roadmap for your recruit's journey. You'll know exactly when to expect that first phone call, what to write in your letters, and how to plan for graduation without feeling overwhelmed.</p>
                                        </div>
                                        <a href="#pricing" className="bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 block">Join Pro To Read Guide</a>
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
                                        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 font-bold text-2xl flex items-center justify-center shrink-0">✨</div>
                                        <div className="flex-1">
                                            <h3 className="font-sans font-bold text-gray-900 text-lg mb-1">Pro Perk: Pocket Guide AI Agents</h3>
                                            <p className="font-sans text-sm text-gray-500">Smart, branch-specific AI assistants available 24/7. Instantly find out your base's exact mailing rules, what specific items are allowed at boot camp, and what your recruit is experiencing right now.</p>
                                        </div>
                                        <a href="#pricing" className="bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 block">Join Pro To View Agents</a>
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-500 font-bold text-2xl flex items-center justify-center shrink-0">🎓</div>
                                        <div className="flex-1">
                                            <h3 className="font-sans font-bold text-gray-900 text-lg mb-1">Pro Perk: Community Academy</h3>
                                            <p className="font-sans text-sm text-gray-500">A practical crash course on navigating the military mail system and preparing for communication blackouts. You'll learn how to write letters that boost morale and manage your own nerves while waiting for a phone call.</p>
                                        </div>
                                        <a href="#pricing" className="pro-perk-button bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 block">Join Pro To Start Course</a>
                                    </div>

                                </div>
                            </div>

                            {/* SVG Animated Cursor inside mockup */}
                            <svg
                                className="mockup-cursor absolute z-50 drop-shadow-lg text-brand-sea fill-current origin-top-left"
                                style={{ pointerEvents: 'none', width: '28px', height: '28px', top: '0', left: '0' }}
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L5.5 3.21z" />
                            </svg>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
