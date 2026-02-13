"use client";

import React from 'react';

export default function WildAnalytics() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#2d2a22] font-serif italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#8b7e66]/10 p-12 flex flex-col justify-between shadow-2xl relative z-20">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-white border border-[#2d2a22]/10 rounded-full flex items-center justify-center shadow-xl">
                        <div className="w-2 h-2 bg-[#2d2a22]"></div>
                    </div>
                    <h2 className="text-4xl font-light tracking-tighter uppercase italic leading-none">W_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-bold uppercase tracking-widest text-[#8b7e66]">
                        <a href="/variances/wild/backoffice/dashboard" className="block opacity-40 hover:text-[#2d2a22] transition-colors">STILL_VIEW</a>
                        <a href="/variances/wild/backoffice/products" className="block opacity-40 hover:text-[#2d2a22] transition-colors">RAW_INVENTORY</a>
                        <a href="/variances/wild/backoffice/orders" className="block opacity-40 hover:text-[#2d2a22] transition-colors">WHISPER_LOGS</a>
                        <a href="/variances/wild/backoffice/marketing" className="block opacity-40 hover:text-[#2d2a22] transition-colors">TRIBAL_NODES</a>
                        <a href="#" className="block text-[#2d2a22] border-b border-[#2d2a22] pb-2">ROOT_METRICS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.8em] italic text-center">
                    STILL_ENGINE_v1.0.RAW
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#f4f1ea]">
                <header className="flex justify-between items-center bg-white/40 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#8b7e66]/10 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#8b7e66]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-2 relative z-10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8b7e66] italic">INTEL_OVERSIGHT // STILL_METRICS_LIVE</p>
                        <h1 className="text-7xl font-light tracking-tighter uppercase leading-none italic text-[#2d2a22]">THE_ROOT_METRICS.</h1>
                    </div>
                    <button className="px-16 py-8 border border-[#2d2a22] text-[#2d2a22] text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-[#2d2a22] hover:text-[#f4f1ea] transition-all relative z-10">STILL_REPORT</button>
                </header>

                <section className="grid grid-cols-3 gap-12">
                    <div className="bg-white/40 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#8b7e66]/20 space-y-8 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">STILL_VALUATION</p>
                        <h3 className="text-6xl font-light tracking-tighter">8.4 ETH</h3>
                    </div>
                    <div className="bg-white/40 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#8b7e66]/20 space-y-8 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">ROOT_SYNC_LEVEL</p>
                        <h3 className="text-6xl font-light tracking-tighter">92%</h3>
                    </div>
                    <div className="bg-white/40 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-[#8b7e66]/20 space-y-8 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]">EARTH_RETENTION</p>
                        <h3 className="text-6xl font-light tracking-tighter">98.4</h3>
                    </div>
                </section>

                <section className="bg-white/40 backdrop-blur-xl p-20 rounded-[5rem] shadow-2xl border border-[#8b7e66]/10 h-80 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#8b7e66]/40">
                        <span>STILLNESS_GROWTH_CURVE</span>
                        <span className="animate-pulse italic">LISTENING...</span>
                    </div>
                    <div className="flex-1 flex items-end justify-between px-12 py-8">
                        {[10, 40, 20, 60, 30, 80, 50, 90, 70, 100].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="w-1 bg-[#2d2a22]/10 hover:bg-[#2d2a22] transition-all"></div>
                        ))}
                    </div>
                    <p className="text-[10px] font-bold opacity-20 uppercase tracking-[1em] text-center italic">STILL_DATA_PROTOCOL_ACTIVE</p>
                </section>
            </main>
        </div>
    );
}
