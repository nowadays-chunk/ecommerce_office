"use client";

import React from 'react';

export default function VibeAnalytics() {
    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r-8 border-[#ff4d6d1a] p-12 flex flex-col justify-between shadow-2xl relative">
                <div className="absolute top-0 right-0 w-8 h-full bg-[#ff4d6d]/5 animate-pulse"></div>
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-[#ff4d6d] rounded-full shadow-retro"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">V_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/vibe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">WAVE_SYNC</a>
                        <a href="/variances/vibe/backoffice/products" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">TAPE_STOCK</a>
                        <a href="/variances/vibe/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">SYNC_HISTORY</a>
                        <a href="/variances/vibe/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">VIBE_CAMPAIGNS</a>
                        <a href="#" className="block text-[#ff4d6d] underline decoration-4 underline-offset-8">WAVE_METRICS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.4em] italic text-center">
                    SATURED_ENGINE_v4.20
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto">
                <header className="flex justify-between items-center bg-white p-12 rounded-[4rem] shadow-retro border-4 border-[#ff4d6d1a] transform -rotate-1">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">ANALOG_INTEL // WAVE_METRICS_LIVE</p>
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none italic">THE_WAVE_STATS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#ff4d6d] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:scale-110 transition-all shadow-xl">EXPORT_WAVE_LEDGER</button>
                </header>

                <section className="grid grid-cols-2 gap-16">
                    <div className="bg-white p-16 rounded-[4rem] shadow-retro border-4 border-white space-y-8">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">TOTAL_WAVE_VALUATION</p>
                        <h3 className="text-7xl font-black tracking-tighter">$42,800</h3>
                    </div>
                    <div className="bg-white p-16 rounded-[4rem] shadow-retro border-4 border-white space-y-8">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">SATURATION_RATE</p>
                        <h3 className="text-7xl font-black tracking-tighter">88%</h3>
                    </div>
                </section>

                <section className="bg-white p-16 rounded-[5rem] shadow-retro border-4 border-white h-96 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff4d6d]">
                        <span>ANALOG_GROWTH_CURVE</span>
                        <span className="animate-pulse">RECORDING...</span>
                    </div>
                    <div className="flex-1 flex items-end space-x-1 py-8">
                        {[30, 70, 45, 90, 60, 100, 50, 80, 75, 95, 40, 110, 85, 120].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#ff4d6d]/10 hover:bg-[#ff4d6d] transition-all transform hover:scale-x-110"></div>
                        ))}
                    </div>
                    <p className="text-[10px] font-black opacity-20 uppercase tracking-[0.5em] text-center italic">LOFI_VIBE_ANALYSIS_COMPLETE</p>
                </section>
            </main>
        </div>
    );
}
