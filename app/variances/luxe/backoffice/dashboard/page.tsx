"use client";

import React from 'react';

export default function LuxeAdminDashboard() {
    return (
        <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] font-serif flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-black/5 p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <h2 className="text-3xl font-light italic uppercase tracking-tighter">LUXE_ADMIN.</h2>
                    <nav className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                        <a href="#" className="block text-[#d4af37]">01_OVERSIGHT</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">02_COLLECTIONS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">03_ACQUISITIONS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">04_CLIENTELE</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 transition-opacity">05_ARCHIVE</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-20 uppercase tracking-widest italic">
                    V8.01_SECURE_NODE
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-24">
                <header className="flex justify-between items-end">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] italic">ADMIN_OVERVIEW // OCT 12, 2025</p>
                        <h1 className="text-6xl font-light italic tracking-tighter uppercase leading-none">THE_VAULT_METRICS.</h1>
                    </div>
                    <button className="px-12 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] transition-all">INITIATE_DROP</button>
                </header>

                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-white p-12 border border-black/5 space-y-4">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">TOTAL_REVENUE</p>
                        <h3 className="text-5xl font-light italic">€1.4M</h3>
                        <div className="w-full h-px bg-black/5"></div>
                        <p className="text-[10px] font-bold text-[#d4af37]">+12.4% VS LAST_CYCLE</p>
                    </div>
                    <div className="bg-white p-12 border border-black/5 space-y-4">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">ACQUISITION_RATE</p>
                        <h3 className="text-5xl font-light italic">88%</h3>
                        <div className="w-full h-px bg-black/5"></div>
                        <p className="text-[10px] font-bold text-[#d4af37]">OPTIMIZED_SYNC</p>
                    </div>
                    <div className="bg-white p-12 border border-black/5 space-y-4">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">ACTIVE_MUSE_TIER</p>
                        <h3 className="text-5xl font-light italic">420</h3>
                        <div className="w-full h-px bg-black/5"></div>
                        <p className="text-[10px] font-bold text-[#d4af37]">EXCLUSIVE_ACCESS</p>
                    </div>
                </div>

                <section className="bg-white p-16 border border-black/5 space-y-12">
                    <h2 className="text-3xl font-light italic uppercase tracking-tighter">RECENT_ACQUISITIONS.</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-widest opacity-40 border-b border-black/5">
                                <th className="pb-6">ID</th>
                                <th className="pb-6">CLIENT</th>
                                <th className="pb-6">COLLECTION</th>
                                <th className="pb-6">STATUS</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            <tr className="border-b border-black/5">
                                <td className="py-8">#LX-8802</td>
                                <td className="py-8">A. VANDERBILT</td>
                                <td className="py-8">ABSOLUTE_OBSIDIAN</td>
                                <td className="py-8 text-[#d4af37]">CONFIRMED</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="py-8">#LX-8791</td>
                                <td className="py-8">E. ROTHSCHILD</td>
                                <td className="py-8">HERITAGE_SILK</td>
                                <td className="py-8 text-[#d4af37]">IN_TRANSIT</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
