"use client";

import React from 'react';

export default function GrubOrderManagement() {
    const harvests = [
        { id: 'GR-ORD-4402', tribe: 'Green_Finger_8', energy: '$145', status: 'Sprouting' },
        { id: 'GR-ORD-4389', tribe: 'Wild_One', energy: '$82', status: 'Rooted' },
        { id: 'GR-ORD-4100', tribe: 'Hive_Master', energy: '$420', status: 'Harvested' },
    ];

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
                        <a href="#" className="block text-[#22c55e] underline decoration-8 underline-offset-8">SOIL_LOGS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">TRIBE_NETWORK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">ROOT_METRICS</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e] italic">FIELD_LOGISTICS // HARVEST_SYNC_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic">THE_SOIL_LOGS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-[#2d3a3a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#22c55e] transition-all shadow-2xl relative z-10">ROOT_LEDGER</button>
                </header>

                <section className="bg-white p-20 rounded-[6rem] shadow-2xl border-8 border-white space-y-16 relative overflow-hidden">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#2d3a3a]/40">
                        <div className="space-x-12">
                            <button className="text-[#22c55e] border-b-8 border-[#22c55e] pb-1">ALL_SOIL_LOGS</button>
                            <button className="hover:text-[#2d3a3a] transition-colors">ACTIVE_ROOTS</button>
                            <button className="hover:text-[#2d3a3a] transition-colors">ARCHIVED</button>
                        </div>
                        <div className="italic">GATHERING_LOGISTICS_WHISPER...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-8">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest opacity-40">
                                <th className="px-10 pb-6">SYNC_ID</th>
                                <th className="px-10 pb-6">TRIBE_ENTITY</th>
                                <th className="px-10 pb-6">ENERGY_TOTAL</th>
                                <th className="px-10 pb-6">ROOT_STATUS</th>
                                <th className="px-10 pb-6 text-right">MANIFEST</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase text-[#2d3a3a]">
                            {harvests.map((h) => (
                                <tr key={h.id} className="bg-[#faf9f6]/40 hover:bg-[#22c55e]/5 transition-colors group">
                                    <td className="p-10 rounded-l-[4rem]">#{h.id}</td>
                                    <td className="p-10">{h.tribe}</td>
                                    <td className="p-10">{h.energy}</td>
                                    <td className="p-10 text-[#22c55e]">{h.status}</td>
                                    <td className="p-10 rounded-r-[4rem] text-right">
                                        <button className="text-xl bg-[#22c55e] text-white px-8 py-2 rounded-full transform -rotate-1">VIEW_FIELD_LOG</button>
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
