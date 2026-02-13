"use client";

import React from 'react';

export default function LuxeAnalytics() {
    return (
        <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] font-serif flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-black/5 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <h2 className="text-3xl font-light italic uppercase tracking-tighter">LUXE_ADMIN.</h2>
                    <nav className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                        <a href="/variances/luxe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">01_OVERSIGHT</a>
                        <a href="/variances/luxe/backoffice/products" className="block opacity-40 hover:opacity-100 transition-opacity">02_COLLECTIONS</a>
                        <a href="/variances/luxe/backoffice/orders" className="block opacity-40 hover:opacity-100 transition-opacity">03_ACQUISITIONS</a>
                        <a href="/variances/luxe/backoffice/marketing" className="block opacity-40 hover:opacity-100 transition-opacity">04_PROMOTIONS</a>
                        <a href="#" className="block text-[#d4af37]">05_LEDGER_INSIGHTS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-widest italic">
                    V8.01_SECURE_NODE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-black/5 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">INTEL_OVERSIGHT // {new Date().getFullYear()}</p>
                        <h1 className="text-6xl font-light italic tracking-tighter uppercase leading-none">THE_LEDGER_INSIGHTS.</h1>
                    </div>
                    <button className="px-12 py-4 border border-black text-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">GENERATE_HERITAGE_REPORT</button>
                </header>

                <section className="grid grid-cols-3 gap-16">
                    <div className="bg-white p-12 border border-black/5 space-y-8">
                        <p className="text-sm opacity-40 uppercase tracking-tighter">TOTAL_ACQUISITION_VALUATION</p>
                        <h3 className="text-5xl font-light italic">€4,240,000</h3>
                        <div className="h-2 bg-[#d4af37]/10 w-full overflow-hidden">
                            <div className="h-full bg-[#d4af37] w-[72%]"></div>
                        </div>
                    </div>
                    <div className="bg-white p-12 border border-black/5 space-y-8">
                        <p className="text-sm opacity-40 uppercase tracking-tighter">ELITE_CONVERSION_RATE</p>
                        <h3 className="text-5xl font-light italic">8.2%</h3>
                        <div className="h-2 bg-black/5 w-full overflow-hidden">
                            <div className="h-full bg-black w-[45%]"></div>
                        </div>
                    </div>
                    <div className="bg-white p-12 border border-black/5 space-y-8">
                        <p className="text-sm opacity-40 uppercase tracking-tighter">CLIENT_RETENTION_INDEX</p>
                        <h3 className="text-5xl font-light italic">94.8</h3>
                        <div className="h-2 bg-black/5 w-full overflow-hidden">
                            <div className="h-full bg-black w-[94%]"></div>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-16 border border-black/5 space-y-12 h-96 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                        <span>QUARTERLY_ACQUISITION_FLOW</span>
                        <span>VALUATION_X_TIME</span>
                    </div>
                    <div className="flex-1 flex items-end justify-between space-x-4">
                        {[40, 70, 45, 90, 65, 80, 55, 100, 75, 85, 95, 110].map((h, i) => (
                            <div key={i} className="flex-1 bg-black/5 relative group">
                                <div
                                    style={{ height: `${h}%` }}
                                    className="absolute bottom-0 w-full bg-[#d4af37] opacity-20 group-hover:opacity-100 transition-opacity"
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-20">
                        <span>JAN</span>
                        <span>DEC</span>
                    </div>
                </section>
            </main>
        </div>
    );
}
