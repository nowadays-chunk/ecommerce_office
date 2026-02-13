"use client";

import React from 'react';

export default function TechContact() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] font-mono italic">
            <header className="py-32 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
                <div className="absolute -top-20 left-1/2 -track-x-1/2 text-[12vw] font-black text-[#00f2ff]/5 uppercase select-none pointer-events-none">TRANSMIT</div>
                <div className="w-12 h-12 border-2 border-[#00f2ff] rounded-none rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#00f2ff] animate-pulse"></div>
                </div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic text-white skew-x-[-12deg]">SIGNALS.</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/40">NEURAL_HANDSHAKE_v4.2 // SYNC_ACTIVE</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-2 border-[#00f2ff]/20 pb-8 text-white skew-x-[-6deg]">NODES.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-crosshair relative">
                                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#00f2ff] group-hover:bg-[#00f2ff] transition-all"></div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-4 block underline decoration-[#00f2ff]/10">CORE_VIBRATION</p>
                                <p className="text-5xl font-black tracking-tighter text-white group-hover:text-[#00f2ff] transition-colors">01-NEO-TECH-X</p>
                            </div>
                            <div className="group cursor-crosshair relative">
                                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#00f2ff] group-hover:bg-[#00f2ff] transition-all"></div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-4 block underline decoration-[#00f2ff]/10">DATA_TRANSMIT</p>
                                <p className="text-5xl font-black tracking-tighter text-white group-hover:scale-110 origin-left transition-transform">ADMIN@CORE.NET</p>
                            </div>
                            <div className="pt-8 border-t border-[#00f2ff]/10">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-4 italic">Distributed_Archive_Sector_42</p>
                                <p className="text-3xl font-black italic text-white/60 leading-tight">
                                    Quantum Grid A-9<br />
                                    Neo Tokyo // Terminal 88<br />
                                    Node_Network_Primary
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 border border-[#00f2ff] bg-[#00f2ff]/5 space-y-8 relative overflow-hidden group shadow-[0_0_50px_rgba(0,242,255,0.1)]">
                        <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff]/60 italic group-hover:animate-pulse">DECRYPTING...</div>
                        <p className="text-2xl font-black italic uppercase leading-tight text-white/80">"Signals are the lifeblood of the integration. We prioritize transmissions from verified nodes. Latency is the enemy of evolution."</p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-[2px] bg-[#00f2ff]"></div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]">NODE_ADMIN_STANDBY_v8.0</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-12 border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,242,255,0.05)] relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-12 relative z-10">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white skew-x-[-12deg]">SYNC_DATA_PAYLOAD.</h2>
                        <div className="space-y-8">
                            <div className="relative border border-white/10 p-6 focus-within:border-[#00f2ff] transition-all bg-white/5">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-2 block">IDENTIFIER</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-white uppercase tracking-tighter" placeholder="NODE_ALIAS" />
                            </div>
                            <div className="relative border border-white/10 p-6 focus-within:border-[#00f2ff] transition-all bg-white/5">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-2 block">SIGNAL_PATH</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-white uppercase tracking-tighter" placeholder="NODE@NETWORK.COM" />
                            </div>
                            <div className="relative border border-white/10 p-6 focus-within:border-[#00f2ff] transition-all bg-white/5">
                                <label className="text-[8px] font-black uppercase tracking-widest text-[#00f2ff]/40 mb-2 block">DATA_STREAM</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-black italic py-4 resize-none text-white uppercase tracking-tighter" placeholder="INITIATE MESSAGE STREAM..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-10 bg-gradient-to-r from-[#00f2ff] to-[#0062ff] text-black text-3xl font-black uppercase tracking-tighter hover:scale-[1.02] transition-all transform shadow-[0_0_50px_rgba(0,242,255,0.3)] relative group/btn overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                        EXECUTE_HANDSHAKE
                    </button>
                </form>
            </main>
        </div>
    );
}
