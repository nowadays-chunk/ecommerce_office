"use client";

import React from 'react';

export default function VibePolicy() {
    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-12 h-12 bg-[#ff4d6d] rounded-full opacity-10 blur-xl"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none text-shadow-retro">THE_RULES.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">ANALOG_REGULATIONS // v4.20 // SATURATED</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter bg-white text-[#ff4d6d] px-6 py-4 inline-block shadow-[10px_10px_0px_#ff4d6d]">GLOW_FAQ.</h2>
                    <div className="space-y-16">
                        {[
                            { q: "Shipping Vibe?", a: "We ship within 1-2 days. Standard grooving time is 3-6 business days. Express neon transit is available if you're in a hurry." },
                            { q: "Swap It Out?", a: "Not feeling the vibe? Return your items within 14 days. We just ask that you keep the vibes intact and the tags on." },
                            { q: "Material Love?", a: "Everything we sell is chosen for its character. Expect natural variations and a whole lot of soul." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-4 group">
                                <h3 className="text-xl font-black tracking-tighter text-white bg-[#ff4d6d] px-4 py-1 inline-block uppercase italic">{item.q}</h3>
                                <p className="text-2xl font-black leading-tight italic opacity-90 group-hover:scale-105 transition-transform origin-left">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 bg-white rounded-[3rem] p-12 shadow-2xl border-4 border-[#ff4d6d]/10 transform rotate-1">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter">ANALOG_LOGISTICS.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-80">
                        <p>We ship worldwide from our sunshine hub. Tracking is provided via tape-link (email). We use recycled and saturated packaging for every order.</p>
                        <p>Flat rates for everyone. No hidden fees, just pure vibe delivery. We care about the planet as much as the playlist.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-8 border-[#ff4d6d]/20 pb-8">PRIVATE_GLOW.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-40">
                        <p>Your details are for our eyes only. We don't sell your data to the squares. Encryption is standard, vibe is forever.</p>
                        <p>We only use Cookies to keep your session groovy. No tracking pixels, no weird stuff. Just you and the shop.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
