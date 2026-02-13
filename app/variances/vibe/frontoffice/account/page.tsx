"use client";

import React from 'react';

export default function VibeProfile() {
    return (
        <div className="min-h-screen bg-[#fff5e6] text-[#ff4d6d] p-12 lg:p-24 space-y-32 font-serif italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-[#ff4d6d] pb-16 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff4d6d]/10 blur-[120px] rounded-full group-hover:bg-[#ff4d6d]/20 transition-all duration-1000"></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-1 bg-[#ff4d6d]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#ff4d6d]/60">Member // The_Analog_Circle</span>
                    </div>
                    <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.85] uppercase italic">DJ_VANCE.</h1>
                </div>
                <div className="text-right space-y-12 relative z-10">
                    <div className="bg-[#ff4d6d] text-white px-12 py-6 text-2xl font-black uppercase tracking-[0.2em] rounded-full shadow-[0_20px_50px_rgba(255,77,109,0.3)] transform hover:rotate-3 transition-transform cursor-pointer">
                        WAVY_TIER: LEGEND
                    </div>
                    <p className="text-[10px] font-black uppercase opacity-40 italic mt-8 tracking-[0.6em]">RECORD_IDENT: VB-882103</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 relative z-10 font-serif">
                <aside className="space-y-20 border-l-4 border-[#ff4d6d]/20 pl-12 h-fit">
                    <nav className="flex flex-col space-y-10 text-4xl font-black italic">
                        {['Overview', 'Spin Logs', 'Wavy list', 'Tuning', 'Eject'].map(link => (
                            <a key={link} href="#" className="hover:text-black transition-all hover:translate-x-8 duration-500 uppercase flex items-center gap-4">
                                <span className="w-4 h-4 rounded-full bg-[#ff4d6d] animate-pulse"></span>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="p-10 bg-white/40 backdrop-blur-3xl rounded-[3rem] border-4 border-[#ff4d6d]/10 space-y-8 shadow-xl text-center group">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/40 italic">GROOVE_CREDITS</h3>
                        <p className="text-7xl font-black italic uppercase leading-none group-hover:scale-110 transition-transform duration-700">1,242</p>
                        <div className="w-full bg-[#ff4d6d]/5 h-4 border-2 border-[#ff4d6d]/10 rounded-full overflow-hidden">
                            <div className="w-[82%] bg-gradient-to-r from-[#ff4d6d] to-[#ff8fa3] h-full shadow-[0_0_20px_#ff4d6d]"></div>
                        </div>
                        <p className="text-[10px] font-black opacity-60 uppercase italic tracking-widest">PEAK_VIBRATION</p>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-12 bg-white/60 rounded-[4rem] border-4 border-[#ff4d6d]/5 space-y-12 relative overflow-hidden group hover:border-[#ff4d6d]/20 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#ff4d6d] opacity-20 uppercase italic">LATEST_SPIN</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/60">LATEST_TRACK</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-white rounded-full border-8 border-[#ff4d6d]/10 p-6 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-[4s] shadow-xl">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-4xl font-black italic uppercase leading-none">VIBE_LOG_99</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4">Synced // Feb 12</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 bg-white/60 rounded-[4rem] border-4 border-[#ff4d6d]/5 space-y-12 relative overflow-hidden group hover:border-[#ff4d6d]/20 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#ff4d6d] opacity-20 uppercase italic">SAVED_WAVE</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d]/60">CACHED_VIBE</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-white rounded-full border-8 border-[#ff4d6d]/10 p-6 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-[4s] shadow-xl">
                                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d521?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-4xl font-black italic uppercase leading-none">CACHED_42</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#ff4d6d]">Seeking_Harmony</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <header className="flex justify-between items-end border-b-8 border-[#ff4d6d]/10 pb-12 relative">
                            <div className="absolute bottom-0 left-0 w-48 h-2 bg-[#ff4d6d] shadow-[0_0_20px_rgba(255,77,109,0.4)]"></div>
                            <h2 className="text-6xl font-black italic tracking-tighter uppercase">SPIN_LOGS.</h2>
                            <p className="text-[10px] font-black text-[#ff4d6d]/40 italic tracking-widest">RECORDS_FOUND: 24</p>
                        </header>
                        <div className="space-y-6">
                            {[1, 2].map(o => (
                                <div key={o} className="flex justify-between items-center py-12 bg-white/40 rounded-[3rem] border-4 border-[#ff4d6d]/5 hover:bg-white hover:border-[#ff4d6d]/30 px-12 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl">
                                    <div className="absolute left-0 top-0 w-2 h-full bg-[#ff4d6d] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="space-y-2">
                                        <p className="text-3xl font-black uppercase tracking-tight italic group-hover:text-[#ff4d6d] transition-colors">TRACK_VB_8820{o}</p>
                                        <p className="text-[10px] font-black opacity-30 uppercase italic">VIBRATION_MATCHED // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-4xl font-black italic">$32.00</p>
                                        <span className="bg-[#ff4d6d] text-white text-[10px] font-black px-10 py-3 uppercase tracking-widest italic rounded-full group-hover:bg-black transition-all">PRESSED</span>
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
