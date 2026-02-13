"use client";

import React from 'react';

export default function GlintProfile() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] p-12 lg:p-24 space-y-32 font-light italic">
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-[#ff8fa3]/20 pb-16 relative overflow-hidden group">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff8fa3]/10 blur-[150px] rounded-full group-hover:bg-[#ff8fa3]/20 transition-all duration-1000"></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-6">
                        <div className="w-16 h-[1px] bg-[#ff8fa3]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#ff8fa3]">Muse // Aura_Circle_Primary</span>
                    </div>
                    <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.85] uppercase italic text-[#4a3a4a]">CLARA_V.</h1>
                </div>
                <div className="text-right space-y-12 relative z-10">
                    <div className="bg-white border border-[#ff8fa3]/20 text-[#ff8fa3] px-12 py-8 text-4xl font-black uppercase tracking-tight rounded-[5rem] shadow-[0_40px_80px_-20px_rgba(255,143,163,0.2)] transform hover:rotate-3 transition-transform cursor-pointer">
                        TIER: RADIANT_ELITE
                    </div>
                    <p className="text-[10px] font-black uppercase opacity-40 italic mt-8 tracking-[0.6em]">AURA_IDENT: GL-882106</p>
                </div>
            </header>

            <main className="grid lg:grid-cols-4 gap-24 relative z-10 font-light">
                <aside className="space-y-24 border-r border-[#ff8fa3]/10 pr-12 h-fit">
                    <nav className="flex flex-col space-y-12 text-5xl font-light italic">
                        {['Overview', 'Acquisition', 'Aura Sync', 'Ritual Set', 'Fade'].map(link => (
                            <a key={link} href="#" className="hover:text-[#ff8fa3] transition-all hover:translate-x-12 duration-500 uppercase flex items-center gap-6 group/link">
                                <span className="w-6 h-6 rounded-full border border-[#ff8fa3] group-hover:bg-[#ff8fa3] transition-all"></span>
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="p-16 bg-white rounded-[5rem] border border-[#ff8fa3]/10 space-y-10 shadow-[0_60px_120px_-30px_rgba(255,143,163,0.1)] text-center group">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]/60 italic">GLOW_LUMENS</h3>
                        <p className="text-8xl font-black italic uppercase leading-none text-[#4a3a4a] group-hover:scale-110 transition-transform duration-1000">1,842</p>
                        <div className="w-full bg-[#ff8fa3]/5 h-3 border border-[#ff8fa3]/20 rounded-full overflow-hidden">
                            <div className="w-[82%] bg-gradient-to-r from-[#ff8fa3] to-[#ffb3c1] h-full shadow-[0_0_30px_#ff8fa3]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black opacity-60 uppercase italic tracking-widest text-[#ff8fa3]">
                            <span>SIGNAL_PEAK</span>
                            <span className="animate-pulse">Active_Luminescence</span>
                        </div>
                    </div>
                </aside>

                <section className="lg:col-span-3 space-y-32">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-16 bg-white rounded-[5rem] border border-[#ff8fa3]/10 space-y-12 relative overflow-hidden group hover:border-[#ff8fa3]/40 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-10 text-[10px] font-black text-[#ff8fa3] opacity-20 uppercase italic">LATEST_RITUAL</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#4a3a4a]/40 italic text-center">LATEST_SYNC</h3>
                            <div className="flex gap-12 items-center relative z-10 justify-center">
                                <div className="w-40 h-40 bg-[#fffafd] rounded-[3.5rem] border border-[#ff8fa3]/10 p-10 flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-1000">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff8fa3]/10 to-transparent"></div>
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain mix-blend-multiply transition-all duration-700" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-black italic uppercase leading-none text-[#4a3a4a]">AURA_MD_99</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#ff8fa3]">Fused // Feb 12</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-16 bg-white rounded-[5rem] border border-[#ff8fa3]/10 space-y-12 relative overflow-hidden group hover:border-[#ff8fa3]/40 transition-all duration-700 shadow-sm hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-10 text-[10px] font-black text-[#ff8fa3] opacity-20 uppercase italic">SAVED_AURA</div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#4a3a4a]/40 italic text-center">CACHED_MUSE</h3>
                            <div className="flex gap-12 items-center relative z-10 justify-center">
                                <div className="w-40 h-40 bg-[#fffafd] rounded-[3.5rem] border border-[#ff8fa3]/10 p-10 flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-1000">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff8fa3]/10 to-transparent"></div>
                                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d521?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-5xl font-black italic uppercase leading-none text-[#4a3a4a]">CORE_GLOW_42</p>
                                    <p className="text-xs font-black opacity-40 uppercase italic mt-4 text-[#ff8fa3]">Seeking_Radiance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24">
                        <header className="flex justify-between items-end border-b border-[#ff8fa3]/10 pb-12 relative">
                            <div className="absolute bottom-[-2px] left-0 w-64 h-2 bg-[#ff8fa3] shadow-[0_0_50px_rgba(255,143,163,0.5)] rounded-full"></div>
                            <h2 className="text-7xl font-black italic tracking-tighter uppercase text-[#4a3a4a]">ACQUISITION.</h2>
                            <p className="text-[10px] font-black text-[#ff8fa3]/40 italic tracking-[0.5em]">RECORDS_FOUND: GL-124</p>
                        </header>
                        <div className="space-y-10">
                            {[1, 2].map(o => (
                                <div key={o} className="flex justify-between items-center py-16 bg-white border border-[#ff8fa3]/5 rounded-[4rem] hover:bg-[#fffafd] hover:border-[#ff8fa3]/30 px-16 transition-all group relative overflow-hidden shadow-sm hover:shadow-2xl">
                                    <div className="absolute left-0 top-0 w-2 h-full bg-[#ff8fa3] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="space-y-4">
                                        <p className="text-4xl font-black uppercase tracking-tight italic group-hover:text-[#ff8fa3] transition-colors text-[#4a3a4a]">ACQUIRE_GL_8820{o}</p>
                                        <p className="text-[10px] font-black opacity-30 uppercase italic text-[#ff8fa3]">SIGNAL_RADIANT // JAN {12 + o}, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-24 text-right">
                                        <p className="text-6xl font-black italic text-[#4a3a4a] tracking-tighter">$85.00</p>
                                        <span className="bg-[#ff8fa3] text-white text-[10px] font-black px-12 py-4 uppercase tracking-widest italic rounded-full group-hover:bg-[#4a3a4a] transition-all">LUMINOUS</span>
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
