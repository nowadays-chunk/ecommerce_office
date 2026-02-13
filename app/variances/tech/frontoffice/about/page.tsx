"use client";

import React from 'react';

export default function TechAbout() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden group">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0062ff]/10 blur-[150px] rounded-full group-hover:bg-[#00f2ff]/20 transition-all duration-1000"></div>
                <div className="w-24 h-[1px] bg-[#00f2ff] shadow-[0_0_15px_#00f2ff]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white skew-x-[-12deg]">
                    CORE <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#0062ff]">INTEGRATION.</span>
                </h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40 leading-loose animate-pulse">BOOT_SEQUENCE_INIT // VERSION_4.08 // NEURAL_LINK_ESTABLISHED.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48 relative z-10">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-2 border-[#00f2ff]/20 pb-8 text-white skew-x-[-6deg]">EVOLUTION_LOG.</h2>
                        <div className="space-y-8 text-2xl font-black leading-relaxed italic opacity-80 text-[#00f2ff]">
                            <p>Foundations laid in the silicon age, we have transitioned through every major architectural shift to arrive at the current state of neural commerce.</p>
                            <p>Our purpose is the seamless merging of human intent with hardware potential. We don't just sell technology; we facilitate the next step in integrated identity.</p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden border border-[#00f2ff]/20 bg-black shadow-[0_0_50px_rgba(0,242,255,0.05)] p-2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0062ff]/10 to-transparent group-hover:opacity-40 transition-opacity"></div>
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale brightness-125 hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute bottom-4 left-4 text-[8px] font-black uppercase tracking-widest text-[#00f2ff]/60">VISUAL_SYNC_LOCKED</div>
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-6xl font-black italic tracking-tighter uppercase italic text-white skew-x-[-12deg]">NEURAL_CONSTANTS.</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#00f2ff]/40 italic">QUANTUM_STABILITY_v9.12.CORE</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Direct_Link", desc: "No middle layers. Our hardware interacts directly with user intent through advanced synaptical interfaces." },
                            { title: "Quantum_Scale", desc: "Infinite scalability. Our infrastructure adapts in real-time to the processing demands of your neural network." },
                            { title: "Zero_Latency", desc: "Information at the speed of thought. We have optimized every transmission path for instantaneous acquisition." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 border border-[#00f2ff]/10 bg-white/5 space-y-8 hover:border-[#00f2ff] transition-all duration-500 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f2ff]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff] underline underline-offset-8 decoration-[#00f2ff]/20">{item.title}</h3>
                                <p className="text-xl font-black italic leading-tight text-white/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 border-y border-[#00f2ff]/20 text-center space-y-12 relative overflow-hidden bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f2ff]/5 to-transparent skew-y-6"></div>
                    <h2 className="text-6xl font-black italic tracking-tighter uppercase text-white skew-x-[-6deg]">INITIATE_UPGRADE.</h2>
                    <p className="max-w-2xl mx-auto text-2xl font-black text-[#00f2ff] italic uppercase">The current node structure is ready for expansion. Are you prepared to sync?</p>
                    <button className="px-24 py-12 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black text-3xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform shadow-[0_0_50px_rgba(0,242,255,0.4)] relative group/btn overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                        SYNC_WITH_CORE
                    </button>
                </section>
            </main>
        </div>
    );
}
