"use client";

import React from 'react';

export default function NordicAnalytics() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans flex">
            {/* Sidebar */}
            <aside className="w-80 border-r border-[#2d2d2d]/10 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-8 h-px bg-[#2d2d2d]/40"></div>
                    <h2 className="text-3xl font-light uppercase tracking-tight">STUDIO_OPS.</h2>
                    <nav className="space-y-8 text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 italic">
                        <a href="/variances/nordic/backoffice/dashboard" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">UTILITY_VIEW</a>
                        <a href="/variances/nordic/backoffice/products" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">MATERIAL_STOCK</a>
                        <a href="/variances/nordic/backoffice/orders" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">CRAFT_LOGS</a>
                        <a href="/variances/nordic/backoffice/marketing" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">PROMO_STUDIO</a>
                        <a href="#" className="block text-[#2d2d2d]">UTILITY_STATS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-20 uppercase tracking-[0.4em] italic">
                    STUDIO_EFFICIENCY_v1.01
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-[#2d2d2d]/10 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">INTEL_VAULT // STUDIO_SYNC_LIVE</p>
                        <h1 className="text-6xl font-light uppercase tracking-tight leading-none">THE_UTILITY_STATS.</h1>
                    </div>
                    <button className="px-12 py-5 border-2 border-[#2d2d2d] text-[#2d2d2d] text-[10px] font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all">MATERIAL_LEDGER</button>
                </header>

                <section className="grid grid-cols-3 gap-8">
                    <div className="border border-[#2d2d2d]/10 p-12 space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">STUDIO_VALUATION</p>
                        <h3 className="text-4xl font-light">€142,500</h3>
                    </div>
                    <div className="border border-[#2d2d2d]/10 p-12 space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">MATERIAL_EFFICIENCY</p>
                        <h3 className="text-4xl font-light">92%</h3>
                    </div>
                    <div className="border border-[#2d2d2d]/10 p-12 space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">CRAFT_CYCLES</p>
                        <h3 className="text-4xl font-light">128</h3>
                    </div>
                </section>

                <section className="border border-[#2d2d2d]/10 p-16 h-80 flex flex-col justify-between">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
                        <span>CRAFT_LOG_DENSITY</span>
                        <span>SYNC_STATUS: 100%</span>
                    </div>
                    <div className="flex-1 flex items-end justify-between border-b border-[#2d2d2d]/10 pb-4">
                        {[10, 40, 20, 60, 30, 80, 50, 90, 70, 100].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="w-12 bg-[#2d2d2d]/5 hover:bg-[#2d2d2d] transition-colors"></div>
                        ))}
                    </div>
                    <p className="text-[10px] font-bold opacity-20 uppercase tracking-widest text-right mt-4 italic">UTILITY_TRENDS_ANALYZED...</p>
                </section>
            </main>
        </div>
    );
}
