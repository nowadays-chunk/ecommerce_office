"use client";

import React from 'react';

export default function FitAnalytics() {
    return (
        <div className="min-h-screen bg-white text-black font-sans italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black text-white border-r-[12px] border-black p-12 flex flex-col justify-between -skew-x-2 transform origin-top h-full">
                <div className="space-y-24">
                    <div className="w-24 h-4 bg-[#ff0000] skew-x-[-12deg] shadow-[0_0_30px_#ff0000]"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">F_ADMIN.</h2>
                    <nav className="space-y-12 text-[14px] font-black uppercase tracking-widest -skew-x-12">
                        <a href="/variances/fit/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">ENGINE_SYNC</a>
                        <a href="/variances/fit/backoffice/products" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">HARDWARE_DATA</a>
                        <a href="/variances/fit/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">VELOCITY_LOGS</a>
                        <a href="/variances/fit/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">SQUAD_PROMOS</a>
                        <a href="#" className="block bg-[#ff0000] text-white px-8 py-4 shadow-[10px_10px_0px_#fff]">DATA_ENGINE</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] italic border-t-8 border-white/10 pt-8">
                    ELITE_ENGINE_v8.01.XP
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto bg-white">
                <header className="flex justify-between items-center border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(255,0,0,0.15)] -skew-x-6 transform bg-white">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">GRID_INTELLIGENCE // VELOCITY_SYNC_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">THE_DATA_ENGINE.</h1>
                    </div>
                    <button className="px-16 py-8 bg-black text-white text-[16px] font-black uppercase tracking-widest hover:scale-110 transition-all transform hover:skew-x-12 shadow-2xl">INITIATE_FULL_SCAN</button>
                </header>

                <section className="grid grid-cols-4 gap-4 -skew-x-2">
                    {[
                        { label: 'VELOCITY_VAL', val: '$4.2B' },
                        { label: 'SYNC_RATE', val: '99.9%' },
                        { label: 'SQUAD_COUNT', val: '842' },
                        { label: 'HARDWARE_LOAD', val: '12%' }
                    ].map((m, i) => (
                        <div key={i} className="border-8 border-black p-12 space-y-8 bg-black text-white group hover:bg-[#ff0000] transition-colors">
                            <p className="text-xl font-black">{m.label}</p>
                            <h3 className="text-5xl font-black tracking-tighter -skew-x-6 italic">{m.val}</h3>
                        </div>
                    ))}
                </section>

                <section className="bg-white border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] h-96 relative overflow-hidden flex flex-col justify-between -skew-x-1 group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-black">
                        <span>GRID_TRAFFIC_LIVE_FEED</span>
                        <span className="animate-pulse text-[#ff0000]">OPTIMIZING_GRID...</span>
                    </div>
                    <div className="flex-1 flex items-end space-x-1 py-12">
                        {[60, 40, 80, 50, 90, 30, 100, 45, 85, 55, 110, 75, 95, 65, 120].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-black/5 hover:bg-black transition-all -skew-x-12"></div>
                        ))}
                    </div>
                    <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] text-center italic">ELITE_DATA_SYNC_PROTOCOL_V8</p>
                </section>
            </main>
        </div>
    );
}
