import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const containerRef = useRef(null);

    const faqs = [
        {
            question: "What is the difference between free and Pro?",
            answer: "Free members get basic access to the community feed and public resources. Community Pro members unlock exclusive access to the Battle Buddies Groups, Community Guidebook, Pocket Guide AI Agents, and the Community Academy."
        },
        {
            question: "Why do I need to use the same email as Sandboxx?",
            answer: "We use your email address to automatically link your Community Pro membership to your existing app profile. You can check which email you use by opening the Sandboxx app, going to your Profile settings, and looking under Account Details."
        },
        {
            question: "What if I used Apple’s ‘Hide My Email’?",
            answer: "If you originally signed up for Sandboxx using 'Hide My Email', please use that same masked Apple relay email at checkout here. You can find this by going to your iPhone Settings > Apple ID > iCloud > Hide My Email, and searching for Sandboxx."
        },
        {
            question: "Is my membership automatically renewed?",
            answer: "Yes, for your convenience, your Community Pro membership will automatically renew based on your chosen billing cycle (monthly or annually). You can manage or cancel your subscription at any time."
        },
        {
            question: "How do I connect with supporters in my recruit's specific unit?",
            answer: "Once you create and fully complete your profile and enter your recruit's training details, you will automatically be invited to the private Battle Buddies Group corresponding to their exact unit and graduation date."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.faq-item',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%'
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="faq" ref={containerRef} className="w-full bg-[#3B82F6] pt-32 pb-48 px-6 flex flex-col items-center">
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Side: Large Typography Header */}
                <div className="md:w-1/3 shrink-0">
                    <h2 className="font-sans text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight sticky top-32">
                        What.<br />
                        The.<br />
                        FAQ?
                    </h2>
                </div>

                {/* Right Side: Accordion Items */}
                <div className="md:w-2/3 flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="faq-item bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer"
                            onClick={() => toggleFaq(i)}
                        >
                            {/* Question Header */}
                            <div className="flex items-center justify-between p-6">
                                <h4 className="font-sans font-bold text-lg text-brand-sea pr-8">{faq.question}</h4>
                                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === i ? 'bg-brand-orange border-brand-orange text-white' : 'border-gray-300 text-gray-400'}`}>
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>

                            {/* Answer Body (Animated Height via CSS Grid) */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 font-sans text-gray-600 leading-relaxed text-sm">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

            <div className="faq-item mt-20 md:mt-24 w-full max-w-sm">
                <a 
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-white text-[#1a3545] border border-[#1a3545] font-sans font-medium text-lg py-4 rounded-full transition-all hover:bg-gray-50 hover:scale-[1.02] flex items-center justify-center shadow-sm"
                >
                    Back To The Top &uarr;
                </a>
            </div>
        </section>
    );
}
