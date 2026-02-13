"use client";

import React from 'react';

export default function GrubPolicy() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full opacity-20 animate-pulse"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic">LOGS.</h1>
                <p className="text-sm font-black uppercase tracking-widest opacity-40 italic">Harvest_Rules // Fresh_Transit // Community_Privacy.</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter bg-[#2d3a3a] text-[#faf9f6] px-8 py-4 inline-block rounded-[3rem] shadow-2xl">HARVEST_FAQ.</h2>
                    <div className="space-y-20">
                        {[
                            { q: "How fresh is transit?", a: "We ship within 24 hours of harvest. Domestic transit takes 2-3 days. Your Grub arrives in compostable, farm-direct packaging." },
                            { q: "Can I return a sprout?", a: "If your order isn't perfect, let us know within 7 days. We'll make it right or refund your energy." },
                            { q: "Where is it grown?", a: "Every item is traced to a specific farm or forager. Check the 'Source' tab on the product page for the full story." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xl font-black tracking-tighter text-[#22c55e] uppercase italic">{item.q}</h3>
                                <p className="text-2xl font-black leading-tight italic opacity-80 decoration-[#22c55e] decoration-8 underline decoration-skip-ink-none">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 bg-white rounded-[4rem] p-16 shadow-2xl border-8 border-white group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#22c55e] opacity-20 uppercase italic transition-opacity">FIELD_LOGS_v2.0</div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#2d3a3a]">DIRECT_TRANSIT.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-80">
                        <p>We use eco-friendly logistics to get the harvest to you. Flat rate shipping keeps it simple for the community. Global drops are seasonal.</p>
                        <p>All packaging is 100% compostable. We encourage you to feed your garden with our boxes once the Grub is in your pantry.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-8 border-[#22c55e]/20 pb-8 text-[#2d3a3a]">TRIBAL_PRIVACY.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-40">
                        <p>Your details are for the tribe only. We don't share your data with the corporate machines. Encryption is standard, trust is organic.</p>
                        <p>No tracking bots in these fields. We only remember your name to greet you at the stall on your next visit.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
