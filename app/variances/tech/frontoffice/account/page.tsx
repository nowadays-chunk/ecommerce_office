"use client";

import React from 'react';

export default function TechProfile() {
    return (
        <div className="min-h-screen bg-[#050510] text-[#00f2ff] p-12 lg:p-24 space-y-32 font-mono italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-white/10 pb-16 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0062ff]/10 blur-[150px] rounded-full group-hover:bg-[#00f2ff]/20 transition-all duration-1000"></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-[2px] bg-[#00f2ff]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#00f2ff]/60">Node_Admin // Sector_Primary</span>
                    </div>
                    <h1 className="text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase italic skew-x-[-12deg] text-white">VANCE_X.</h1>
                </div>
                <div className="text-right space-y-12 relative z-10">
                    <div className="bg-[#00f2ff]/10 border-2 border-[#00f2ff] text-[#00f2ff] px-12 py-6 text-2xl font-black uppercase tracking-[0.2em] skew-x-[-12deg] shadow-[0_0_30px_rgba(0,242,255,0.3)]">
                        LEVEL_01_ADMIN
                    </div>
                    <p className="text-[10px] font-black uppercase opacity-40 italic mt-8 tracking-[0.6em]">NODE_IDENT: TECH-882101</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 relative z-10">
                <aside className="space-y-24 border-r border-[#00f2ff]/20 pr-12 h-fit">
                    <nav className="flex flex-col space-y-10 text-4xl font-black italic">
                        {['Overview', 'Logs', 'Saved_Core', 'Network', 'Disconnect'].map(link => (
                            <a key={link} href="#" className="hover:text-white transition-all hover:translate-x-8 duration-500 uppercase flex items-center gap-4">
                                <span className="w-4 h-4 rounded-full border border-[#00f2ff] group-hover:bg-[#00f2ff] transition-all"></span>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="p-10 bg-white/5 border-l-4 border-[#00f2ff] space-y-8 shadow-[0_0_50px_rgba(0,242,255,0.05)]">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/40 italic">BANDWIDTH_SYNC</h3>
                        <p className="text-6xl font-black italic uppercase leading-none text-white">1.2 TB/s</p>
                        <div className="w-full bg-[#00f2ff]/5 h-2 border border-[#00f2ff]/20">
                            <div className="w-[82%] bg-[#00f2ff] h-full shadow-[0_0_20px_#00f2ff]"></div>
                        </div>
                        <div className="flex justify-between text-[8px] font-black opacity-60 uppercase italic">
                            <span>DATA_NOMINAL</span>
                            <span className="animate-pulse">Active_Stream</span>
                        </div>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-12 border-2 border-[#00f2ff]/20 bg-white/5 space-y-12 relative overflow-hidden group hover:border-[#00f2ff] transition-all duration-500">
                            <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff] opacity-0 group-hover:opacity-100 italic transition-opacity">TRANSFER_IN_PROGRESS</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/60">LATEST_SYNC</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-black border border-[#00f2ff]/20 p-4 flex items-center justify-center group-hover:border-[#00f2ff] shadow-[0_0_30px_rgba(0,242,255,0.1)] transition-all">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale brightness-125 group-hover:grayscale-0" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-4xl font-black italic uppercase leading-none text-white">NODE_9921</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#00f2ff]">Synced // HASH: 88-X</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 border-2 border-[#00f2ff]/20 bg-white/5 space-y-12 relative overflow-hidden group hover:border-[#00f2ff] transition-all duration-500">
                            <div className="absolute top-0 right-0 p-4 text-[8px] font-black text-[#00f2ff] opacity-0 group-hover:opacity-100 italic transition-opacity">DATA_REST</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff]/60">CACHED_MODS</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-black border border-[#00f2ff]/20 p-4 flex items-center justify-center group-hover:border-[#00f2ff] shadow-[0_0_30px_rgba(0,242,255,0.1)] transition-all">
                                    <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-4xl font-black italic uppercase leading-none text-white">CORE_MOD_42</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#00f2ff]">Verification_Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <header className="flex justify-between items-end border-b border-[#00f2ff]/20 pb-12 relative">
                            <div className="absolute bottom-0 left-0 w-48 h-1 bg-[#00f2ff] shadow-[0_0_20px_#00f2ff]"></div>
                            <h2 className="text-6xl font-black italic tracking-tighter uppercase text-white">NODE_LOGS.</h2>
                            <p className="text-[10px] font-black text-[#00f2ff]/40 italic tracking-widest">QUERY_DENSITY: ALPHA</p>
                        </header>
                        <div className="space-y-4">
                            {[1, 2, 3].map(o => (
                                <div key={o} className="flex justify-between items-center py-10 border border-white/5 bg-white/5 hover:bg-[#00f2ff]/5 hover:border-[#00f2ff]/30 px-12 transition-all group relative overflow-hidden">
                                    <div className="absolute left-0 top-0 w-1 h-full bg-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="space-y-2">
                                        <p className="text-3xl font-black uppercase tracking-tight italic text-white group-hover:text-[#00f2ff] transition-colors">TRANSMIT_ID_X8{o}</p>
                                        <p className="text-[10px] font-black opacity-30 uppercase italic text-[#00f2ff]">SIGNAL_VALIDATED // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-4xl font-black italic text-white">$2,180</p>
                                        <span className="border border-[#00f2ff] text-[#00f2ff] text-[10px] font-black px-8 py-2 uppercase tracking-widest italic group-hover:bg-[#00f2ff] group-hover:text-black transition-all">SYNCED</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
