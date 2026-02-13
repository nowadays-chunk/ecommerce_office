"use client";

import React from 'react';

export default function NordicLocalization() {
    const markets = [
        { id: 'NR-MKT-01', region: 'North_Studio', currency: 'EUR (€)', status: 'Active' },
        { id: 'NR-MKT-02', region: 'West_Workshop', currency: 'USD ($)', status: 'Active' },
        { id: 'NR-MKT-03', region: 'East_Gallery', currency: 'JPY (¥)', status: 'Synced' },
    ];

    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans flex">
            {/* Sidebar */}
            <aside className="w-80 border-r border-[#2d2d2d]/10 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-8 h-px bg-[#2d2d2d]/40"></div>
                    <h2 className="text-3xl font-light uppercase tracking-tight">STUDIO_OPS.</h2>
                    <nav className="space-y-8 text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 italic">
                        <a href="/variances/nordic/backoffice/dashboard" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">UTILITY_VIEW</a>
                        <a href="/variances/nordic/backoffice/settings" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">STUDIO_CONFIG</a>
                        <a href="#" className="block text-[#2d2d2d]">GLOBAL_UTILITY</a>
                    </nav>
                </div>
                <div className="text-[10px] font-bold opacity-20 uppercase tracking-[0.4em] italic">
                    STUDIO_EFFICIENCY_v1.01
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-[#2d2d2d]/10 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">GLOBAL_INTEL // STUDIO_STORES_LIVE</p>
                        <h1 className="text-6xl font-light uppercase tracking-tight leading-none">THE_GLOBAL_UTILITY.</h1>
                    </div>
                    <button className="px-12 py-5 border-2 border-[#2d2d2d] text-[#2d2d2d] text-[10px] font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all">LINK_NEW_STUDIO</button>
                </header>

                <section className="bg-white border border-[#2d2d2d]/10 p-16 space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 italic">
                        <div className="space-x-12">
                            <button className="text-[#2d2d2d] border-b border-[#2d2d2d] pb-1">CURRENCY_LABELS</button>
                            <button>TRANSLATION_KEYS</button>
                            <button>STUDIO_REGIONS</button>
                        </div>
                        <div>SCANNING_GLOBAL_NODES...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-bold uppercase tracking-widest opacity-40 border-b border-[#2d2d2d]/10">
                                <th className="pb-8">STUDIO_ID</th>
                                <th className="pb-8">REGION_TAG</th>
                                <th className="pb-8">LOCAL_CURRENCY</th>
                                <th className="pb-8">SYNC_LEVEL</th>
                                <th className="pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light">
                            {markets.map((m) => (
                                <tr key={m.id} className="border-b border-[#2d2d2d]/5 group hover:bg-[#f9f9f9] transition-colors">
                                    <td className="py-10">#{m.id}</td>
                                    <td className="py-10">{m.region}</td>
                                    <td className="py-10 text-[12px] font-bold uppercase italic">{m.currency}</td>
                                    <td className="py-10 opacity-40">{m.status}</td>
                                    <td className="py-10 text-right">
                                        <button className="text-[10px] font-bold border border-[#2d2d2d]/20 px-6 py-2 hover:bg-[#2d2d2d] hover:text-white transition-all">UPDATE_FX</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-8 italic">
                    <div className="border border-[#2d2d2d]/10 p-12 space-y-4">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40">PRIMARY_STUDIO_LANGUAGE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-light">Danish (Default)</p>
                            <button className="text-[10px] font-bold uppercase tracking-widest border-b border-[#2d2d2d]">SWAP_KEYS</button>
                        </div>
                    </div>
                    <div className="border border-[#2d2d2d]/10 p-12 space-y-4">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40">AUTOMATIC_MARKET_SYNC</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-light">Active (Daily)</p>
                            <div className="w-10 h-1 bg-[#2d2d2d]/10 relative overflow-hidden">
                                <div className="h-full bg-[#2d2d2d] w-[60%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
