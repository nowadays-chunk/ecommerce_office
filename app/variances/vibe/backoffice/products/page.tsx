"use client";

import React from 'react';

export default function VibeProductManagement() {
    const drops = [
        { id: 'VB-8821', title: 'Lofi Beats Tape v1', price: '$42', stock: 124, vibe: 'MAX_GRAIN' },
        { id: 'VB-8794', title: 'Analog Dream Synth', price: '$220', stock: 45, vibe: 'LO-FI_HUB' },
        { id: 'VB-8750', title: 'Saturated Sunset Print', price: '$85', stock: 12, vibe: 'WARM_SYNC' },
    ];

    return (
        <div className="min-h-screen bg-[#ffecd1] text-[#ff4d6d] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r-8 border-[#ff4d6d1a] p-12 flex flex-col justify-between shadow-2xl relative">
                <div className="absolute top-0 right-0 w-8 h-full bg-[#ff4d6d]/5 animate-pulse"></div>
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-[#ff4d6d] rounded-full shadow-retro"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">V_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/vibe/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">WAVE_SYNC</a>
                        <a href="#" className="block text-[#ff4d6d] underline decoration-4 underline-offset-8">TAPE_STOCK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">SYNC_HISTORY</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">VIBE_TRIBE</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:rotate-3 transition-all">SATURATION_LOGS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.4em] italic text-center">
                    SATURED_ENGINE_v4.20
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto">
                <header className="flex justify-between items-center bg-white p-12 rounded-[4rem] shadow-retro border-4 border-[#ff4d6d1a] transform rotate-1">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">ANALOG_INVENTORY // WAVE_SYNC_LIVE</p>
                        <h1 className="text-6xl font-black tracking-tighter uppercase leading-none italic">TAPE_VAULT_LOGS.</h1>
                    </div>
                    <button className="px-12 py-5 bg-[#ff4d6d] text-white text-[12px] font-black uppercase tracking-widest rounded-full hover:scale-110 transition-all shadow-xl">ADD_NEW_TAPE</button>
                </header>

                <section className="bg-white p-16 rounded-[5rem] shadow-retro border-4 border-white space-y-16">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest">
                        <div className="space-x-12">
                            <button className="text-[#ff4d6d] border-b-4 border-[#ff4d6d] pb-1">ALL_TAPE_FEED</button>
                            <button className="opacity-40 hover:opacity-100">SATURATION_LIST</button>
                            <button className="opacity-40 hover:opacity-100">ARCHIVE_WAVE</button>
                        </div>
                        <div className="opacity-20 italic">TUNING_SEARCH_FREQUENCY...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[12px] font-black uppercase tracking-widest opacity-40 border-b-4 border-[#ffecd1]">
                                <th className="pb-10">TAPE_ID</th>
                                <th className="pb-10">DROP_DESIGNATION</th>
                                <th className="pb-10">SATURATION</th>
                                <th className="pb-10">TAPE_SYNC</th>
                                <th className="pb-10">VIBE_SYNC</th>
                                <th className="pb-10 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl font-black italic uppercase text-[#ff4d6d]/80">
                            {drops.map((drop) => (
                                <tr key={drop.id} className="border-b-4 border-[#ffecd1] group hover:bg-[#ffecd1]/20 transition-colors">
                                    <td className="py-12">#{drop.id}</td>
                                    <td className="py-12 underline decoration-4 decoration-[#ff4d6d]/10">{drop.title}</td>
                                    <td className="py-12">{drop.price}</td>
                                    <td className="py-12">{drop.stock}</td>
                                    <td className="py-12 text-sm">{drop.vibe}</td>
                                    <td className="py-12 text-right space-x-12">
                                        <button className="text-xl underline decoration-[#ff4d6d]/20 hover:decoration-[#ff4d6d]">SYNC</button>
                                        <button className="text-xl text-red-600/40 hover:text-red-600 underline">VOID</button>
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
