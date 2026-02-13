"use client";

import React from 'react';

export default function TechSearch() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] p-12 lg:p-24 space-y-32 font-mono">
            <header className="max-w-4xl space-y-12 relative">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00f2ff]/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-[2px] bg-[#00f2ff]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f2ff]/60">Neural_Network_Query://Active</span>
                </div>
                <h1 className="text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] text-white italic skew-x-[-12deg]">
                    SCAN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0062ff]">CATALOG.</span>
                </h1>
                <div className="relative border-2 border-white/10 p-8 bg-white/5 backdrop-blur-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/50 to-transparent"></div>
                    <input
                        type="text"
                        placeholder="INPUT_QUERY_IDENTIFIER..."
                        className="w-full text-4xl lg:text-7xl font-black italic outline-none bg-transparent placeholder:opacity-5 text-white uppercase tracking-tighter"
                    />
                    <div className="absolute top-2 right-2 text-[8px] font-bold text-[#00f2ff]/40">v.4.08-STABLE</div>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-12">
                <aside className="space-y-16 border-r border-[#00f2ff]/20 pr-12">
                    <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#00f2ff]/40 underline underline-offset-8">HARDWARE_SECTORS</h3>
                        <nav className="flex flex-col space-y-4 text-2xl font-black italic">
                            {['Neural_Link', 'Cyber_Deck', 'Optic_Core', 'Nano_Fabric'].map(cat => (
                                <a key={cat} href="#" className="hover:text-white transition-all hover:translate-x-4 duration-500">{cat}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#00f2ff]/40 underline underline-offset-8">SYNC_STATUS</h3>
                        <nav className="flex flex-col space-y-4 text-2xl font-black italic">
                            {['Verified', 'Under_Dev', 'Alpha_Test', 'Legacy'].map(i => (
                                <a key={i} href="#" className="hover:text-white transition-all hover:translate-x-4 duration-500">{i}</a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-24">
                    <div className="flex justify-between items-center bg-white/5 backdrop-blur-xl p-10 border border-white/10 relative">
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00f2ff]"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest italic opacity-40">Scan_Density: 1.2k_Identifiers_Processed</p>
                        <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest italic">
                            <span className="text-[#00f2ff] underline">Optimization_High</span>
                            <span className="opacity-20">Network_Latency</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="group relative bg-[#0a0a20] border-2 border-white/5 p-8 space-y-8 hover:border-[#00f2ff] transition-all duration-300">
                                <div className="absolute top-0 right-0 p-2 text-[8px] font-bold bg-[#00f2ff] text-[#050510] opacity-0 group-hover:opacity-100 transition-opacity">AUTH_IDENT</div>
                                <div className="aspect-square bg-white/5 border border-white/10 p-8 relative overflow-hidden group-hover:bg-[#00f2ff]/5 transition-colors">
                                    <img
                                        src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80`}
                                        className="w-full h-full object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        alt="Tech Node"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">NODE_{i}</h4>
                                    <div className="flex justify-between items-end pt-4 border-t border-white/5 group-hover:border-[#00f2ff]/30">
                                        <p className="text-3xl font-black text-[#00f2ff]">$1,892</p>
                                        <div className="w-8 h-8 rounded-full border border-[#00f2ff] flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                                            <span className="w-2 h-2 bg-[#00f2ff] rounded-full animate-ping"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
