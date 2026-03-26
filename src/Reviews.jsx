import { useState, useRef, useEffect } from 'react';

const REVIEWS = [
    {
        id: 1,
        name: "Cristin Golden",
        memberType: "Extended Family Member",
        branch: "Air Force",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Seal_of_the_United_States_Department_of_the_Air_Force.svg",
        text: "“It is very hard, but they are doing the best they can. Be so super PROUD — and let yourself cry... it is a new way of things for all of us. Hang in there... you have a community around you.”",
    },
    {
        id: 2,
        name: "Kelsea Carmack",
        memberType: "Military Mom",
        branch: "USMC",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Seal_of_the_United_States_Marine_Corps.svg",
        text: "“It's nice connecting and just knowing my son isn't going through this alone and us as family members aren't alone either.”",
    },
    {
        id: 3,
        name: "Sade Jordon",
        memberType: "Military Wife",
        branch: "Air Force",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Seal_of_the_United_States_Department_of_the_Air_Force.svg",
        text: "“Hello everyone! I first want to say thank you, seeing all your messages helped me feel less alone. My fiancé being away is really hard but he's graduating next week!”",
    },
    {
        id: 4,
        name: "Anonymous",
        memberType: "Military Grandparent",
        branch: "Navy",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/0/09/Seal_of_the_United_States_Department_of_the_Navy.svg",
        text: "“Our grandson graduated Navy bootcamp a few weeks ago. He brought a buddy with him to our family celebration. He had no one, so we all celebrated him too.”",
    },
    {
        id: 5,
        name: "Wilda Liz Rodriguez",
        memberType: "Military Mom",
        branch: "USMC",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Seal_of_the_United_States_Marine_Corps.svg",
        text: "“Hola! We have each other. It's been a relief reading all experiences. God bless our recruits.”",
    },
    {
        id: 6,
        name: "Sheri Britt",
        memberType: "Military Mom",
        branch: "Air Force (National Guard)",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Seal_of_the_United_States_Department_of_the_Air_Force.svg",
        text: "“Being away from my son on Thanksgiving is even harder than I expected. My heart aches. I hope I can talk to him today.”",
    },
    {
        id: 7,
        name: "Heather Tokifuji",
        memberType: "Military Mom",
        branch: "Army",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Emblem_of_the_U.S._Department_of_the_Army.svg",
        text: "“So happy to find families on here! My daughter is in this unit too. She did tell me in a one minute phone call that she is allowed to come home on either Dec 19th or 20th until Jan 5th.”",
    },
    {
        id: 8,
        name: "Krista Brooks",
        memberType: "Military Wife",
        branch: "USMC",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Seal_of_the_United_States_Marine_Corps.svg",
        text: "“My fiancé arrived on the island September 2 and was dropped for his mile and a half run... we are now with Mike company graduating January 9th. Anyone in this company who would like to be friends?”",
    }
];

// Duplicate the reviews to create a long seamless track
const SCROLL_ITEMS = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

export default function Reviews() {
    const scrollRef = useRef(null);
    const isPausedRef = useRef(false);
    const scrollPos = useRef(0);

    useEffect(() => {
        let animationFrameId;

        const scrollLoop = () => {
            if (!isPausedRef.current && scrollRef.current) {
                // To safely reset, when we've scrolled exactly the width of the original single block
                // (which is 1/4 the width of SCROLL_ITEMS container), we snap back by that exact amount.
                // This guarantees we never stall against the right-side wall in any browser.
                const singleTrackWidth = scrollRef.current.scrollWidth / 4;

                scrollPos.current += 1; // 1px per frame

                if (scrollPos.current >= singleTrackWidth) {
                    scrollPos.current -= singleTrackWidth;
                }

                // Apply the calculated position directly
                if (scrollRef.current) {
                    scrollRef.current.scrollLeft = scrollPos.current;
                }
            }
            animationFrameId = requestAnimationFrame(scrollLoop);
        };

        // Start the loop
        animationFrameId = requestAnimationFrame(scrollLoop);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const pauseScroll = () => { isPausedRef.current = true; };
    const resumeScroll = () => { isPausedRef.current = false; };

    // Sync the manual scroll back to the animation position so we don't snap back when un-pausing
    const handleScroll = () => {
        if (isPausedRef.current && scrollRef.current) {
            scrollPos.current = scrollRef.current.scrollLeft;
        }
    };

    return (
        <section id="reviews" className="py-24 md:py-32 bg-brand-dust overflow-hidden relative border-y border-brand-sea/5 text-center">
            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <h4 className="font-mono text-xs tracking-[0.2em] font-bold text-brand-orange uppercase mb-4">
                    Community Verified
                </h4>
                <h2 className="font-sans text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-brand-sea mb-4">
                    Loved by military families everywhere
                </h2>
                <p className="font-sans text-brand-sea/70 font-light text-lg">
                    Trust their words, not just ours
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden group">
                {/* Left and Right Gradient Masks for smooth fading */}
                <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-brand-dust to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-brand-dust to-transparent z-20 pointer-events-none"></div>

                {/* Scrolling Track */}
                <div
                    ref={scrollRef}
                    onMouseEnter={pauseScroll}
                    onMouseLeave={resumeScroll}
                    onTouchStart={pauseScroll}
                    onTouchEnd={resumeScroll}
                    onWheel={pauseScroll} // Pause when user naturally scrolls
                    onScroll={handleScroll} // Sync manual dragging so it resumes seamlessly
                    className="flex overflow-x-auto gap-6 px-6 pb-12 pt-4 hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {SCROLL_ITEMS.map((review, idx) => (
                        <div
                            key={`${review.id}-${idx}`}
                            className="w-[300px] md:w-[380px] bg-white border border-brand-sea/5 rounded-3xl p-8 shadow-xl shadow-brand-sea/5 shrink-0 flex flex-col text-left transition-transform hover:-translate-y-1 duration-300"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover border border-brand-sea/10"
                                />
                                <div className="flex flex-col">
                                    <span className="font-sans font-medium text-brand-sea leading-tight mb-1 tracking-tight">{review.name}</span>
                                    <span className="font-mono text-[10px] text-[#FF5522] uppercase tracking-wider font-bold">{review.branch}</span>
                                    <span className="font-mono text-xs text-brand-sea/50">{review.memberType}</span>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="font-sans text-brand-sea/80 font-light text-sm leading-relaxed mb-4 flex-1">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Community Stats Footer */}
            <div className="relative z-10 max-w-5xl mx-auto pt-20 pb-8 flex flex-col items-center">
                <p className="font-mono text-sm lg:text-base tracking-widest text-[#7B8A96] uppercase mb-10 md:mb-12">
                    Trusted by military families nationwide
                </p>

                <div className="flex justify-center text-center w-full px-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-sans text-7xl md:text-8xl font-bold text-brand-orange">175k+</span>
                        <span className="font-sans text-base md:text-xl text-[#7B8A96] mt-2 tracking-widest uppercase font-medium">Community Members</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
