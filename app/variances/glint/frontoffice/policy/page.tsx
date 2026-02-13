"use client";

import React from 'react';

export default function GlintPolicy() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a]">REFRACTION.</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60 italic">LUMEN_TERMS // v8.0 // RADIANT</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b border-[#ff8fa3]/20 pb-8 text-[#4a3a4a]">MUSE_FAQ.</h2>
                    <div className="space-y-20">
                        {[
                            { q: "Radiant Shipping?", a: "Standard transit is 3-5 lunar cycles (business days). Express luminescence delivers your glow within 48 hours in pearl-shell packaging." },
                            { q: "Aura Returns?", a: "If the glow doesn't match your aura, returns are accepted within 14 cycles. Items must remain unsullied and in original shimmer." },
                            { q: "Spirit Guarantee?", a: "We believe in the longevity of radiance. Our items carry a 1-year luminescence guarantee against aesthetic dimming." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6 group">
                                <h3 className="text-xl font-black tracking-tighter text-[#ff8fa3] uppercase italic group-hover:scale-110 transition-transform origin-left">{item.q}</h3>
                                <p className="text-2xl font-light leading-relaxed italic text-[#4a3a4a]/80">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 bg-white/60 backdrop-blur-3xl rounded-[4rem] p-16 shadow-[0_60px_120px_-30px_rgba(255,143,163,0.1)] border border-[#ff8fa3]/10">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#4a3a4a]">SPECTRAL_TRANSIT.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic text-[#ff8fa3]">
                        <p>Our shipping is a ritual. Every item is enrobed in protective shimmer and sent via our radiant courier network to ensure it arrives with zero aura loss.</p>
                        <p>Global coverage is standard. Complimentary spectral shipping for all Muse Tier members. Tracking is provided via pearl-link (email).</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b border-[#ff8fa3]/10 pb-8 text-[#4a3a4a]">AURA_PRIVACY.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic opacity-40">
                        <p>Your identity is as precious as the light we curate. We don't share your aura data with external spirits. Encryption is our spectral shield.</p>
                        <p>Zero third-party tracking. We only use essential light-cookies to enhance your ritual experience in our shop. Your shimmer is safe with us.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
