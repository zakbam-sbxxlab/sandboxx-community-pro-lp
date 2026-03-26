import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0A1116] text-brand-dust pt-24 pb-12 px-6 md:px-16 lg:px-24 rounded-t-[4rem] mt-[-2rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="lg:col-span-2">
                        <h3 className="font-sans font-bold text-2xl tracking-tight text-white mb-4">
                            Community <span className="text-brand-orange">Pro</span>
                        </h3>
                        <p className="font-sans text-white/50 text-sm font-light mt-4 max-w-xs leading-relaxed">
                            Support them better. Exclusive perks and premium resources for military supporters.
                        </p>
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-max mt-6">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                            </div>
                            <span className="font-mono text-xs tracking-widest text-[#10B981] uppercase">System Operational</span>
                        </div>
                    </div>

                    {/* Nav Col */}
                    <div>
                        <h4 className="font-mono text-xs tracking-widest text-brand-dust/40 uppercase mb-6">Content</h4>
                        <ul className="space-y-4 font-sans text-brand-dust/80">
                            <li><a href="#features" className="hover:text-brand-orange transition-colors">Features</a></li>
                            <li><a href="#academy" className="hover:text-brand-orange transition-colors">Academy</a></li>
                            <li><a href="#guidebook" className="hover:text-brand-orange transition-colors">Guidebook</a></li>
                            <li><a href="#pricing" className="hover:text-brand-orange transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Legal Col */}
                    <div>
                        <h4 className="font-mono text-xs tracking-widest text-brand-dust/40 uppercase mb-6">Company</h4>
                        <ul className="space-y-4 font-sans text-brand-dust/80">
                            <li><a href="https://www.sandboxx.us/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="https://www.sandboxx.us/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-xs text-brand-dust/40">
                        &copy; {new Date().getFullYear()} Sandboxx. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/sandboxxapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-brand-dust/60 hover:text-white transition-all duration-300 cursor-pointer border border-white/10 flex items-center justify-center -translate-y-0 hover:-translate-y-1">
                            <Instagram size={18} strokeWidth={1.5} />
                            <span className="sr-only">Instagram @sandboxxapp</span>
                        </a>
                        <a href="https://tiktok.com/@sandboxxapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-brand-dust/60 hover:text-white transition-all duration-300 cursor-pointer border border-white/10 flex items-center justify-center -translate-y-0 hover:-translate-y-1">
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
                            </svg>
                            <span className="sr-only">TikTok @sandboxxapp</span>
                        </a>
                        <a href="https://facebook.com/sandboxxapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-brand-dust/60 hover:text-white transition-all duration-300 cursor-pointer border border-white/10 flex items-center justify-center -translate-y-0 hover:-translate-y-1">
                            <Facebook size={18} strokeWidth={1.5} />
                            <span className="sr-only">Facebook @sandboxxapp</span>
                        </a>
                        <a href="https://youtube.com/@SandboxxApp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-brand-dust/60 hover:text-white transition-all duration-300 cursor-pointer border border-white/10 flex items-center justify-center -translate-y-0 hover:-translate-y-1">
                            <Youtube size={18} strokeWidth={1.5} />
                            <span className="sr-only">YouTube @SandboxxApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
