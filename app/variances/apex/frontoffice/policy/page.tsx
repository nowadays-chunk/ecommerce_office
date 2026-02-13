"use client";

import React from 'react';

export default function ApexPolicy() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-16 h-16 border-4 border-[#ff3e3e] rotate-45 flex items-center justify-center shadow-[0_0_20px_#ff3e3e]">
                    <div className="w-4 h-4 bg-[#ff3e3e]"></div>
                </div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic text-white skew-x-[-12deg]">RULES.</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/40 italic">SECTOR_REGULATIONS // v8.01.XP // ON_LOG</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-8 border-[#ff3e3e]/20 pb-8 text-white skew-x-[-12deg]">MISSION_FAQ.</h2>
                    <div className="space-y-16">
                        {[
                            { q: "Deployment Velocity?", a: "Orders are dispatched within 24 hours. Standard transit is 2-4 cycles. We don't tolerate lag in our delivery network." },
                            { q: "Module Failure?", a: "Every piece of hardware is covered by a 1-year legend warranty. If it fails in the red zone, we replace or repair. No questions." },
                            { q: "Recruitment Return?", a: "Modules can be returned within 14 days if the seal is unvented. Once deployed, they are part of your legacy." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6 group">
                                <h3 className="text-xl font-black tracking-tighter text-[#ff3e3e] uppercase italic group-hover:text-white transition-colors">{item.q}</h3>
                                <p className="text-2xl font-black leading-tight italic text-white/80 decoration-[#ff3e3e]/40 underline decoration-4">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 border-8 border-[#ff3e3e]/20 bg-black p-12 -skew-x-6 transform hover:skew-x-0 transition-transform shadow-[0_0_100px_rgba(255,62,62,0.1)]">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">SQUAD_LOGISTICS.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic text-[#ff3e3e]/80">
                        <p>Global logistics are synchronized with our core hubs. Real-time tracking is standard for all deployments. High-velocity transit is ensured via premium squad couriers.</p>
                        <p>Calculated shipping rates based on sector coordinates. Zero-friction delivery to every major training zone worldwide. Tracking via neural-link (email).</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b border-white/10 pb-8 text-white">PLAYER_PRIVACY.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-40">
                        <p>Your identity is your most valuable asset. We employ 4096-bit encryption for all player logs and transaction data. Your data is your property.</p>
                        <p>Zero sharing with third-party sectors. Our network is audited for breaches every 24 hours. Your silence is our standard.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
