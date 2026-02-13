"use client";

import React from 'react';

export default function ApexProfile() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] p-12 lg:p-24 space-y-32 font-mono italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-[#ff3e3e] pb-16 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff3e3e]/10 blur-[150px] rounded-full group-hover:bg-[#ff3e3e]/20 transition-all duration-1000"></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-6">
                        <div className="w-16 h-2 bg-[#ff3e3e]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#ff3e3e]/60">Player // Sector_Apex_Primary</span>
                    </div>
                    <h1 className="text-8xl lg:text-[14rem] font-black tracking-tighter leading-[0.8] uppercase italic skew-x-[-12deg] text-white">Z_REX.</h1>
                </div>
                <div className="text-right space-y-12 relative z-10">
                    <div className="bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white px-12 py-8 text-4xl font-black uppercase tracking-tight skew-x-[-12deg] shadow-[0_0_50px_rgba(255,62,62,0.4)] transform hover:rotate-3 transition-transform cursor-pointer">
                        RANK: APEX_LEGEND
                    </div>
                    <p className="text-[10px] font-black uppercase opacity-40 italic mt-8 tracking-[0.6em]">PLAYER_IDENT: AP-882107</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 relative z-10 font-mono">
                <aside className="space-y-24 border-r-4 border-[#ff3e3e]/20 pr-12 h-fit">
                    <nav className="flex flex-col space-y-10 text-5xl font-black italic">
                        {['Overview', 'Deploy logs', 'Kit Sync', 'Squad', 'Disconnect'].map(link => (
                            <a key={link} href="#" className="hover:text-white transition-all hover:translate-x-12 duration-500 uppercase flex items-center gap-6 group/link">
                                <span className="w-6 h-6 bg-[#ff3e3e] skew-x-[-12deg] group-hover:bg-white transition-all"></span>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="p-12 bg-[#ff3e3e]/5 border-l-8 border-[#ff3e3e] space-y-10 shadow-[0_0_80px_rgba(255,62,62,0.1)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 text-[10px] font-black text-[#ff3e3e]/40 italic group-hover:text-white transition-colors">SYNCING...</div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 italic">WIN_RATE_SYNC</h3>
                        <p className="text-8xl font-black italic uppercase leading-none text-white">94.8%</p>
                        <div className="w-full bg-[#ff3e3e]/10 h-4 border-2 border-[#ff3e3e]/20 skew-x-[-12deg]">
                            <div className="w-[94.8%] bg-[#ff3e3e] h-full shadow-[0_0_40px_#ff3e3e]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black opacity-60 uppercase italic text-[#ff3e3e]">
                            <span>SIGNAL_NOMINAL</span>
                            <span className="animate-pulse">Active_Match</span>
                        </div>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-16 border-4 border-[#ff3e3e]/20 bg-[#ff3e3e]/5 space-y-12 relative overflow-hidden group hover:border-[#ff3e3e] transition-all duration-500">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#ff3e3e] opacity-0 group-hover:opacity-100 italic transition-opacity">TRANSFER_IN_PROGRESS</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/60 italic text-center">LATEST_DEPLOY</h3>
                            <div className="flex gap-12 items-center relative z-10 justify-center">
                                <div className="w-40 h-40 bg-black border-4 border-[#ff3e3e]/20 p-8 flex items-center justify-center group-hover:border-[#ff3e3e] shadow-[0_0_50px_rgba(255,62,62,0.15)] transition-all duration-700">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-black italic uppercase leading-none text-white">GEAR_NOD_99</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#ff3e3e]">Synced // ID: 88-X</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-16 border-4 border-[#ff3e3e]/20 bg-[#ff3e3e]/5 space-y-12 relative overflow-hidden group hover:border-[#ff3e3e] transition-all duration-500">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#ff3e3e] opacity-0 group-hover:opacity-100 italic transition-opacity">CACHE_VERIFIED</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/60 italic text-center">SAVED_KITS</h3>
                            <div className="flex gap-12 items-center relative z-10 justify-center">
                                <div className="w-40 h-40 bg-black border-4 border-[#ff3e3e]/20 p-8 flex items-center justify-center group-hover:border-[#ff3e3e] shadow-[0_0_50px_rgba(255,62,62,0.15)] transition-all duration-700">
                                    <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale brightness-150" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-black italic uppercase leading-none text-white">CORE_KIT_42</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#7c3aed]">Verification_Ready</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24">
                        <header className="flex justify-between items-end border-b-8 border-[#ff3e3e]/20 pb-12 relative font-black">
                            <div className="absolute bottom-[-4px] left-0 w-64 h-4 bg-[#ff3e3e] shadow-[0_0_60px_#ff3e3e] skew-x-[-24deg]"></div>
                            <h2 className="text-7xl font-black italic tracking-tighter uppercase text-white">DEPLOY_LOGS.</h2>
                            <p className="text-[10px] font-black text-[#ff3e3e]/40 italic tracking-widest">TRANSMISSIONS: 12,842</p>
                        </header>
                        <div className="space-y-6">
                            {[1, 2].map(o => (
                                <div key={o} className="flex justify-between items-center py-16 bg-[#ff3e3e]/5 border-4 border-[#ff3e3e]/10 hover:bg-black hover:border-[#ff3e3e]/40 px-16 transition-all group relative overflow-hidden shadow-sm hover:shadow-2xl skew-x-[-4deg] hover:skew-x-0">
                                    <div className="absolute left-0 top-0 w-2 h-full bg-[#ff3e3e] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="space-y-4">
                                        <p className="text-4xl font-black uppercase tracking-tight italic group-hover:text-white transition-colors text-white">SIGNAL_AP_88{o}</p>
                                        <p className="text-[10px] font-black opacity-30 uppercase italic text-[#ff3e3e]">SIGNAL_VALIDATED // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-6xl font-black italic text-white">$145.00</p>
                                        <span className="bg-[#ff3e3e] text-white text-[12px] font-black px-12 py-4 uppercase tracking-widest italic rounded-none group-hover:bg-white group-hover:text-black transition-all">SYNCED</span>
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
