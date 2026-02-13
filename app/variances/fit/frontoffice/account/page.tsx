"use client";

import React from 'react';

export default function FitProfile() {
    return (
        <div className="min-h-screen bg-white text-black p-12 lg:p-24 space-y-32 font-sans italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-[12px] border-black pb-16 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-black/5 skew-y-12 select-none pointer-events-none"></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-2 bg-black"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-black/60">Athlete // Elite_Division</span>
                    </div>
                    <h1 className="text-8xl lg:text-[14rem] font-black tracking-tighter leading-[0.8] uppercase italic text-black">JORDAN_R.</h1>
                </div>
                <div className="text-right space-y-12 relative z-10">
                    <div className="bg-black text-white px-12 py-8 text-6xl font-black uppercase tracking-tighter -skew-x-12 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] transform hover:rotate-2 transition-transform cursor-pointer">
                        TIER: PRO_ELITE
                    </div>
                    <p className="text-[10px] font-black uppercase opacity-40 italic mt-8 tracking-[0.6em]">GEAR_ID: FT-882105</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 relative z-10 font-sans">
                <aside className="space-y-24 border-l-[12px] border-black pl-12 h-fit">
                    <nav className="flex flex-col space-y-12 text-5xl font-black italic">
                        {['Overview', 'Deploy logs', 'Kit Sync', 'Settings', 'Terminate'].map(link => (
                            <a key={link} href="#" className="hover:translate-x-12 transition-all duration-500 uppercase flex items-center gap-6 group/link">
                                <span className="w-8 h-8 bg-black opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="p-12 bg-black text-white space-y-10 shadow-[40px_40px_0px_rgba(0,0,0,0.05)] transform hover:-rotate-1 transition-transform">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">VELOCITY_SCORE</h3>
                        <p className="text-8xl font-black italic uppercase leading-none text-white">99%</p>
                        <div className="w-full bg-white/10 h-6 border-4 border-white/20">
                            <div className="w-[99%] bg-white h-full shadow-[0_0_40px_rgba(255,255,255,0.4)]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black opacity-60 uppercase italic">
                            <span>DATA_SYNCED</span>
                            <span className="animate-pulse">Active_Training</span>
                        </div>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-16 border-8 border-black bg-white text-black space-y-12 relative overflow-hidden group hover:bg-[#ff0000] hover:text-white transition-all duration-500">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black opacity-0 group-hover:opacity-100 italic transition-opacity">SYNC_COMPLETE</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">LATEST_HARDWARE</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-40 h-40 bg-black/5 p-8 flex items-center justify-center border-8 border-black group-hover:border-white transition-all">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-black italic uppercase leading-none">GEAR_NOD_99</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4">Deployed // ID: 88-X</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-16 border-8 border-black bg-white text-black space-y-12 relative overflow-hidden group hover:bg-black hover:text-white transition-all duration-500">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black opacity-0 group-hover:opacity-100 italic transition-opacity">CACHE_VERIFIED</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">PENDING_SYNC</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-40 h-40 bg-black/5 p-8 flex items-center justify-center border-8 border-black group-hover:border-white transition-all">
                                    <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain grayscale" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-black italic uppercase leading-none">CORE_MOD_42</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#ff0000]">Verification_Ready</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24">
                        <header className="flex justify-between items-end border-b-[12px] border-black pb-12 relative font-black">
                            <div className="absolute bottom-0 left-0 w-64 h-4 bg-[#ff0000] shadow-[0_0_50px_rgba(255,0,0,0.5)]"></div>
                            <h2 className="text-7xl font-black italic tracking-tighter uppercase">DEPLOY_LOGS.</h2>
                            <p className="text-[10px] font-black text-black/40 italic tracking-widest">TRANSMISSIONS: 842</p>
                        </header>
                        <div className="space-y-4">
                            {[1, 2].map(o => (
                                <div key={o} className="flex justify-between items-center py-16 bg-white border-8 border-black hover:bg-black hover:text-white hover:skew-x-[-2deg] px-16 transition-all group relative overflow-hidden shadow-xl">
                                    <div className="absolute left-0 top-0 w-4 h-full bg-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="space-y-4">
                                        <p className="text-5xl font-black uppercase tracking-tight italic group-hover:text-white transition-colors">SIGNAL_FT_88{o}</p>
                                        <p className="text-[10px] font-black opacity-30 uppercase italic group-hover:text-[#ff0000] transition-colors">VAL_PROCESSED // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-6xl font-black italic">$175.00</p>
                                        <span className="bg-black text-white text-[10px] font-black px-12 py-4 uppercase tracking-widest italic group-hover:bg-[#ff0000] transition-all border-4 border-black">SYNCED</span>
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
