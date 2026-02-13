"use client";

import React from 'react';

export default function GrubAnalytics() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-black italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r-8 border-white p-12 flex flex-col justify-between shadow-2xl relative z-20">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-[#22c55e] rounded-full shadow-[0_0_30px_#22c55e44] animate-pulse"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">G_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/grub/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">FIELD_SYNC</a>
                        <a href="/variances/grub/backoffice/products" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">HARVEST_INVENTORY</a>
                        <a href="/variances/grub/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">SOIL_LOGS</a>
                        <a href="/variances/grub/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">COMMUNAL_GAMES</a>
                        <a href="#" className="block text-[#22c55e] underline decoration-8 underline-offset-8">ROOT_DATA</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.6em] italic text-center text-[#22c55e]">
                    FRESH_ENGINE_v2.01
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#faf9f6]">
                <header className="flex justify-between items-center bg-white p-16 rounded-[5rem] shadow-2xl border-8 border-white group relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-2 relative z-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e] italic">FIELD_INTELLIGENCE // HARVEST_METRICS_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic">THE_ROOT_DATA.</h1>
                    </div>
                    <button className="px-16 py-8 bg-[#2d3a3a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#22c55e] transition-all shadow-2xl relative z-10">ROOT_LEDGER</button>
                </header>

                <section className="grid grid-cols-3 gap-12">
                    <div className="bg-white p-16 rounded-[4rem] shadow-2xl border-8 border-white space-y-8 text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">HARVEST_VALUATION</p>
                        <h3 className="text-6xl font-black tracking-tighter">$124,500</h3>
                    </div>
                    <div className="bg-white p-16 rounded-[4rem] shadow-2xl border-8 border-white space-y-8 text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">SOIL_EFFICIENCY</p>
                        <h3 className="text-6xl font-black tracking-tighter">94%</h3>
                    </div>
                    <div className="bg-white p-16 rounded-[4rem] shadow-2xl border-8 border-white space-y-8 text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">TRIBE_NODES</p>
                        <h3 className="text-6xl font-black tracking-tighter">42</h3>
                    </div>
                </section>

                <section className="bg-white p-20 rounded-[6rem] shadow-2xl border-8 border-white h-[28rem] relative overflow-hidden flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#22c55e]">
                        <span>HARVEST_GROWTH_CYCLE</span>
                        <span className="animate-pulse">GROWING...</span>
                    </div>
                    <div className="flex-1 flex items-end space-x-2 py-12">
                        {[40, 70, 45, 90, 60, 100, 50, 80, 75, 95, 40, 110].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#22c55e]/10 hover:bg-[#22c55e] transition-all rounded-full"></div>
                        ))}
                    </div>
                    <p className="text-[10px] font-black opacity-20 uppercase tracking-[0.6em] text-center italic">FIELD_DATA_SYNC_COMPLETE</p>
                </section>
            </main>
        </div>
    );
}
