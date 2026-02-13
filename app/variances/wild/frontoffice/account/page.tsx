"use client";

import React from 'react';

export default function WildProfile() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] p-12 lg:p-24 space-y-32 font-serif italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-4 border-[#2d2a22] pb-16 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8b7e66]/10 blur-[150px] rounded-full group-hover:bg-[#8b7e66]/20 transition-all duration-1000"></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-6">
                        <div className="w-16 h-[1px] bg-[#8b7e66]"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#8b7e66]">Forager // The_Valley_Clan</span>
                    </div>
                    <h1 className="text-8xl lg:text-[12rem] font-light tracking-tighter leading-[0.85] uppercase italic text-[#2d2a22]">CLARA_F.</h1>
                </div>
                <div className="text-right space-y-12 relative z-10">
                    <div className="bg-[#2d2a22] text-[#f4f1ea] px-12 py-8 text-4xl font-light uppercase tracking-tight rounded-3xl shadow-[0_40px_80px_-20px_rgba(45,42,34,0.3)] transform hover:translate-y-[-8px] transition-transform cursor-pointer">
                        LEVEL: SENIOR_GATHERER
                    </div>
                    <p className="text-[10px] font-bold uppercase opacity-40 italic mt-8 tracking-[0.6em]">FORAGER_ID: WD-882108</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 relative z-10 font-serif">
                <aside className="space-y-24 border-r-2 border-[#8b7e66]/20 pr-12 h-fit">
                    <nav className="flex flex-col space-y-12 text-5xl font-light italic">
                        {['Quietude', 'Acquisitions', 'Saved Moss', 'Tribe Settings', 'Rest'].map(link => (
                            <a key={link} href="#" className="hover:text-[#8b7e66] transition-all hover:translate-x-12 duration-500 uppercase flex items-center gap-6 group/link">
                                <span className="w-6 h-6 rounded-full border border-[#2d2a22] group-hover:bg-[#2d2a22] transition-all"></span>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="p-16 bg-white/40 backdrop-blur-3xl rounded-3xl border-2 border-[#8b7e66]/10 space-y-10 shadow-2xl text-center group">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#8b7e66] italic">ECOLOGICAL_IMPACT</h3>
                        <p className="text-8xl font-light italic uppercase leading-none text-[#2d2a22] group-hover:scale-110 transition-transform duration-1000">1.2hA</p>
                        <div className="w-full bg-[#8b7e66]/5 h-3 border border-[#8b7e66]/20 rounded-full overflow-hidden">
                            <div className="w-[82%] bg-[#2d2a22] h-full shadow-[0_0_30px_rgba(45,42,34,0.2)]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-bold opacity-60 uppercase italic tracking-widest text-[#8b7e66]">
                            <span>SIGNAL_PEAK</span>
                            <span className="animate-pulse">Active_Preservation</span>
                        </div>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-16 bg-white/40 rounded-3xl border-2 border-[#8b7e66]/10 space-y-12 relative overflow-hidden group hover:border-[#2d2a22]/30 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-10 text-[10px] font-bold text-[#8b7e66] opacity-30 uppercase italic">LATEST_FIND</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#2d2a22]/40 italic text-center">LATEST_SYNC</h3>
                            <div className="flex gap-12 items-center relative z-10 justify-center">
                                <div className="w-40 h-40 bg-[#f4f1ea] rounded-full border-4 border-[#8b7e66]/10 p-10 flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-1000">
                                    <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover mix-blend-multiply transition-all duration-700" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-light italic uppercase leading-none text-[#2d2a22]">MOSS_V88</p>
                                    <p className="text-xs font-bold opacity-40 uppercase italic mt-4 text-[#8b7e66]">Gathered // Feb 12</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-16 bg-white/40 rounded-3xl border-2 border-[#8b7e66]/10 space-y-12 relative overflow-hidden group hover:border-[#2d2a22]/30 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-10 text-[10px] font-bold text-[#8b7e66] opacity-30 uppercase italic">SAVED_ROOT</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#2d2a22]/40 italic text-center">CACHED_MOD</h3>
                            <div className="flex gap-12 items-center relative z-10 justify-center">
                                <div className="w-40 h-40 bg-[#f4f1ea] rounded-full border-4 border-[#8b7e66]/10 p-10 flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-1000">
                                    <img src="https://images.unsplash.com/photo-1549221544-793547953258?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover mix-blend-multiply" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-light italic uppercase leading-none text-[#2d2a22]">ROOT_CORE_42</p>
                                    <p className="text-xs font-bold opacity-40 uppercase italic mt-4 text-[#8b7e66]">Seeking_Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24">
                        <header className="flex justify-between items-end border-b-4 border-[#2d2a22]/20 pb-12 relative font-light">
                            <div className="absolute bottom-[-4px] left-0 w-64 h-2 bg-[#2d2a22] shadow-[0_0_50px_rgba(45,42,34,0.3)] rounded-full"></div>
                            <h2 className="text-7xl font-light italic tracking-tighter uppercase text-[#2d2a22]">ACQUISITIONS.</h2>
                            <p className="text-[10px] font-bold text-[#8b7e66]/40 italic tracking-[0.6em]">LOGS_FOUND: WD-1242</p>
                        </header>
                        <div className="space-y-8">
                            {[1, 2].map(o => (
                                <div key={o} className="flex justify-between items-center py-16 bg-white/40 border-2 border-[#8b7e66]/5 rounded-3xl hover:bg-[#f4f1ea] hover:border-[#2d2a22]/30 px-16 transition-all group relative overflow-hidden shadow-sm hover:shadow-2xl">
                                    <div className="absolute left-0 top-0 w-2 h-full bg-[#2d2a22] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="space-y-4">
                                        <p className="text-4xl font-light uppercase tracking-tight italic group-hover:text-[#2d2a22] transition-colors text-[#2d2a22]">LOG_WD_8820{o}</p>
                                        <p className="text-[10px] font-bold opacity-30 uppercase italic text-[#8b7e66]">SIGNAL_PROCESSED // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-6xl font-light italic text-[#2d2a22] tracking-tighter">$22.00</p>
                                        <span className="bg-[#2d2a22] text-[#f4f1ea] text-[10px] font-bold px-12 py-4 uppercase tracking-widest italic rounded-xl group-hover:bg-[#8b7e66] transition-all">SIGNET_FIXED</span>
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
