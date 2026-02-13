"use client";

import React from 'react';

export default function LuxeLocalization() {
    const regions = [
        { id: 'LX-REG-01', name: 'European_Union', currency: 'EUR (€)', status: 'Active' },
        { id: 'LX-REG-02', name: 'Americas_Elite', currency: 'USD ($)', status: 'Active' },
        { id: 'LX-REG-03', name: 'Asian_Pacific', currency: 'JPY (¥)', status: 'Synced' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] font-serif flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-black/5 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <h2 className="text-3xl font-light italic uppercase tracking-tighter">LUXE_ADMIN.</h2>
                    <nav className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                        <a href="/variances/luxe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 transition-opacity">01_OVERSIGHT</a>
                        <a href="/variances/luxe/backoffice/settings" className="block opacity-40 hover:opacity-100 transition-opacity">06_SECURITY_NODES</a>
                        <a href="#" className="block text-[#d4af37]">07_GLOBAL_MARKETS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-widest italic">
                    V8.01_SECURE_NODE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end border-b border-black/5 pb-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">GLOBAL_OVERSIGHT // {new Date().getFullYear()}</p>
                        <h1 className="text-6xl font-light italic tracking-tighter uppercase leading-none">THE_GLOBAL_MARKETS.</h1>
                    </div>
                    <button className="px-12 py-4 border border-black text-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">ADD_MARKET_NODE</button>
                </header>

                <section className="bg-white p-16 border border-black/5 space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                        <div className="space-x-8">
                            <button className="text-black border-b border-black">CURRENCY_MODELS</button>
                            <button>LANGUAGE_ARCHIVES</button>
                            <button>REGIONAL_FLOWS</button>
                        </div>
                        <div>MANAGE_GLOBAL_NODES...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b border-black/5">
                                <th className="pb-6">MARKET_ID</th>
                                <th className="pb-6">REGION_DESCRIPTOR</th>
                                <th className="pb-6">PRIMARY_CURRENCY</th>
                                <th className="pb-6">SYNC_STATUS</th>
                                <th className="pb-6 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            {regions.map((r) => (
                                <tr key={r.id} className="border-b border-black/5 group hover:bg-[#fcfcfc]">
                                    <td className="py-8">#{r.id}</td>
                                    <td className="py-8">{r.name}</td>
                                    <td className="py-8 text-[12px] font-black uppercase tracking-widest text-[#d4af37]">{r.currency}</td>
                                    <td className="py-8 opacity-40">{r.status}</td>
                                    <td className="py-8 text-right">
                                        <button className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-6 py-2 hover:bg-black hover:text-white transition-all">REFINE_FX</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid grid-cols-2 gap-16">
                    <div className="bg-white p-12 border border-black/5 space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">DEFAULT_HERITAGE_LANGUAGE</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-light italic">English (UK)</p>
                            <button className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest">CHANGE_ARCHIVE</button>
                        </div>
                    </div>
                    <div className="bg-white p-12 border border-black/5 space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">AUTO_FX_SYNC</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-light italic">Enabled (Real-time)</p>
                            <div className="w-12 h-6 bg-[#d4af37] rounded-full relative">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
