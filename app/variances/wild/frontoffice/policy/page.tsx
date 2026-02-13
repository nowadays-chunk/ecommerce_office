"use client";

import React from 'react';

export default function WildPolicy() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-2 h-2 bg-[#2d2a22]"></div>
                </div>
                <h1 className="text-7xl lg:text-[10rem] font-light tracking-tighter uppercase italic leading-none text-[#2d2a22]">STILL.</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#8b7e66] italic">THE_NATURAL_ORDER // v1.0.RAW // UNTAMED</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-5xl font-light italic uppercase tracking-tighter border-b border-[#8b7e66]/20 pb-8 text-[#2d2a22] relative">
                        <span className="relative z-10">FORAGED_FAQ.</span>
                        <div className="absolute bottom-[-10px] left-0 w-32 h-1 bg-[#8b7e66] opacity-40"></div>
                    </h2>
                    <div className="space-y-20">
                        {[
                            { q: "How does it reach me?", a: "We ship using the most direct paths to reduce the ripple we leave. Expect your items within 4-7 cycles of the sun. Packaging is raw and recyclable." },
                            { q: "Return to the wild?", a: "If an object doesn't settle well in your space, you may return it within 14 cycles. We ask that it returns to us as it left: untamed and pure." },
                            { q: "Is it guaranteed?", a: "We believe in survival. If an object fails due to the honesty of its material within 2 seasons, we will make it right." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6 group">
                                <h3 className="text-xl font-bold tracking-tight text-[#8b7e66] uppercase italic group-hover:scale-110 transition-transform origin-left">{item.q}</h3>
                                <p className="text-2xl font-light leading-relaxed italic text-[#2d2a22]/80">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 bg-white/40 backdrop-blur-3xl rounded-[3rem] p-16 shadow-2xl border border-[#8b7e66]/10">
                    <h2 className="text-4xl font-light italic uppercase tracking-tighter text-[#2d2a22]">STILL_LOGISTICS.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic text-[#8b7e66]">
                        <p>We believe in the slow movement. Our shipping is intentional, not impulsive. Most orders are processed within 48 hours to ensure each package is prepared with mindfulness.</p>
                        <p>Transit takes time, just as growth does. We appreciate your patience as the earth's rhythms guide your essence to your doorstep.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-light italic uppercase tracking-tighter border-b border-[#8b7e66]/10 pb-8 text-[#2d2a22]">SILENT_PRIVACY.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic opacity-40">
                        <p>Your identity is as quiet as the forest. We don't share your data with external spirits. Stillness is our privacy standard.</p>
                        <p>Zero digital noise. We only use essential pathways to fulfill your journey. Your presence is respected and your path is private.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
