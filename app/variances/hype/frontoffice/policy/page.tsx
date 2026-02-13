"use client";

import React from 'react';

export default function HypePolicy() {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-8 bg-white text-black font-black flex items-center justify-center uppercase">RULES</div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none -skew-x-12">POLICY.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">SYSTEM_REGULATIONS // v3.02 // ENFORCED</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-8 border-white pb-8 -skew-x-6">INTEL_FAQ.</h2>
                    <div className="space-y-16">
                        {[
                            { q: "Shipping Velocity?", a: "Orders are deployed within 24 hours. Standard transit is 2-4 days. We don't do 'relaxed' delivery. Fast or nothing." },
                            { q: "Return Protocol?", a: "Returns are accepted within 15 days for structural defects only. We don't refund for 'change of mind'. Commitment is required." },
                            { q: "Quality Assurance?", a: "Every item is stress-tested in industrial environments. If it's in our catalog, it's built to survive." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xl font-black tracking-tighter bg-white text-black px-4 py-1 inline-block uppercase italic">{item.q}</h3>
                                <p className="text-2xl font-black leading-tight italic opacity-80 underline decoration-white decoration-4">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 border-8 border-white p-12 bg-white text-black -skew-y-2 transform hover:skew-y-0 transition-transform">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter">TRANSIT_STRUCTURE.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic">
                        <p>We use heavy-duty logistics partners. Your gear is tracked with maximum frequency. We deliver to every grid coordinate worldwide.</p>
                        <p>Flat rate shipping for most sectors. Priority deployment for Tier 1 operatives. No hidden fees. Just structural delivery.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-4 border-white/20 pb-8">DATA_ENCRYPTION.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-40">
                        <p>Your data is encrypted at the source. We don't store what we don't need. Our servers are located in high-security clusters.</p>
                        <p>Zero third-party sharing. Your identity is your property. We only facilitate the transaction. No pixels, no cookies, no tracking.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
