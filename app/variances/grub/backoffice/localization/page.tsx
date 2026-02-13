"use client";

import React from 'react';

export default function GrubLocalization() {
    const fields = [
        { id: 'GR-REG-01', field: 'Western_Gardens', token: 'ROOT_SOL', growth: 'Sprouting' },
        { id: 'GR-REG-02', field: 'Eastern_Fields', token: 'ROOT_USD', growth: 'Harvesting' },
        { id: 'GR-REG-03', field: 'Northern_Hills', token: 'ROOT_EUR', growth: 'Synced' },
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
                        <a href="/variances/grub/backoffice/settings" className="block opacity-40 hover:opacity-100 hover:text-[#22c55e] transition-all">FIELD_CONFIG</a>
                        <a href="#" className="block text-[#22c55e] underline decoration-8 underline-offset-8">GLOBAL_ROOTS</a>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#22c55e] italic">FIELD_OVERSIGHT // GLOBAL_ROOTS_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic">THE_GLOBAL_ROOTS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-[#22c55e] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#2d3a3a] transition-all shadow-2xl relative z-10">PLANT_NEW_REGION</button>
                </header>

                <section className="bg-white p-16 rounded-[5rem] shadow-2xl border-8 border-white space-y-12 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#22c55e]/40 italic px-4">
                        <div className="space-x-12">
                            <button className="text-[#2d3a3a] border-b-8 border-[#22c55e]">ROOT_TOKENS</button>
                            <button>SOIL_LANGUAGES</button>
                            <button>FIELD_MAPS</button>
                        </div>
                        <div>POLLINATING_GLOBAL_NODES...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#22c55e] border-b-8 border-[#faf9f6]">
                                <th className="pb-8">FIELD_ID</th>
                                <th className="pb-8">FIELD_LOCUS</th>
                                <th className="pb-8">ROOT_TOKEN</th>
                                <th className="pb-8">GROWTH_SYNC</th>
                                <th className="pb-8 text-right">MANIFEST</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase">
                            {fields.map((f) => (
                                <tr key={f.id} className="border-b-8 border-[#faf9f6] hover:bg-[#22c55e]/10 transition-all cursor-pointer group">
                                    <td className="py-12">#{f.id}</td>
                                    <td className="py-12">{f.field}</td>
                                    <td className="py-12 text-[#22c55e]">{f.token}</td>
                                    <td className="py-12 text-sm text-[#2d3a3a44]">{f.growth}</td>
                                    <td className="py-12 text-right">
                                        <button className="text-sm bg-[#faf9f6] border-8 border-[#22c55e11] px-8 py-2 rounded-full hover:bg-[#22c55e] hover:text-white transition-all">REFRESH</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-12">
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-8 border-white space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">DEFAULT_HARVEST_VOICE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black italic">Fresh_English</p>
                            <button className="text-[#22c55e] text-[10px] font-black uppercase hover:underline decoration-8">UPROOT_TEXT</button>
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-8 border-white space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">AUTOMATIC_SOIL_SYNC</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-black italic">Active (Sprouting)</p>
                            <div className="w-16 h-8 bg-[#22c55e] rounded-full relative shadow-inner">
                                <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
