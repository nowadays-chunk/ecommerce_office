"use client";

import React from 'react';

export default function HypeLocalization() {
    const markets = [
        { id: 'HY-MKT-01', node: 'EURO_GRID', currency: 'EUR_XP', status: 'LOCKED' },
        { id: 'HY-MKT-02', node: 'DOLLAR_SYSTEM', currency: 'USD_XP', status: 'STORMING' },
        { id: 'HY-MKT-03', node: 'YEN_NETWORK', currency: 'JPY_XP', status: 'BOOTING' },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-8 border-white p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-white text-black font-black flex items-center justify-center text-4xl -skew-x-12">H_A</div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase -skew-x-12">GRID_CONTROL.</h2>
                    <nav className="space-y-8 text-xl font-black uppercase tracking-tighter">
                        <a href="/variances/hype/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-all">01_METRICS</a>
                        <a href="/variances/hype/backoffice/settings" className="block opacity-40 hover:opacity-100 transition-all">06_NODE_CONFIG</a>
                        <a href="#" className="block bg-[#ff0000] text-white px-4 py-1 -skew-x-6">07_REGION_SYNC</a>
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
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">REGION_OVERSIGHT // GRID_MARKETS_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-none -skew-x-12">THE_REGION_SYNC.</h1>
                    </div>
                    <button className="px-16 py-6 border-8 border-white text-white text-4xl font-black uppercase tracking-tighter -skew-x-12 hover:bg-white hover:text-black transition-all">INHIBIT_FX_STORM</button>
                </header>

                <section className="border-8 border-white p-16 space-y-16">
                    <div className="flex justify-between items-center text-2xl font-black uppercase tracking-tighter border-b-8 border-white pb-4">
                        <div className="space-x-12">
                            <button className="bg-white text-black px-6 py-1 -skew-x-6">NODE_EXCHANGES</button>
                            <button className="opacity-40">GLOSSARY_PURGE</button>
                            <button className="opacity-40">TRANS_LOGS</button>
                        </div>
                        <div className="opacity-20 italic">MAP_TRAFFIC_ANALYSIS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-2xl font-black uppercase tracking-tighter border-b-8 border-white">
                                <th className="pb-8">GRID_ID</th>
                                <th className="pb-8">NODE_LOCUS</th>
                                <th className="pb-8">CURR_ENGINE</th>
                                <th className="pb-8">SYNC_STATUS</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase">
                            {markets.map((m) => (
                                <tr key={m.id} className="border-b-4 border-white/10 group hover:bg-[#ff0000] transition-colors">
                                    <td className="py-12">#{m.id}</td>
                                    <td className="py-12">{m.node}</td>
                                    <td className="py-12 text-[#ff0000] group-hover:text-black">{m.currency}</td>
                                    <td className="py-12 text-sm">{m.status}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-xl bg-white text-black px-8 py-2 -skew-x-12 group-hover:bg-black group-hover:text-white">REBOOT_FX</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-8 -skew-x-6">
                    <div className="border-8 border-white p-12 space-y-6 bg-white text-black">
                        <h3 className="text-xl font-black uppercase tracking-widest">MASTER_NODE_LANGUAGE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-5xl font-black uppercase italic">Brutal_English</p>
                            <button className="text-[#ff0000] text-xl font-black underline decoration-4 underline-offset-4">SHRED_TEXT</button>
                        </div>
                    </div>
                    <div className="border-8 border-white p-12 space-y-6 bg-black text-white">
                        <h3 className="text-xl font-black uppercase tracking-widest">QUANTUM_VAL_SYNC</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-5xl font-black uppercase italic">LIVE_DECODE</p>
                            <div className="w-24 h-8 bg-[#ff0000] -skew-x-12 flex items-center justify-center font-black">ACTIVE</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
