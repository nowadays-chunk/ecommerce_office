"use client";

import React from 'react';

export default function ZenPolicy() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-4 h-4 bg-[#22c55e] rounded-full opacity-20"></div>
                <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter uppercase italic leading-none">EQUILIBRIUM.</h1>
                <p className="max-w-xl text-sm font-medium uppercase tracking-widest opacity-40 italic">Support_Harmonized // Digital_Sanctuary // Cycle_Policy.</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-4xl font-bold italic uppercase tracking-tight border-b-2 border-[#2d3a3a]/5 pb-8 text-[#22c55e]">GUIDANCE_FAQ.</h2>
                    <div className="space-y-20">
                        {[
                            { q: "How do the essences reach me?", a: "We ship using carbon-neutral pathways. Packaging is minimal and 100% biodegradable. Expect your essence to arrive within 3-5 sunrise cycles." },
                            { q: "What is the return of energy?", a: "If an essence does not resonate with your spirit, you may return it within 14 days. We ask that the spirit of the object remains undisturbed." },
                            { q: "How do you source the vibration?", a: "Every material is gathered with permission from the earth, following traditional seasonal cycles and ethical gathering laws." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xl font-bold tracking-tight text-[#22c55e] uppercase italic">{item.q}</h3>
                                <p className="text-2xl font-light leading-relaxed italic opacity-80">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 bg-white rounded-[4rem] p-16 shadow-2xl border-4 border-white">
                    <h2 className="text-4xl font-bold italic uppercase tracking-tight text-[#22c55e]">MINDFUL_SHIPPING.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic opacity-80">
                        <p>We believe in the slow movement. Our shipping is intentional, not impulsive. Most orders are processed within 48 hours to ensure each package is prepared with mindfulness.</p>
                        <p>Transit takes time, just as growth does. We appreciate your patience as the earth's rhythms guide your essence to your doorstep.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-bold italic uppercase tracking-tight border-b-2 border-[#2d2a22]/5 pb-8">DIGITAL_TRANQUILITY.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic opacity-60">
                        <p>We value your digital silence. Your data is stored in a clean, isolated environment. We use it only to enhance your journey with us.</p>
                        <p>We do not use tracking pixels or intrusive analytics. Your path through our garden is your own, and we respect the sanctity of your private exploration.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
