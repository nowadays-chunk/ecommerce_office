"use client";

import React from 'react';

export default function GrubProfile() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] p-12 lg:p-24 space-y-32 font-black italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-[#2d3a3a]/10 pb-16 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#22c55e]/10 blur-[120px] rounded-full group-hover:bg-[#22c55e]/20 transition-all duration-1000"></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-2 bg-[#2d3a3a]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#22c55e]">Gatherer // The_Pantry_Circle</span>
                    </div>
                    <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.85] uppercase italic">ALEX_MDW.</h1>
                </div>
                <div className="text-right space-y-12 relative z-10">
                    <div className="bg-[#22c55e] text-black px-12 py-6 text-2xl font-black uppercase tracking-[0.2em] rounded-[3rem] shadow-[0_20px_50px_rgba(34,197,94,0.3)] transform hover:rotate-3 transition-transform cursor-pointer">
                        TIER: TOP_GATHERER
                    </div>
                    <p className="text-[10px] font-black uppercase opacity-40 italic mt-8 tracking-[0.6em]">HARVEST_ID: GR-882104</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 relative z-10">
                <aside className="space-y-20 border-l-8 border-[#2d3a3a]/10 pl-12 h-fit">
                    <nav className="flex flex-col space-y-10 text-4xl font-black italic">
                        {['Overview', 'Harvest Logs', 'The Pantry', 'Settings', 'Log Out'].map(link => (
                            <a key={link} href="#" className="hover:text-[#22c55e] transition-all hover:translate-x-8 duration-500 uppercase flex items-center gap-4">
                                <span className="w-6 h-6 rounded-full bg-[#2d3a3a] group-hover:bg-[#22c55e] transition-colors"></span>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="p-12 bg-white rounded-[4rem] border-4 border-[#2d3a3a]/5 space-y-8 shadow-2xl text-center group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#22c55e]/10 blur-[40px] rounded-full"></div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]/60 italic">COMMUNITY_IMPACT</h3>
                        <p className="text-7xl font-black italic uppercase leading-none group-hover:scale-110 transition-transform duration-700">12 FARMS</p>
                        <div className="w-full bg-[#2d3a3a]/5 h-6 border-4 border-[#2d3a3a]/10 rounded-full overflow-hidden">
                            <div className="w-[82%] bg-gradient-to-r from-[#22c55e] to-[#2d3a3a] h-full shadow-[0_0_20px_#22c55e]"></div>
                        </div>
                        <p className="text-[10px] font-black opacity-40 uppercase italic tracking-widest">SUPPORTED_LOCALLY</p>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-12 bg-white rounded-[4rem] border-4 border-[#2d3a3a]/5 space-y-12 relative overflow-hidden group hover:border-[#22c55e]/20 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#22c55e] opacity-20 uppercase italic">LATEST_PICK</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#2d3a3a]/40 italic">LATEST_GATHER</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-[#faf9f6] rounded-[2rem] border-8 border-[#2d3a3a]/5 p-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-xl">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-4xl font-black italic uppercase leading-none">GRUB_LOG_99</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#22c55e]">Picked // Feb 12</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 bg-white rounded-[4rem] border-4 border-[#2d3a3a]/5 space-y-12 relative overflow-hidden group hover:border-[#22c55e]/20 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-[#22c55e] opacity-20 uppercase italic">SAVED_GROWTH</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#2d3a3a]/40 italic">PANTRY_STASH</h3>
                            <div className="flex gap-12 items-center relative z-10">
                                <div className="w-32 h-32 bg-[#faf9f6] rounded-[2rem] border-8 border-[#2d3a3a]/5 p-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-xl">
                                    <img src="https://images.unsplash.com/photo-1549221544-793547953258?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-4xl font-black italic uppercase leading-none">CEDAR_MOD_42</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#22c55e]">Awaiting_Action</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24">
                        <header className="flex justify-between items-end border-b-8 border-[#2d3a3a]/10 pb-12 relative">
                            <div className="absolute bottom-0 left-0 w-48 h-4 bg-[#22c55e] shadow-[0_0_40px_rgba(34,197,94,0.4)]"></div>
                            <h2 className="text-6xl font-black italic tracking-tighter uppercase">HARVEST_LOGS.</h2>
                            <p className="text-[10px] font-black text-[#2d3a3a]/40 italic tracking-widest">LOGS_FOUND: 42</p>
                        </header>
                        <div className="space-y-12">
                            {[1, 2].map(o => (
                                <div key={o} className="flex justify-between items-center py-16 bg-white rounded-[4rem] border-8 border-[#2d3a3a]/5 hover:bg-[#faf9f6] hover:border-[#22c55e]/30 px-16 transition-all group relative overflow-hidden shadow-sm hover:shadow-2xl">
                                    <div className="absolute left-0 top-0 w-4 h-full bg-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="space-y-4">
                                        <p className="text-4xl font-black uppercase tracking-tight italic group-hover:text-[#22c55e] transition-colors text-[#2d3a3a]">HARVEST_GR_8820{o}</p>
                                        <p className="text-[10px] font-black opacity-30 uppercase italic">LOG_MERGED // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-5xl font-black italic text-[#2d2d2d]">$12.75</p>
                                        <span className="bg-[#2d3a3a] text-white text-[10px] font-black px-12 py-4 uppercase tracking-widest italic rounded-[3rem] group-hover:bg-[#22c55e] transition-all">STOCKED</span>
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
