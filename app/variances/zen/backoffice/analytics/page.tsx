"use client";

import React from 'react';

export default function ZenAnalytics() {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d3a3a] font-serif italic flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-[#2d3a3a]/5 p-12 flex flex-col justify-between shadow-2xl">
                <div className="space-y-12">
                    <div className="w-12 h-12 bg-[#22c55e]/20 rounded-full mx-auto"></div>
                    <h2 className="text-3xl font-bold tracking-tighter uppercase italic text-center">ZEN_CORE.</h2>
                    <nav className="space-y-8 text-[10px] font-black uppercase tracking-widest">
                        <a href="/variances/zen/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">HARMONY_VIEW</a>
                        <a href="/variances/zen/backoffice/products" className="block opacity-40 hover:opacity-100 transition-opacity">GARDEN_STOCK</a>
                        <a href="/variances/zen/backoffice/orders" className="block opacity-40 hover:opacity-100 transition-opacity">SOUL_CYCLES</a>
                        <a href="/variances/zen/backoffice/marketing" className="block opacity-40 hover:opacity-100 transition-opacity">TRIBE_REWARDS</a>
                        <a href="#" className="block text-[#22c55e]">GROWTH_FLOW</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-[0.3em] text-center">
                    NATURAL_VIBRATION // v2.0
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-center bg-white p-12 rounded-[3rem] shadow-xl border-4 border-white">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e]">GROWTH_OVERSIGHT // OCT 12, 2025</p>
                        <h1 className="text-5xl font-bold tracking-tighter uppercase leading-none italic">THE_GROWTH_FLOW.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#22c55e] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#2d3a3a] transition-all shadow-lg">SOUL_REPORT</button>
                </header>

                <section className="grid grid-cols-2 gap-16">
                    <div className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-white space-y-12">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">COMMUNAL_ENERGY_TOTAL</p>
                        <h3 className="text-7xl font-bold italic tracking-tighter">$842,000</h3>
                        <div className="h-4 bg-[#faf9f6] rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#22c55e] to-[#4ade80] w-[85%]"></div>
                        </div>
                    </div>
                    <div className="bg-white p-16 rounded-[4rem] shadow-2xl border-4 border-white space-y-12">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">TRIBE_EXPANSION_RATE</p>
                        <h3 className="text-7xl font-bold italic tracking-tighter">+12.4%</h3>
                        <div className="flex space-x-4 h-32 items-end">
                            {[20, 45, 30, 60, 40, 80, 50].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#22c55e]/20 rounded-full"></div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white p-16 rounded-[5rem] shadow-2xl border-4 border-white space-y-12 h-80 relative overflow-hidden">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                        <span>VIBRATIONAL_SYNC_OVER_TIME</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <svg viewBox="0 0 1000 200" className="w-full">
                            <path d="M0,100 Q125,50 250,100 T500,100 T750,100 T1000,100" fill="none" stroke="#22c55e" strokeWidth="20" />
                        </svg>
                    </div>
                    <div className="relative z-10 flex h-full items-center justify-center text-3xl font-bold italic tracking-widest text-[#22c55e33]">
                        STEADY_NATURAL_FLOW...
                    </div>
                </section>
            </main>
        </div>
    );
}
