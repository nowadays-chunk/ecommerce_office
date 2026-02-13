"use client";

import React from 'react';

export default function TechPolicy() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-12 h-1 bg-[#00f2ff] shadow-[0_0_15px_#00f2ff]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic text-white skew-x-[-12deg]">PROTOCOLS.</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">CORE_REGULATIONS // v9.12 // SYNC_ENFORCED</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-[#00f2ff]/20 pb-8 text-white skew-x-[-6deg]">CORE_FAQ.</h2>
                    <div className="space-y-16">
                        {[
                            { q: "Transmission Speed?", a: "Standard shipping is 2-3 cycles. Express quantum transit is available for priority nodes, arriving within 24 hours." },
                            { q: "Module Return?", a: "Modules can be returned for recalibration or refund within 14 days of receipt. Seal must be intact for neural security." },
                            { q: "Support handshakes?", a: "Our AI support is active 24/7. Human concierge is available for complex architectural inquiries on priority frequencies." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6 group">
                                <h3 className="text-xl font-black tracking-tighter text-[#00f2ff]/60 uppercase italic group-hover:text-[#00f2ff] transition-colors">{item.q}</h3>
                                <p className="text-2xl font-black leading-tight italic text-white/80">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 border border-[#00f2ff] bg-[#00f2ff]/5 p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(0,242,255,0.1)]">
                    <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff]/40 uppercase italic animate-pulse">QUANTUM_TRANSIT_ACTIVE</div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">TRANSIT_NETWORK.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic text-[#00f2ff]/80">
                        <p>We utilize a distributed logistics network to ensure maximum uptime for deliveries. Every shipment is tracked via blockchain for absolute transparency.</p>
                        <p>Global coverage is standard. No tariffs for verified international nodes. Your hardware is protected by shock-resistant quantum packaging.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b border-white/10 pb-8 text-white">NEURAL_PRIVACY.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-40">
                        <p>Your neural logs are encrypted with 4096-bit keys. We don't store your behavioral data. Only essential transaction metadata is retained.</p>
                        <p>Zero third-party access. Our privacy firewall is audited every 24 hours for breach potential. Your safety is our primary metric.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
