"use client";

import React from 'react';

export default function GlintAnalytics() {
    return (
        <div className="min-h-screen bg-[#fffafd] text-[#4a3a4a] font-light italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#ff8fa3]/10 p-12 flex flex-col justify-between shadow-2xl relative">
                <div className="space-y-12">
                    <div className="w-16 h-px bg-[#ff8fa3] shadow-[0_0_20px_#ff8fa3] mb-8"></div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">GL_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest text-[#ff8fa3]/60">
                        <a href="/variances/glint/backoffice/dashboard" className="block opacity-40 hover:text-[#4a3a4a] transition-all">LUMEN_VIEW</a>
                        <a href="/variances/glint/backoffice/products" className="block opacity-40 hover:text-[#4a3a4a] transition-all">AURA_VAULT</a>
                        <a href="/variances/glint/backoffice/orders" className="block opacity-40 hover:text-[#4a3a4a] transition-all">RITUAL_LOGS</a>
                        <a href="/variances/glint/backoffice/marketing" className="block opacity-40 hover:text-[#4a3a4a] transition-all">MEMBER_REFRACTION</a>
                        <a href="#" className="block text-[#4a3a4a] border-b border-[#ff8fa3] pb-2">SHIMMER_STATS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] italic">
                    LUMEN_SYNC_v8.0
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24 bg-[#fffafd] relative overflow-y-auto h-screen">
                <header className="flex justify-between items-end border-b border-[#ff8fa3]/20 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#ff8fa3]/60">INTEL_OVERSIGHT // SHIMMER_SYNC_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic text-[#4a3a4a]">THE_SHIMMER_STATS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#4a3a4a] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:bg-[#ff8fa3] transition-all shadow-2xl">LUMEN_REPORT</button>
                </header>

                <section className="grid grid-cols-2 gap-16">
                    <div className="bg-white/60 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#ff8fa3]/10 space-y-12">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">TOTAL_LUMEN_VALUATION</p>
                        <h3 className="text-7xl font-black italic tracking-tighter">$1,240,000</h3>
                        <div className="h-2 bg-[#ff8fa3]/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#ff8fa3] to-[#ffb3c1] w-[78%] animate-pulse"></div>
                        </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#ff8fa3]/10 space-y-12">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]">AURA_CONVERSION_RATE</p>
                        <h3 className="text-7xl font-black italic tracking-tighter">12.4%</h3>
                        <div className="flex space-x-2 h-20 items-end">
                            {[30, 60, 45, 90, 55, 100, 70].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#ff8fa3]/20 rounded-full hover:bg-[#ff8fa3] transition-colors"></div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white/40 backdrop-blur-xl p-20 rounded-[5rem] shadow-2xl border border-[#ff8fa3]/10 h-80 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#ff8fa3]/40">
                        <span>RITUAL_GROWTH_REFRACTION</span>
                        <span>SYNCING_WITH_AETHER...</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ff8fa3] to-transparent animate-pulse"></div>
                    </div>
                    <p className="text-[10px] font-black opacity-20 uppercase tracking-[1em] text-center italic">SHIMMER_DATA_PROTOCOL_ACTIVE</p>
                </section>
            </main>
        </div>
    );
}
