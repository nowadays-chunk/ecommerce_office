"use client";

import React from 'react';

export default function ApexAnalytics() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-4 border-[#ff3e3e]/20 p-12 flex flex-col justify-between shadow-[0_0_50px_rgba(255,62,62,0.1)] relative z-20">
                <div className="space-y-12">
                    <div className="w-24 h-4 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] skew-x-[-12deg] shadow-[0_0_30px_#ff3e3e]"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">A_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/apex/backoffice/dashboard" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">MISSION_SYNC</a>
                        <a href="/variances/apex/backoffice/products" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">HARDWARE_VAULT</a>
                        <a href="/variances/apex/backoffice/orders" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">DEPLOY_LOGS</a>
                        <a href="/variances/apex/backoffice/marketing" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">SQUAD_NETWORK</a>
                        <a href="#" className="block text-white border-b-4 border-[#ff3e3e] pb-2">SYNC_METRICS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.5em] italic text-center text-[#ff3e3e]">
                    NEURAL_ENGINE_v8.01.XP
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#0a0a0f]">
                <header className="flex justify-between items-center border-4 border-[#ff3e3e]/20 p-16 shadow-[0_0_100px_rgba(255,62,62,0.1)] -skew-x-6 transform bg-black">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/60 italic">INTEL_OVERSIGHT // SYNC_METRICS_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic text-white">THE_MISSION_METRICS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all transform hover:skew-x-12 shadow-[0_0_50px_rgba(255,62,62,0.4)]">GENERATE_TECH_REPORT</button>
                </header>

                <section className="grid grid-cols-4 gap-4 -skew-x-12">
                    {[
                        { label: 'MISSION_VAL', val: '$8.4B' },
                        { label: 'SYNC_RATE', val: '99.99%' },
                        { label: 'SQUAD_LOAD', val: '42%' },
                        { label: 'VELOCITY', val: 'MAX' }
                    ].map((m, i) => (
                        <div key={i} className="bg-black border-4 border-[#ff3e3e]/40 p-12 space-y-8 group hover:border-white transition-colors cursor-pointer">
                            <p className="text-xl font-black text-[#ff3e3e] group-hover:text-white">{m.label}</p>
                            <h3 className="text-5xl font-black tracking-tighter text-white">{m.val}</h3>
                        </div>
                    ))}
                </section>

                <section className="bg-black p-20 -skew-x-12 shadow-[0_0_150px_rgba(255,62,62,0.15)] h-[30rem] border-4 border-[#ff3e3e]/10 relative overflow-hidden flex flex-col justify-between group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff3e3e]/40">
                        <span>TACTICAL_FLOW_VISUALIZATION</span>
                        <span className="animate-pulse">DECRYPTING_OVERSIGHT...</span>
                    </div>
                    <div className="flex-1 flex items-end space-x-1 py-12">
                        {[80, 40, 60, 90, 30, 100, 50, 70, 85, 45, 95, 65, 55, 110, 75, 120].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#ff3e3e]/10 hover:bg-[#ff3e3e] transition-all group-hover:animate-shimmer"></div>
                        ))}
                    </div>
                    <p className="text-[10px] font-black opacity-20 uppercase tracking-[0.8em] text-center italic text-[#ff3e3e]">NEURAL_DATA_SYNC_PROTOCOL_XP</p>
                </section>
            </main>
        </div>
    );
}
