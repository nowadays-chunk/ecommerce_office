"use client";

import React from 'react';

export default function HypeAnalytics() {
    return (
        <div className="min-h-screen bg-black text-white font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-8 border-white p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-white text-black font-black flex items-center justify-center text-4xl -skew-x-12">H_A</div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase -skew-x-12">GRID_CONTROL.</h2>
                    <nav className="space-y-8 text-xl font-black uppercase tracking-tighter">
                        <a href="/variances/hype/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">01_METRICS</a>
                        <a href="/variances/hype/backoffice/products" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">02_INVENTORY</a>
                        <a href="/variances/hype/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">03_DISPATCH</a>
                        <a href="/variances/hype/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">04_CAMPAIGNS</a>
                        <a href="#" className="block bg-white text-black px-4 py-1 -skew-x-6">05_GRID_DATA</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.5em] -rotate-90 origin-left translate-y-24 translate-x-4">
                    DISRUPTIVE_ENGINE_v3.02
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 overflow-y-auto h-screen">
                <header className="flex justify-between items-start border-b-8 border-white pb-12">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">GRID_INTELLIGENCE // DATA_STORM_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-none -skew-x-12">THE_GRID_DATA.</h1>
                    </div>
                    <button className="px-16 py-6 bg-[#ff0000] text-white text-4xl font-black uppercase tracking-tighter -skew-x-12 hover:scale-110 transition-transform">PURGE_LEGACY_LOGS</button>
                </header>

                <section className="grid grid-cols-4 gap-4">
                    {[
                        { label: 'GRID_TRAFFIC', val: '1.2M' },
                        { label: 'SYNC_RATE', val: '98.2%' },
                        { label: 'ERROR_LOGS', val: '0.01%' },
                        { label: 'VALUATION', val: '$4.2B' }
                    ].map((m, i) => (
                        <div key={i} className="border-8 border-white p-12 space-y-8 group hover:bg-white hover:text-black transition-colors">
                            <p className="text-xl font-black">{m.label}</p>
                            <h3 className="text-6xl font-black tracking-tighter -skew-x-12">{m.val}</h3>
                        </div>
                    ))}
                </section>

                <section className="border-8 border-white p-16 space-y-16 relative overflow-hidden h-96">
                    <div className="flex justify-between items-center text-2xl font-black uppercase tracking-tighter">
                        <span>GRID_STORM_VISUALIZATION</span>
                        <span className="animate-pulse text-[#ff0000]">LIVE_FEED</span>
                    </div>
                    <div className="flex-1 flex items-end space-x-2 h-full pb-12">
                        {[80, 40, 60, 90, 30, 100, 50, 70, 85, 45, 95, 65, 55, 110, 75].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-white hover:bg-[#ff0000] transition-colors -skew-x-12"></div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
