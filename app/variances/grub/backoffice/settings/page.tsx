"use client";

import React from 'react';

export default function GrubSettings() {
    const tribe = [
        { id: 'GR-ADM-01', name: 'Green_Finger', role: 'ROOT_MASTER', power: 'FULL_CONTROL' },
        { id: 'GR-ADM-08', name: 'Harvest_Hannah', role: 'SEED_SORTER', power: 'INVENTORY' },
        { id: 'GR-ADM-12', name: 'Soil_Sam', role: 'FIELD_SCOUT', power: 'ORDER_LOGS' },
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
                        <a href="/variances/grub/backoffice/orders" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">SOIL_LOGS</a>
                        <a href="/variances/grub/backoffice/marketing" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">COMMUNAL_GAMES</a>
                        <a href="/variances/grub/backoffice/analytics" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">ROOT_DATA</a>
                        <a href="#" className="block text-[#22c55e] underline decoration-8 underline-offset-8">FIELD_CONFIG</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e] italic">ROOT_OVERSIGHT // FIELD_SYNC_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic">THE_FIELD_CONFIG.</h1>
                    </div>
                    <button className="px-16 py-8 bg-[#2d3a3a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#22c55e] transition-all shadow-2xl relative z-10">INVITE_SCOUT</button>
                </header>

                <section className="bg-white p-16 rounded-[5rem] shadow-2xl border-8 border-white space-y-12 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#22c55e]/40 italic px-4">
                        <div className="space-x-12">
                            <button className="text-[#2d3a3a] border-b-8 border-[#22c55e]">ALL_SCOUTS</button>
                            <button>ROOT_LEVELS</button>
                            <button>FIELD_LOGS</button>
                        </div>
                        <div>ROOTING_STAFF_IDS...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#22c55e] border-b-8 border-[#faf9f6]">
                                <th className="pb-8">SCOUT_ID</th>
                                <th className="pb-8">ENTITY_NAME</th>
                                <th className="pb-8">FIELD_ROLE</th>
                                <th className="pb-8">ROOT_POWER</th>
                                <th className="pb-8 text-right">MANIFEST</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase">
                            {tribe.map((m) => (
                                <tr key={m.id} className="border-b-8 border-[#faf9f6] hover:bg-[#22c55e]/10 transition-all cursor-pointer group">
                                    <td className="py-12">#{m.id}</td>
                                    <td className="py-12 underline decoration-8 decoration-[#22c55e11] group-hover:decoration-[#22c55e33]">{m.name}</td>
                                    <td className="py-12 text-[#22c55e]">{m.role}</td>
                                    <td className="py-12 text-sm text-[#2d3a3a44]">{m.power}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-sm bg-[#2d3a3a] text-white px-8 py-2 rounded-full hover:bg-[#ff0000] transition-colors">PLUCK</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="bg-[#2d3a3a] text-white p-16 rounded-[6rem] space-y-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-x-0 top-0 h-4 bg-[#22c55e] opacity-20 animate-pulse"></div>
                    <h3 className="text-5xl font-black tracking-tighter uppercase italic leading-none">ROOT_INTEGRITY_SHIELD.</h3>
                    <p className="text-sm font-black opacity-60 leading-relaxed italic uppercase tracking-widest">
                        THE HARVEST IS PROTECTED BY ORGANIC PERMISSIONS. ANY MANIPULATION OF THE ROOT NODES REQUIRES TRIPLE-SIG CLEARANCE FROM THE GREEN FINGERS. ALL FIELD ACTIONS ARE PRESERVED IN THE SOIL LOGS FOREVER.
                    </p>
                </div>
            </main>
        </div>
    );
}
