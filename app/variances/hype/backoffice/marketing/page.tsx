"use client";

import React from 'react';

export default function HypeMarketing() {
    const drops = [
        { id: 'HY-MKT-99', code: 'INDUSTRIAL_SYNC', reward: '32% Grid Discount', status: 'LIVE_STORM' },
        { id: 'HY-MKT-88', code: 'TECH_CHASSIS_X', reward: 'Free_Expansion_Unit', status: 'LOCKED' },
        { id: 'HY-MKT-77', code: 'BRUTAL_ACCESS', reward: 'Elite_Operative_Pass', status: 'OFFLINE' },
    ];

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
                        <a href="#" className="block bg-white text-black px-4 py-1 -skew-x-6">04_CAMPAIGNS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">05_LOGS</a>
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
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">CAMPAIGN_OVERSIGHT // GRID_DROP_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-none -skew-x-12">THE_DROP_CODES.</h1>
                    </div>
                    <button className="px-16 py-6 border-8 border-white text-white text-4xl font-black uppercase tracking-tighter -skew-x-12 hover:bg-white hover:text-black transition-all">INITIATE_CODE_STORM</button>
                </header>

                <section className="border-8 border-white p-16 space-y-16">
                    <div className="flex justify-between items-center text-2xl font-black uppercase tracking-tighter">
                        <div className="space-x-12">
                            <button className="bg-white text-black px-6 py-1 -skew-x-6">ALL_LOGS</button>
                            <button className="opacity-40 hover:opacity-100">LIVE_STORMS</button>
                            <button className="opacity-40 hover:opacity-100">ARCHIVED</button>
                        </div>
                        <div className="opacity-20 italic">ENCRYPTING_PROMO_STREAM...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-2xl font-black uppercase tracking-tighter border-b-8 border-white">
                                <th className="pb-8">DROP_ID</th>
                                <th className="pb-8">GRID_CODE</th>
                                <th className="pb-8">REWARD_SPEC</th>
                                <th className="pb-8">SYNC_STATUS</th>
                                <th className="pb-8 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase">
                            {drops.map((d) => (
                                <tr key={d.id} className="border-b-4 border-white/10 group hover:bg-white hover:text-black transition-colors">
                                    <td className="py-12">#{d.id}</td>
                                    <td className="py-12 underline decoration-8 decoration-white/10 group-hover:decoration-black/20">{d.code}</td>
                                    <td className="py-12">{d.reward}</td>
                                    <td className="py-12 text-sm">{d.status}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-xl underline decoration-8 decoration-white/20 hover:decoration-black/20">EDIT</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
