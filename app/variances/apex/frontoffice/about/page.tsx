"use client";

import React from 'react';

export default function ApexAbout() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[18vw] font-black text-[#ff3e3e]/5 uppercase select-none pointer-events-none -skew-x-12">LEGEND</div>
                <div className="w-24 h-4 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] skew-x-[-12deg] shadow-[0_0_30px_#ff3e3e]"></div>
                <h1 className="text-7xl lg:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white">
                    THE <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed]">SQUAD.</span>
                </h1>
                <p className="max-w-xl text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/40 leading-loose italic animate-pulse">EST_202X // COMPETITIVE_INTEGRITY // NEURAL_PEAK_XP_SYNC.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48 relative z-10">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-8 border-[#ff3e3e]/20 pb-8 -skew-x-12 text-white">BATTLE_BORN.</h2>
                        <div className="space-y-8 text-2xl font-black leading-tight italic opacity-90 decoration-[#ff3e3e] decoration-8 underline decoration-skip-ink-none">
                            <p>Apex is not just hardware. It is the catalyst for victory. We design for the player who lives in the millisecond between the decision and the trigger.</p>
                            <p>Our philosophy is built on the squad principle. We empower the individual to enhance the collective, providing the gear that facilitates elite-level integration.</p>
                        </div>
                    </div>
                    <div className="aspect-[16/9] bg-black p-1 border-4 border-[#ff3e3e]/20 transform -rotate-2 hover:rotate-0 transition-all duration-500 shadow-[0_0_80px_rgba(255,62,62,0.2)] relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed]/20 to-transparent group-hover:opacity-40 transition-opacity"></div>
                        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-[5s]" />
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-7xl font-black italic tracking-tighter uppercase italic -skew-x-12 text-white">COMBAT_PILLARS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#ff3e3e]/40 italic">Apex_Standards_v8.01.XP</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Neural_Link", desc: "Hardware that responds at the speed of thought. We optimize every circuit for zero-latency execution." },
                            { title: "Squad_Sync", desc: "Built for integration. Our gear facilitates seamless communication and resource sharing in high-intensity environments." },
                            { title: "Peak_Endure", desc: "Resilience in the red zone. Every item is tested against the physical and cognitive limits of elite competitive gaming." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 bg-black border-4 border-[#ff3e3e]/10 space-y-8 hover:border-[#ff3e3e] transition-all duration-300 -skew-x-4 hover:skew-x-0 group overflow-hidden relative shadow-[0_0_40px_rgba(255,62,62,0.05)] hover:shadow-[0_0_80px_rgba(255,62,62,0.15)]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3e3e]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-[12px] font-black uppercase tracking-widest text-[#ff3e3e] italic">{item.title}</h3>
                                <p className="text-2xl font-black italic leading-tight text-white/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 border-y-8 border-[#ff3e3e]/20 text-center space-y-12 relative overflow-hidden bg-black shadow-[0_0_100px_rgba(255,62,62,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff3e3e]/5 to-transparent skew-y-6"></div>
                    <h2 className="text-7xl font-black italic tracking-tighter uppercase -skew-x-12 text-white">ENTER_THE_SECTOR.</h2>
                    <p className="max-w-2xl mx-auto text-3xl font-black italic uppercase text-[#ff3e3e] decoration-white decoration-4 underline">The recruit sequence is active. Are you prepared to become a legend?</p>
                    <button className="px-24 py-12 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-5xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform skew-x-[-12deg] shadow-[0_0_80px_rgba(255,62,62,0.5)] active:scale-95">
                        DEPLOY_IDENTITY
                    </button>
                </section>
            </main>
        </div>
    );
}
